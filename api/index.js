import cors from 'cors'
import express from 'express'

const app = express()
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello from Express on Vercel!')
})

export default app
