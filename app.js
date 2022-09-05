let exp = require('express')
let app = exp()

let port = 3000

app.use(exp.static('/static'))

app.listen(port, () => {
  console.log('App start at http://localhost:' + port)
})