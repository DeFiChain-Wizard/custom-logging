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

[index.ts:109](https://github.com/DeFiChain-Wizard/custom-logging/blob/ec9fb90/src/index.ts#L109)

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

[index.ts:48](https://github.com/DeFiChain-Wizard/custom-logging/blob/ec9fb90/src/index.ts#L48)

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

[index.ts:83](https://github.com/DeFiChain-Wizard/custom-logging/blob/ec9fb90/src/index.ts#L83)

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

[index.ts:32](https://github.com/DeFiChain-Wizard/custom-logging/blob/ec9fb90/src/index.ts#L32)

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

[index.ts:99](https://github.com/DeFiChain-Wizard/custom-logging/blob/ec9fb90/src/index.ts#L99)

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

[index.ts:119](https://github.com/DeFiChain-Wizard/custom-logging/blob/ec9fb90/src/index.ts#L119)

___

### logTitle

▸ **logTitle**(): `void`

Logging some coole title to the console! :)

#### Returns

`void`

#### Defined in

[index.ts:135](https://github.com/DeFiChain-Wizard/custom-logging/blob/ec9fb90/src/index.ts#L135)

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

[wallet.ts:19](https://github.com/DeFiChain-Wizard/custom-logging/blob/ec9fb90/src/wallet.ts#L19)

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

[index.ts:67](https://github.com/DeFiChain-Wizard/custom-logging/blob/ec9fb90/src/index.ts#L67)
