/* eslint-disable no-console */
/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * This is just a little helper class to have a logger in each of our components.
 *
 * This logger solely relies on console.* calls to be independent.
 */

//TODO Printout bot config
//TODO print out vault
import { table } from "console";
import { Telegram, TelegramBotConfig } from "./messenger/telegram";
import { logWalletInfo } from "./wallet";
import {
  DEBUG,
  ERROR,
  getDate,
  INFO,
  isDevelopmentEnvironment,
  log,
  prepareOutput,
  WARNING,
} from "./utils/helper";

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
  // only log out debug if dev environment is set
  if (isDevelopmentEnvironment()) {
    const messageToLog = prepareOutput(message);
    if (typeof message === "object") {
      // Combine styled and normal strings
      log(getDate(), DEBUG, messageToLog);
    } else {
      // Combine styled and normal strings
      log(getDate(), `${DEBUG} ${messageToLog}`);
    }
  }
};

/**
 * Logs out an WARNING log.
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
 * Logs out an ERROR log.
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

/**
 * Logging to the Telegram chat.
 * @param message The message to send to the telegram service.
 */
const logTelegram = async (telegram: Telegram, message: string) => {
  try {
    await telegram.send(message);
  } catch (error) {
    if (typeof error === "string") {
      logError(error);
    } else if (error instanceof Error) {
      logError(error.message);
    }
  }
};

/**
 * Logging some coole title to the console! :)
 *
 */
const logTitle = () => {
  logInfo(`
  
 /$$$$$$$            /$$$$$$$$ /$$  /$$$$$$  /$$                 /$$                 /$$      /$$ /$$                                     /$$
| $$__  $$          | $$_____/|__/ /$$__  $$| $$                |__/                | $$  /$ | $$|__/                                    | $$
| $$  \ $$  /$$$$$$ | $$       /$$| $$  \__/| $$$$$$$   /$$$$$$  /$$ /$$$$$$$       | $$ /$$$| $$ /$$ /$$$$$$$$  /$$$$$$   /$$$$$$   /$$$$$$$
| $$  | $$ /$$__  $$| $$$$$   | $$| $$      | $$__  $$ |____  $$| $$| $$__  $$      | $$/$$ $$ $$| $$|____ /$$/ |____  $$ /$$__  $$ /$$__  $$
| $$  | $$| $$$$$$$$| $$__/   | $$| $$      | $$  \ $$  /$$$$$$$| $$| $$  \ $$      | $$$$_  $$$$| $$   /$$$$/   /$$$$$$$| $$  \__/| $$  | $$
| $$  | $$| $$_____/| $$      | $$| $$    $$| $$  | $$ /$$__  $$| $$| $$  | $$      | $$$/ \  $$$| $$  /$$__/   /$$__  $$| $$      | $$  | $$
| $$$$$$$/|  $$$$$$$| $$      | $$|  $$$$$$/| $$  | $$|  $$$$$$$| $$| $$  | $$      | $$/   \  $$| $$ /$$$$$$$$|  $$$$$$$| $$      |  $$$$$$$
|_______/  \_______/|__/      |__/ \______/ |__/  |__/ \_______/|__/|__/  |__/      |__/     \__/|__/|________/ \_______/|__/       \_______/

`);
};

export {
  logInfo,
  logDebug,
  logError,
  logWarn,
  logTable,
  logTelegram,
  logTitle,
  Telegram,
  TelegramBotConfig,
  logWalletInfo,
};
