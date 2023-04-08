import { app } from './app'
import { env } from './env'

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('-------------------------------')
    console.log('      HTTP server Running      ')
    console.log('-------------------------------')
  })
