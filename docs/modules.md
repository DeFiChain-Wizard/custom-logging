[@defichainwizard/custom-logging](README.md) / Exports

# @defichainwizard/custom-logging

## Table of contents

### Classes

- [Telegram](classes/Telegram.md)

### Interfaces

- [TelegramBotConfig](interfaces/TelegramBotConfig.md)
- [WalletInfo](interfaces/WalletInfo.md)

### Functions

- [logConfig](modules.md#logconfig)
- [logDebug](modules.md#logdebug)
- [logError](modules.md#logerror)
- [logInfo](modules.md#loginfo)
- [logTable](modules.md#logtable)
- [logTelegram](modules.md#logtelegram)
- [logTitle](modules.md#logtitle)
- [logWalletInfo](modules.md#logwalletinfo)
- [logWarn](modules.md#logwarn)

## Functions

### logConfig

▸ **logConfig**(`config`): `void`

Prints out the current config

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | `CustomMessage` | The config to print out |

#### Returns

`void`

#### Defined in

[index.ts:106](https://github.com/DeFiChain-Wizard/custom-logging/blob/6e85908/src/index.ts#L106)

___

### logDebug

▸ **logDebug**(...`message`): `void`

Logs out an DEBUG log.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...message` | (`string` \| `number` \| `object`)[] | Either one or more parameters to log out |

#### Returns

`void`

#### Defined in

[index.ts:45](https://github.com/DeFiChain-Wizard/custom-logging/blob/6e85908/src/index.ts#L45)

___

### logError

▸ **logError**(...`message`): `void`

Logs out an ERROR log.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...message` | (`string` \| `number` \| `object`)[] | Either one or more parameters to log out |

#### Returns

`void`

#### Defined in

[index.ts:80](https://github.com/DeFiChain-Wizard/custom-logging/blob/6e85908/src/index.ts#L80)

___

### logInfo

▸ **logInfo**(...`message`): `void`

Logs out an INFO log.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...message` | (`string` \| `number` \| `object`)[] | Either one or more parameters to log out |

#### Returns

`void`

#### Defined in

[index.ts:29](https://github.com/DeFiChain-Wizard/custom-logging/blob/6e85908/src/index.ts#L29)

___

### logTable

▸ **logTable**(...`message`): `void`

Prints out any array or object as table.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...message` | (`string` \| `number` \| `object`)[] | Either one or more parameters to log out |

#### Returns

`void`

#### Defined in

[index.ts:96](https://github.com/DeFiChain-Wizard/custom-logging/blob/6e85908/src/index.ts#L96)

___

### logTelegram

▸ **logTelegram**(`telegram`, `message`): `Promise`<`void`\>

Logging to the Telegram chat.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `telegram` | [`Telegram`](classes/Telegram.md) | - |
| `message` | `string` | The message to send to the telegram service. |

#### Returns

`Promise`<`void`\>

#### Defined in

[index.ts:116](https://github.com/DeFiChain-Wizard/custom-logging/blob/6e85908/src/index.ts#L116)

___

### logTitle

▸ **logTitle**(): `void`

Logging some coole title to the console! :)

#### Returns

`void`

#### Defined in

[index.ts:132](https://github.com/DeFiChain-Wizard/custom-logging/blob/6e85908/src/index.ts#L132)

___

### logWalletInfo

▸ **logWalletInfo**(`walletInfo`): `void`

Prints out some detailed information about a given Wallet

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletInfo` | [`WalletInfo`](interfaces/WalletInfo.md) |

#### Returns

`void`

#### Defined in

[wallet.ts:19](https://github.com/DeFiChain-Wizard/custom-logging/blob/6e85908/src/wallet.ts#L19)

___

### logWarn

▸ **logWarn**(...`message`): `void`

Logs out an WARNING log.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...message` | (`string` \| `number` \| `object`)[] | Either one or more parameters to log out |

#### Returns

`void`

#### Defined in

[index.ts:64](https://github.com/DeFiChain-Wizard/custom-logging/blob/6e85908/src/index.ts#L64)
