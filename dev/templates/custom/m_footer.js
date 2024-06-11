module.exports = {
  // Hard codes CBX aliases
  bnav([cta1,cta2,cta3,cta4]){
    return `
    <div class="aapl-lowbrow">
      <a href="[[CLIK_M_BNAV_SHOP]]">${cta1}</a><span class="vertical-spacer">|</span><a href="[[CLIK_M_BNAV_FIND]]">${cta2}</a><span class="vertical-spacer">|</span><span class="format-detection">${cta3}</span></div>
      <div class="divider"></div>
      <div class="aapl-lowbrow">
      <a href="[[CLIK_M_BNAV_APP]]">${cta4}</a></div>
      <div class="divider">
    </div>`
  },
  buystrip(sections){
    return sections.map(link => {
      return `
        <div class="m-buystrip-tile">
          ${buystrip_tile(link)}
        </div>`
    }).join('')
  }
}


function buystrip_tile(data){
  return data.map((text,index) => {
    return `<p class="m-buystrip-p m-buystrip-p${index}">${text}</p>`
  }).join('')
}
