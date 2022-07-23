@defichainwizard/custom-logging / [Exports](modules.md)

# DeFiChain Custom logger

The custom logging library for the DeFiChain Wizard

## Usage

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

![console.log](https://github.com/DeFiChain-Wizard/custom-logging/blob/main/img/console.png)

## printing tables

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

![console.log](https://github.com/DeFiChain-Wizard/custom-logging/blob/main/img/table.png)
