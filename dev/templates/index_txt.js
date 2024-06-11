let divider = () => { return '-'.repeat(54) }

module.exports = () => { return `

${data.ttl}

${data.s1.hero}

${clean(data.s1.copy)}

${data.s1.cta[0]}
${resolveLink(data.s1.cta[0])}

${data.s1.cta[1]}
${resolveLink(data.s1.cta[1])}

${divider()}

${data.s2.hero}

${clean(data.s2.copy)}

${divider()}

${data.s3.hero}

${clean(data.s3.copy)}
${resolveLink('back up your data')}

${divider()}

${data.s4.hero}

${clean(data.s4.copy)}
${resolveLink(data.s4.cta)}

${divider()}

${data.s5.hero}

${footerCtas()}
${divider()}
${footerBuystrip()}

${divider()}
${footerCopy()}


`.trim()
}

function resolveLink(link){
    return data.registeredLinks[link] ? '[[CLIK_' + data.registeredLinks[link] + ']]' : ''
  }

function clean(str){
  return str.replace(/\^([0-9])/g,"[$1]")
}

function footerCtas(){
  let resolveLink = (link) => {
    return data.registeredLinks[link] ? '\n[[CLIK_' + data.registeredLinks[link] + ']]' : ''
  }
  return data.footer.ctas.map(cta => {
    return cta + resolveLink(cta) + '\n'
  }).join('\n')
}

function footerBuystrip(){
  return data.footer.buystrip.map(col => {
    return col.map(row => {
      return row
    }).join('\n')
  }).join('\n\n' + divider() + '\n')
}

function footerCopy(){
  return data.footer.copy.map(c => {
    return c
  }).join('\n\n')
}
