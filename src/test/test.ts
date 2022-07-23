import { logDebug, logError, logInfo, logTable, logWarn } from "..";

logInfo("This is an INFO!");
logError("This is an ERROR!");
logWarn("This is an WARNING!");
logDebug("This is a debug message!");
logDebug({ name: "John Doe", age: 41 });
logInfo(1, 2, 3, 4);

logTable({ name: "John Doe", age: 41 });
logTable(["John", "Smith"], ["Jane", "Doe"], ["Emily", "Jones"]);
logTable([
  { account: 345, text: "Oranges", dollars: 100 },
  { account: 407, text: "Bananas", dollars: 300 },
]);
