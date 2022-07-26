import fetch from "cross-fetch";
import { logDebug } from "..";
import { isStringNullOrEmpty } from "../utils/helper";

const TELEGRAM_ENDPOINT =
  "https://api.telegram.org/bot%token/sendMessage?parse_mode=markdown&chat_id=%chatId&text=%message";

/**
 *  The interface for the Telegram bot configuration
 */
interface TelegramBotConfig {
  botname: string;
  botversion: string;
  chatid: string;
  token: string;
}

/**
 * The Telegram connector.
 */
class Telegram {
  private readonly prefix: string = "[DeFiChain Wizard]";
  readonly chatId: string = "";
  readonly token: string = "";
  readonly logChatId: string = "";
  readonly logToken: string = "";

  constructor(config: TelegramBotConfig) {
    if (
      !config ||
      isStringNullOrEmpty(config.chatid) ||
      isStringNullOrEmpty(config.token) ||
      !config.token.includes(":")
    )
      throw new Error(
        "Please check your Telegram settings. Mandatory fields are missing or are wrong."
      );
    this.token = config.token;
    this.chatId = config.chatid;
    this.prefix = `✨ ${config.botname} - ${config.botversion} ✨`;
    logDebug(
      `Setting up Telegram connector: Token: ${config.token} - chatID: ${config.chatid} - Prefix: [${this.prefix}]`
    );
  }

  /**
   * Sends a message to the configured Telegram chat.
   *
   * @param message The message to send.
   * @returns The result from the API call against Telegram.
   */
  async send(message: string): Promise<unknown> {
    logDebug(`Sending message to Telegram: "${message}".`);
    if (isStringNullOrEmpty(this.chatId) || isStringNullOrEmpty(this.token)) {
      throw new Error(
        "Either chatId or token are not configured. Cannot send anything via Telegram!"
      );
    }
    return this.internalSend(message, this.chatId, this.token);
  }

  /**
   * The actual send command for Telegram. Without any checks.
   *
   * @param message The message to send
   * @param chatId The configured Telegram chatId
   * @param token The configured Telegram token (from botfather)
   * @returns The result from the API call against Telegram.
   */
  async internalSend(
    message: string,
    chatId: string,
    token: string
  ): Promise<unknown> {
    const endpointUrl = TELEGRAM_ENDPOINT.replace("%token", token)
      .replace("%chatId", chatId)
      .replace("%message", encodeURI(`${this.prefix}\n\n${message}`));

    logDebug(endpointUrl);
    const response = await fetch(endpointUrl);
    return await response.json();
  }
}

export { Telegram, TelegramBotConfig };
