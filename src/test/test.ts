import { BigNumber } from "@defichain/jellyfish-api-core";
import { logDebug, logError, logInfo, logTable, logWarn } from "..";
import { logWalletInfo, WalletInfo } from "../wallet";

// Basic Logging
logInfo("This is an INFO!");
logError("This is an ERROR!");
logWarn("This is an WARNING!");
logDebug("This is a debug message!");
logDebug({ name: "John Doe", age: 41 });
logInfo(1, 2, 3, 4);

// Logging out a table
logTable({ name: "John Doe", age: 41 });
logTable(["John", "Smith"], ["Jane", "Doe"], ["Emily", "Jones"]);
logTable([
  { account: 345, text: "Oranges", dollars: 100 },
  { account: 407, text: "Bananas", dollars: 300 },
]);

// Wizard-specific logging
const walletInfo: WalletInfo = {
  Address: "8defichainBurnAddressXXXXXXXdRQkSm",
  UTXO: new BigNumber(12312.14).toNumber(),
  Blockheight: 21312,
  TokenBalance: [
    {
      id: "0",
      amount: "190420.61840602",
      symbol: "DFI",
      symbolKey: "DFI",
      name: "Default Defi token",
      isDAT: true,
      isLPS: false,
      isLoanToken: false,
      displaySymbol: "DFI",
    },
    {
      id: "2",
      amount: "420.61840602",
      symbol: "BTC",
      symbolKey: "BTC",
      name: "Bitcoin",
      isDAT: true,
      isLPS: false,
      isLoanToken: false,
      displaySymbol: "dBTC",
    },
  ],
};

logWalletInfo(walletInfo);
