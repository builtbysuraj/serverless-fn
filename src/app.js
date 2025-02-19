import cors from 'cors'
import express from 'express'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  return res.json({ message: 'Hello' })
})

app.post('/post', (req, res) => {
  const data = req.body
  return res.json({ data })
})

export default app
