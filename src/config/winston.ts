import winston from 'winston'

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4
}

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'cyan',
  debug: 'blue'
}

winston.addColors(colors)

const level = (): string => {
  // const env = process.env.NODE_ENV || 'development'
  const env = 'development'
  const isDevelopment = env === 'development'
  return isDevelopment ? 'debug' : 'warn'
}

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }),
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
)

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error'
  }),
  new winston.transports.File({ filename: 'logs/combined.log' })
]

const Logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports
})

export default Logger
