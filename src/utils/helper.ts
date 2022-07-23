/* eslint-disable no-console */
import chalk from "chalk";

const INFO = `${chalk.green("INFO")}:`;
const DEBUG = `${chalk.cyan("DEBUG")}:`;
const WARNING = `${chalk.yellow("WARNING")}:`;
const ERROR = `${chalk.red("ERROR")}:`;

const log = console.log;
const table = console.table;

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
 * Generates two-digit numbers for the logging date/time.
 *
 * @param date The date property to format
 * @returns 01 instead of 1, if the number of digits is 1
 */
const prepareDate = (date: number): string =>
  date < 10 ? `0${date}` : `${date}`;

/**
 * Returns the current date/time as String for the logging.
 *
 * @returns the date as String
 */
const getDate = () => {
  const date = new Date();
  return `${date.getFullYear()}/${prepareDate(
    date.getMonth() + 1
  )}/${prepareDate(date.getDate())} - ${date.getHours()}:${prepareDate(
    date.getMinutes()
  )}:${prepareDate(date.getSeconds())}`;
};

export { INFO, DEBUG, ERROR, WARNING, getDate, prepareOutput, log, table };
