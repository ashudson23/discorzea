import * as commands from './';

export default Object.entries(commands)
  .filter(([key,fn]) => key && fn);
