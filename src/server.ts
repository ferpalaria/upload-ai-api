import { fastify } from 'fastify'
import { getAllPromptsRoute } from './routes/get-all-prompts'

const app = fastify()

// Todos os modulso usando o "register" tem que ser asyncrono
app.register(getAllPromptsRoute)

app.listen({
    port: 3333
}).then(() => {
    console.log('HTTP Server Running!')
})