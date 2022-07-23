/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * This is just a little helper class to have a logger in each of our components.
 *
 * This logger solely relies on console.* calls to be independent.
 */

import chalk from "chalk";
const log = console.log;
const table = console.table;

const prepareDate = (date: number): string =>
  date < 10 ? `0${date}` : `${date}`;

const INFO = `${chalk.green("INFO")}:`;
const DEBUG = `${chalk.cyan("DEBUG")}:`;
const WARNING = `${chalk.yellow("WARNING")}:`;
const ERROR = `${chalk.red("ERROR")}:`;

const getDate = () => {
  const date = new Date();
  return `${date.getFullYear()}/${prepareDate(
    date.getMonth() + 1
  )}/${prepareDate(date.getDate())} - ${date.getHours()}:${prepareDate(
    date.getMinutes()
  )}:${prepareDate(date.getSeconds())}`;
};

/**
 * Prepares the output for the console logger
 */
const prepareOutput = (array: Array<object | number | string>) => {
  if (array.length === 1) {
    return array[0];
  }
  return array;
};

/**
 * Logs out an INFO log.
 *
 * @param message Either one or more parameters to log out
 */
const logInfo = (...message: Array<object | number | string>) => {
  const messageToLog = prepareOutput(message);
  if (typeof message === "object") {
    // Combine styled and normal strings
    log(getDate(), INFO, messageToLog);
  } else {
    // Combine styled and normal strings
    log(getDate(), `${INFO} ${messageToLog}`);
  }
};

/**
 * Logs out an DEBUG log.
 *
 * @param message Either one or more parameters to log out
 */
const logDebug = (...message: Array<object | number | string>) => {
  const messageToLog = prepareOutput(message);
  if (typeof message === "object") {
    // Combine styled and normal strings
    log(getDate(), DEBUG, messageToLog);
  } else {
    // Combine styled and normal strings
    log(getDate(), `${DEBUG} ${messageToLog}`);
  }
};

/**
 * Logs out an DEBUG log.
 *
 * @param message Either one or more parameters to log out
 */
const logWarn = (...message: Array<object | number | string>) => {
  const messageToLog = prepareOutput(message);
  if (typeof message === "object") {
    // Combine styled and normal strings
    log(getDate(), WARNING, messageToLog);
  } else {
    // Combine styled and normal strings
    log(getDate(), `${WARNING} ${messageToLog}`);
  }
};

/**
 * Logs out an DEBUG log.
 *
 * @param message Either one or more parameters to log out
 */
const logError = (...message: Array<object | number | string>) => {
  const messageToLog = prepareOutput(message);
  if (typeof message === "object") {
    // Combine styled and normal strings
    log(getDate(), ERROR, messageToLog);
  } else {
    // Combine styled and normal strings
    log(getDate(), `${ERROR} ${messageToLog}`);
  }
};

/**
 * Prints out any array or object as table.
 *
 * @param message Either one or more parameters to log out
 */
const logTable = (...message: Array<object | number | string>) => {
  const messageToLog = prepareOutput(message);
  log(getDate(), INFO);
  table(messageToLog);
};

export { logInfo, logDebug, logError, logWarn, logTable };