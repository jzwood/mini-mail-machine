### The miniature mail machine


> I've got a fever and the only prescription is more ${template literals}.  
> -- unknown


### abstract

**m3** is an POC implementation of a design pattern that
1) makes DM construction DRY
2) reduces human error by automating error-prone manual processes
3) abstracts only what SUCKS&trade; and little else

#### The Problem

For DM development we would like processes and tooling to make the construction of DMs predictable, error free, and as unlike an anvil on your soul as possible.

DMs coded manually are 1) error prone and 2) tedious.

The build systems introduced to solve this problem address the above concerns--unfortunately, they also
1) add necessary and _unnecessary_ complexity
2) abstract foundational knowledge
3) must be maintained
4) must be learned


#### Candidate Solution

Collect and bundle all information that shows up in the DM more than once.

> e.g. legal copy, headlines, ctas, etc.

Use code to automate binding all images to their associated dimensions. To get the width of *header.png*, for instance, you might access it like

`image_cache['header.png'].width`

Modularize the html with the help of template literals which offer the power of conventional templating and the logic of vanilla javascript. This will make it easy to reference content and image information.

**Example**

```html
let imgTag = img => {
  return `<img src="${image_cache[img].src}" width="${image_cache[img].width}" height="${image_cache[img].height}" alt="${image_cache[img].alt}"/>`
}
let button = (click, img) => {
	return `<a href="[[${click}]]">${imgTag(img)}</a>`
}
```

**Benefits**

* Writing your own partials increases *predictability*.
* Bundling repeatable content makes the code DRYer and reduces errors.
* Modularizing components has the benefit of slightly decreasing development complexity at a minor _context switching_ cost.
* Binding images to image data reduces human error.
* This pattern requires a fundamental knowledge of DM construction and thus does not stand in the path of wisdom.

#### POC

**Usage**

* clone
* install _npm_ dependencies
* `$ npm start` to start server @ port 3000 and `$ npm run dev` for dev

**Dev**

1) Put images in `dev/i`

2) Organized data however you'd like in `dev/data.js`

3) Create/edit partials in `dev/tempates`. Files can be nested however you prefer. The naming convention is basename (whatever you want) + ".js" + a reasonable ext for file (e.g. ".html" or ".css"). Make sure not to reuse any base name! For example, don't name one file "mobile.js.html" and another file "mobile.js.css".
