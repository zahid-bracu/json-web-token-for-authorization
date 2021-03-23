const express = require('express')
const app = express()
const port = 5000
const {createToken}=require('./jwt');

createToken("token test");

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})