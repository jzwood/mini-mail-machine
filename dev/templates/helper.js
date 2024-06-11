function clean(string){
  let link = "back up your data"
  return string.replace(/\^[0-9]/g,function(a){
  	return a.replace('^','<sup style="font-size: 11px;">')+'</sup>'
  }).replace(link, template.elem.a(link,link,'color:#0070c9;'))
}

function colorLink(string){
  return string.replace(/( 1-800-MY-FRUIT)/,function(str){
    return `<span style="color:#ffffff;">:</span><span class="blue">${str.trim()}</span>`
  })
}

function autoLink(string,color='#333333'){
  return string.replace(/www\..*? |www\..*/g,function(str){
    return template.elem.a(str,str + ' ',`color:${color};`)
  })
}

function mso(mso,notMso){
  return `<!--[if mso]>${mso}<![endif]-->
    <!--[if !mso]><!-- -->${notMso}<!--<![endif]--> `
}

module.exports = {
  clean, colorLink, autoLink, mso
}
