import app from '../server.js'

export default async (req, res) => {
  app(req, res) // Delegate all requests to your Express app
}
