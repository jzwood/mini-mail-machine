module.exports = {
  m(dat, num){
    return `
    <section class="m-section-${num} m-section-container-${num}">
      <h1 class="m-section m-sect-h1 m-h1-${num}">${ dat.hero }</h1>
      <p class="m-section m-sect-p m-p-${num}">${ template.helper.clean(dat.copy) }</p>
      ${mgetCTAs(dat)}
    </section>`
  },

  d(dat,ptop='0'){
     let paddingLeft = '44px', copyColor = "#333333", typeset = "letter-spacing: 0.003em;; line-height:26px; font-size: 17px;"
    return template.elem.table('740',
      template.elem.td(`text-align:left; padding-top:${ptop}; padding-left:${paddingLeft}; font-size: 22px; letter-spacing: 0.005em;`, dat.hero ) +
      "</tr><tr>" +
      template.elem.td(`text-align:left; padding:5px 123px 4px ${paddingLeft}; ${typeset}`, template.helper.clean(dat.copy) ) +
      "</tr><tr>" + dgetCTAs(`text-align:left; padding-top:5px; padding-left:${paddingLeft}; color: #0070c9; ${typeset}`, dat),
      style=`color:${copyColor}`
    )
  }
}

function dgetCTAs(style, data){
  return (typeof data.cta === 'object') ?
    `${data.cta.map( cta => {
        return template.helper.mso(dCTA2(style,cta), dCTA(style,cta))
      }).join('</tr><tr>')
    }` : ''
}

function dCTA(style,cta){
  return template.elem.td(style,
    template.elem.a(cta,cta.trim() + template.elem.chevron('icon_chevronright_17_ffffff_2x.png','vertical-align:bottom;').trim(), 'color: #0070c9;')
  )
}

function dCTA2(style,cta){
  return template.elem.td(style,
    template.elem.table('100%',
      template.elem.td('text-align:left; white-space:nowrap;', template.elem.a(cta,cta.trim(), 'color: #0070c9; font-size: 17px;')) +
        template.elem.td('text-align:left; white-space:nowrap; width:100%;',
          template.elem.table('100%',
            template.elem.td("text-align:left; padding-top: 5px;", template.elem.chevron('icon_chevronright_17_ffffff_2x.png').trim()
          )
        )
      )
    )
  )
}

function mgetCTAs(data){
  return (typeof data.cta === 'object') ?
    `${data.cta.map( cta => {
        return mCTA(cta)
      }).join('')
    }` : ''
}

function mCTA(cta){
  return template.elem.a(cta,cta.trim() + template.elem.m_chevron().trim(), '',"m-section m-cta")
}
