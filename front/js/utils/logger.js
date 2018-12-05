/**
 * @file Frontend logger.
 */

import loglevel from 'loglevel';
import prefix from 'loglevel-plugin-prefix';

loglevel.setLevel(loglevel.levels.DEBUG);

prefix.reg(loglevel);
prefix.apply(loglevel, { template: '%t [%n] %l:' });

const getLogger = name => {
  return loglevel.getLogger(name);
};

export default getLogger;
