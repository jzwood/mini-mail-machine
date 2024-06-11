module.exports = {

  table(width,innerHTML,style='', addATTR=''){
    let w1 = width.replace('px','')
    return `
      <table width="${w1}" cellpadding="0" cellspacing="0" border="0" align="center" ${addATTR} style="margin: 0 auto; padding: 0; border: none; width: ${width}; ${style}">
        <tr>
          ${innerHTML}
        </tr>
      </table>`
  },

  a(href,innerHTML,style='',classes='aapl-link'){
    let classList = resolveClass(classes),
        hrefValue = data.registeredLinks[href.trim()]
    let cleanAlias = (str) => {
      return (/^www/.test(str)) ? "http://" + str : "[[CLIK_" + str.replace(/\[|\]|CLIK_/g,'') + "]]";
    }
    href = hrefValue ? cleanAlias(hrefValue) : cleanAlias(href)
    return `<a href="${href}" ${classList} style="${style}">${innerHTML}</a>`
  },

  td(style, innerHTML, classes=''){
    let classList = resolveClass(classes)
    return `
    <td align="center" valign="middle" ${classList} style="${style}">
      ${innerHTML}
    </td>`
  },

  img(image, alt='', styles='', scale=1){
    return ` <img src="${imageCache[image].src}" width="${scale * imageCache[image].width}" height="${scale * imageCache[image].height}" border="0" style="margin:0; padding:0; ${styles}" alt="${alt}"> `
  },

  m_img(image, alt='', styles=''){
    //assert img ends in 2x! here
    let scale = 0.5
    return ` <img src="${imageCache[image].src}" width="${scale * imageCache[image].width}" height="${scale * imageCache[image].height}" border="0" style="${styles}" alt="${alt}"> `
  },

  retina_img(image, styles='',fallback=false){
    //assert img ends in 2x! here
    let scale = 0.5, important = fallback ? ' !important' : ''
    return `background: url('${imageCache[image].src}') no-repeat center 0${important}; background-size: ${scale * imageCache[image].width}px ${scale * imageCache[image].height}px${important}; ${styles}`
  },

  chevron(chevron='icon_chevronright_17_ffffff_2x.png', style=''){
    const scale = 0.5
    return `
      <img src="${imageCache[chevron].src}" class="more" width="${scale * imageCache[chevron].width}" height="${scale * imageCache[chevron].height}" style="display:inline; margin:0; ${style}" border="0" alt="">
    `
  },

  chevron2(chevron='icon_chevronright_17_ffffff_2x.png',style=''){
    const scale = 0.5
    return `
      <img src="${imageCache[chevron].src}" class="more" width="${scale * imageCache[chevron].width}" height="${scale * imageCache[chevron].height}" style="display:block; margin:0; ${style}" border="0" alt="">
    `
  },

  m_chevron(chevron='icon_chevronright_17_ffffff_2x.png'){
    const scale = 0.5
    return `
      <img src="${imageCache[chevron].src}" class="more" width="${scale * imageCache[chevron].width}" height="${scale * imageCache[chevron].height}" style="display:inline; margin:0; position:relative; top: 7px;" border="0" alt="">
    `
  },

  keyline(width=700,color='#e3e3e3'){
    let w1 = width.replace('px','')
    return `
    <table width="${w1}" cellspacing="0" cellpadding="0" border="0" align="center" style="margin: 0 auto;">
    	<tr>
    		<td style="font-size:1px;line-height:1px;border-top:1px solid ${color};width:${width};text-align: center;" width="${w1}" valign="top">&nbsp;</td>
    	</tr>
    </table>
    `
  }
}

function resolveClass(classes){
  return classes ? `class="${classes}"` : ''
}
