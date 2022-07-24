import { AddressToken } from "@defichain/whale-api-client/dist/api/address";
import { getDate, INFO, log, table } from "./utils/helper";

/**
 * Describes the Wallet Info that should be passed
 */
interface WalletInfo {
  Address: string;
  UTXO: number;
  Blockheight: number;
  TokenBalance?: AddressToken | Map<string, AddressToken> | undefined;
}

/**
 * Prints out some detailed information about a given Wallet
 *
 * @param message Either one or more parameters to log out
 */
const logWalletInfo = (walletInfo: WalletInfo) => {
  const tokenBalance = walletInfo.TokenBalance;
  delete walletInfo.TokenBalance;
  log(getDate(), INFO, "WALLET INFORMATION:");
  table({ walletInfo });
  if (tokenBalance) {
    log(getDate(), INFO, "TOKEN INFORMATION:");
    if (tokenBalance instanceof Map) {
      table(Array.from(tokenBalance.values()));
    } else {
      table(tokenBalance);
    }
  }
};

export { logWalletInfo, WalletInfo };
