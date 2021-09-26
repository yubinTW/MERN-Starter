import { startFastify } from './server'
import dotEnv from 'dotenv'

dotEnv.config()

const port: number = Number(process.env.FASTIFY_PORT) || 8888
const server = startFastify(port)

export { server }
