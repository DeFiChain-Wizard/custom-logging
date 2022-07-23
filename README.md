# DeFiChain Custom logger

The custom logging library for the DeFiChain Wizard

## Basic Usage

```ts
import { logDebug, logError, logInfo, logWarn } from "@defichainwizard/custom-logging";

logInfo("This is an INFO!");
logError("This is an ERROR!");
logWarn("This is an WARNING!");
logDebug("This is a debug message!");
logDebug({ name: "John Doe", age: 41 });
logInfo(1, 2, 3, 4);

```
This will result in this output:

![console info](img/console.png?raw=true "Console Logging output")

## Printing tables

You can also print out `Objects` and `Arrays`as table:

```ts
import { logTable } from "@defichainwizard/custom-logging";


logTable({ name: "John Doe", age: 41 });
logTable(["John", "Smith"], ["Jane", "Doe"], ["Emily", "Jones"]);
logTable([
  { account: 345, text: "Oranges", dollars: 100 },
  { account: 407, text: "Bananas", dollars: 300 },
]);
```

This will result in this output:

![Table logging](img/table.png?raw=true "Table logging output")

## Printing some information about the current wallet

If you want to print out some information about a certain wallet, you can do this:

```ts
const walletInfo: WalletInfo = {
  Address: "8defichainBurnAddressXXXXXXXdRQkSm",
  UTXO: new BigNumber(12312.14).toNumber(),
  Blockheight: 21312,
};

const tokens: Array<AddressToken>  {
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
];

logWalletInfo(walletInfo, tokens);
```

This will result in this output:

![wallet info](img/wallet.png?raw=true "Wallet Info output")
