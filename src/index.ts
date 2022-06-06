import express from 'express'
import morganMiddleware from './config/morgan'
import Logger from './config/winston'

const app = express()
app.use(express.json()) // middleware que transforma req.body a json
app.use(morganMiddleware)

const PORT = 3080

app.get('/ping', (_req, res) => {
  res.send('pong')
})

app.listen(PORT, () => {
  Logger.debug(`Server is listening on port ${PORT}`)
})
