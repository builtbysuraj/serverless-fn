import serverless from 'serverless-http'
import app from '../server.js'

// Use serverless-http to adapt Express to Vercel
export default serverless(app)
