console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`)
function html(block, ...args) {
  var str = block[0]
  for(var i = 0; i < args.length; i++) {
    str += makeSafe(args[i]) + block[i+1]
  }
  return str
}

function makeSafe(str) {
  return = str.replace(/&/g, '&amp;')
              .replace(/'/g, '&apos;')
              .replace(/"/g, '&quot;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
}
