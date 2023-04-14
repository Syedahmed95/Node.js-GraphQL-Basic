import morgan from 'morgan';

export function APILogs() {
  return morgan('common');
}
