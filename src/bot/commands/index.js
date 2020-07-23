import * as commands from './';

export default Object.entries(commands)
  .filter(([key, cmd]) => key && cmd);
