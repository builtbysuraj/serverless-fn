import app from './app.js'

const PORT = process.env.PORT || 4000

try {
  app.listen(PORT, () => console.log(`Server is running at PORT: ${PORT}`))
} catch (error) {
  console.log(`Error: ${error}`)
}
