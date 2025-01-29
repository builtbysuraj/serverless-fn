import cors from 'cors'
import express from 'express'

const app = express()
app.use(cors())

app.get('/', (req, res) => {
  return res.json({ message: 'Hello' })
})

app.post('/post', (req, res) => {
  const data = req.body
  return res.json({ data: data })
})

export default app
