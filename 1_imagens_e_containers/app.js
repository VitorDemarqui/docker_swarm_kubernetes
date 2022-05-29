const express = require('express')
const app = express()

//deve se a mesma porta que expoe na imagem do dockerfile
const port = 3000

app.get('/', (req, res) => {
  res.send('Olá minha imagem!!!')
})

app.listen(port, () => {
  console.log(`Executando na porta: ${port}`)
});