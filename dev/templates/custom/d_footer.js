module.exports = {
  buystrip(sections){
    return sections.map(link => {
      return template.elem.td(`padding:0; width: ${100/sections.length}%;`, buystrip_tile(link) )
    }).join('')
  }
}

function buystrip_tile(data){
  return data.map((text,index) => {
    return template.elem.table("100%",
      template.elem.td('padding-bottom: 10px; text-align:left; font-size: 12px;' + styleByRow(index), text))
  }).join('')
}

function styleByRow(row){
  return row === 0 ? 'font-weight: 500; color: #333333;' : 'font-weight: 400; color: #666666;'
}
