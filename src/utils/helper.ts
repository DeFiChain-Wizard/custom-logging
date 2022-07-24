/* eslint-disable no-console */
import chalk from "chalk";

const INFO = `${chalk.green("INFO")}:`;
const DEBUG = `${chalk.cyan("DEBUG")}:`;
const WARNING = `${chalk.yellow("WARNING")}:`;
const ERROR = `${chalk.red("ERROR")}:`;

const log = console.log;
const table = console.table;

/**
 * Checks the current environment variable, if available
 */
const isDevelopmentEnvironment = () => process?.env?.NODE_ENV !== "production";

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

/**
 * Checks if a certain String is null or empty
 *
 * @param value the text to be checked
 * @returns true or false
 */
const isStringNullOrEmpty = (value: string): boolean => {
  return value === undefined || value.length === 0;
};

export {
  INFO,
  DEBUG,
  ERROR,
  WARNING,
  getDate,
  prepareOutput,
  log,
  table,
  isDevelopmentEnvironment,
  isStringNullOrEmpty,
};
