import morgan, { StreamOptions } from 'morgan';
import Logger from './winston';

// Override the Morgan stream options to use Winston logger
const stream: StreamOptions = {
  write: (message: string) => { Logger.http(message); }
};

// Skip all the Morgan http logs if the environment is production
const skip = () => {
  const env = process.env.NODE_ENV || 'development';
  return env !== 'development';
}

const morganMiddleware = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  { stream, skip }
);

export default morganMiddleware;