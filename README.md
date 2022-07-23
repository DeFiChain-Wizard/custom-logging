# DeFiChain Custom logger

The custom logging library for the DeFiChain Wizard

## Usage

```ts
import { logDebug, logError, logInfo, logWarn } from "./src";

logInfo("This is an INFO!");
logError("This is an ERROR!");
logWarn("This is an WARNING!");
logDebug("This is a debug message!");
logDebug({ name: "John Doe", age: 41 });
logInfo(1, 2, 3, 4);

```
This will result in this output:

![console.log](http://url/to/img.png)


