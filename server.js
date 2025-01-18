import cors from 'cors'
import express from 'express'

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  return res.json({
    message: 'Hello',
  })
})

app.post('/post', (req, res) => {
  const data = req.body
  return res.json({ data: data })
})

app.listen(PORT, () => console.log(`Server is running at port : ${PORT}`))

export default app
