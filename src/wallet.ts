import { AddressToken } from "@defichain/whale-api-client/dist/api/address";
import { getDate, INFO, log, table } from "./utils/helper";

/**
 * Describes the Wallet Info that should be passed
 */
interface WalletInfo {
  Address: string;
  UTXO: number;
  Blockheight: number;
}

/**
 * Prints out some detailed information about a given Wallet
 *
 * @param message Either one or more parameters to log out
 */
const logWalletInfo = (
  walletInfo: WalletInfo,
  tokenBalance: AddressToken[]
) => {
  log(getDate(), INFO, "WALLET INFORMATION:");
  table({ walletInfo });
  log(getDate(), INFO, "TOKEN INFORMATION:");
  table(tokenBalance);
};

export { logWalletInfo, WalletInfo };