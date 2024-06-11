const DEVELOPMENT = process.argv[2]

console.log(
  String.raw`
   __    __     __    __     __    __
  /\ "-./  \   /\ "-./  \   /\ "-./  \
  \ \ \-./\ \  \ \ \-./\ \  \ \ \-./\ \
   \ \_\ \ \_\  \ \_\ \ \_\  \ \_\ \ \_\
    \/_/  \/_/ o \/_/  \/_/ o \/_/  \/_/

       Mini         Mail        Machine

    `)

let glob = require('glob'),
    path = require('path'),
    chokidar = require('chokidar'),
    fs = require('fs'),
    sizeOf = require('image-size'),
    liveServer = require("live-server")

const paths = {
  dev: './dev',
  dist: './dist',
  imgs: './dev/i',
  ext: '.js',
  data: './dev/data.js',
  ic:{
    local: '/dm/local/path',
    remote: '/dm/remote/path'
  }
}

const params = {
    port: 3000,
    host: "localhost",
    root: '.',
    watch: paths.dist,
    open: false, // When false, it won't load your browser by default.
    logLevel: 1 // 0 = errors only, 1 = some, 2 = lots
}

//temp cache of index.html/txt
let indexHTML = indexTXT = ''

function exposeData(){
  global.data = require(paths.data)
}

function updateData(filepath){
  delete require.cache[path.resolve(filepath)]
  data = require(paths.data)
}

//exposes all templates to global scope aliased by filename
function exposeTemplates(){
  global.template = {}
  let templateInventory = []
  glob.sync(`./dev/templates/**/*${paths.ext}?(.html|.css|.js)`).map(file => {
    const basefile = path.basename(file)
    let tempKey = basefile.slice(0,basefile.indexOf(paths.ext))
    if (templateInventory.includes(tempKey)){
      console.error(`\x1b[31m ERROR: duplicate template basename "${file}". Please rename template.\x1b[0m`)
    }
    templateInventory.push(tempKey)
    template[tempKey] = require(path.resolve(file))
  })
}

//reassigns altered template to global template reference
function updateTemplate(filepath){
  if(/\.html|\.css|\.js/.test(filepath)){
    const basefile = path.basename(filepath)
    let tempKey = basefile.slice(0,basefile.indexOf(paths.ext))
    delete require.cache[path.resolve(filepath)]
    template[tempKey] = require(path.resolve(filepath))
  }else{
    console.warn(`\x1b[43m WARNING: untracked file "${filepath}" altered\x1b[0m`)
  }
}

function writeIndexFiles(){
  if(!fs.existsSync(paths.dist)) fs.mkdirSync(paths.dist)
  writeIndexHtml()
  writeIndexTxt()
}

function writeIndexTxt(){
  const index = template.index_txt().trim()
  if(index !== indexTXT){
    indexTXT = index
    const output = path.join(paths.dist,'index.txt')
    fs.writeFile(output, index, err => {
      if(err) { return console.error(err); }
      console.log(`\x1b[32m SAVED:\x1b[0m\t${output}`)
    })
    //write local index in ic directory that referenes remote images
    if(paths.ic.remote && paths.ic.local && fs.existsSync(paths.ic.local)){
      const output2 = path.join(paths.ic.local,'index.txt')
      fs.writeFile(output2, index, err => {
        if(err) { return console.error(err); }
        console.log(`\x1b[32m SAVED:\x1b[0m\t${output2}`)
        })
    }
  }
}

//renders templates and saves as index.html
function writeIndexHtml(){
  const index = template.index_html().trim()
  //potentially validate here
  if(index !== indexHTML){
    indexHTML = index
    const output = path.join(paths.dist,'index.html')
    //write local index that references local images
    fs.writeFile(output, index, err => {
      if(err) { return console.error(err); }
      console.log(`\x1b[32m SAVED:\x1b[0m\t${output}`)
    })
    //write local index in ic directory that referenes remote images
    if(paths.ic.remote && paths.ic.local && fs.existsSync(paths.ic.local)){
      let liveHTML = index.replace(new RegExp(path.relative(paths.dist,paths.imgs), "g"),paths.ic.remote + '/i')
      const output2 = path.join(paths.ic.local,'index.html')
      fs.writeFile(output2, liveHTML, err => {
        if(err) { return console.error(err); }
        console.log(`\x1b[32m SAVED:\x1b[0m\t${output2}`)
        })
    }
  }
}

function cacheImageData(){
  global.imageCache = {}
  glob.sync(`${paths.imgs}/*+(.png|.jpg)`).map(file => {
    dimensions = sizeOf(file)
    imageCache[path.basename(file)] = {
        src: path.relative(paths.dist,file),
        width: ~~(dimensions.width),
        height: ~~(dimensions.height)
      }
  })
}

/*
@TODO add image watching
*/
function watch(){
  let watcher = chokidar.watch(paths.dev, {
    ignored: /[\/\\]\./, persistent: true //ignores ./ and \.
  })
  console.log(`watching ${paths.dev}`)
  watcher.on('change', (filepath, stats) => {
    console.log(`\x1b[35m UPDATED:\x1b[0m\t${filepath}`)
    path.relative(filepath,paths.data) ? updateTemplate(filepath) : updateData(filepath)
    writeIndexFiles()
    if (stats) console.log('File', filePath, 'changed size to', stats.size)
  })
}

let main = (() => {
  cacheImageData()
  exposeData()
  exposeTemplates()
  writeIndexFiles()
  if(DEVELOPMENT){
    watch()
    liveServer.start(params)
  }
})()
