[@defichainwizard/custom-logging](README.md) / Exports

# @defichainwizard/custom-logging

## Table of contents

### Classes

- [Telegram](classes/Telegram.md)

### Interfaces

- [TelegramBotConfig](interfaces/TelegramBotConfig.md)

### Functions

- [logDebug](modules.md#logdebug)
- [logError](modules.md#logerror)
- [logInfo](modules.md#loginfo)
- [logTable](modules.md#logtable)
- [logTelegram](modules.md#logtelegram)
- [logTitle](modules.md#logtitle)
- [logWalletInfo](modules.md#logwalletinfo)
- [logWarn](modules.md#logwarn)

## Functions

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

[index.ts:47](https://github.com/DeFiChain-Wizard/custom-logging/blob/0daea93/src/index.ts#L47)

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

[index.ts:82](https://github.com/DeFiChain-Wizard/custom-logging/blob/0daea93/src/index.ts#L82)

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

[index.ts:31](https://github.com/DeFiChain-Wizard/custom-logging/blob/0daea93/src/index.ts#L31)

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

[index.ts:98](https://github.com/DeFiChain-Wizard/custom-logging/blob/0daea93/src/index.ts#L98)

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

[index.ts:108](https://github.com/DeFiChain-Wizard/custom-logging/blob/0daea93/src/index.ts#L108)

___

### logTitle

▸ **logTitle**(): `void`

Logging some coole title to the console! :)

#### Returns

`void`

#### Defined in

[index.ts:124](https://github.com/DeFiChain-Wizard/custom-logging/blob/0daea93/src/index.ts#L124)

___

### logWalletInfo

▸ **logWalletInfo**(`walletInfo`, `tokenBalance`): `void`

Prints out some detailed information about a given Wallet

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletInfo` | `WalletInfo` |
| `tokenBalance` | `AddressToken`[] |

#### Returns

`void`

#### Defined in

[wallet.ts:18](https://github.com/DeFiChain-Wizard/custom-logging/blob/0daea93/src/wallet.ts#L18)

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

[index.ts:66](https://github.com/DeFiChain-Wizard/custom-logging/blob/0daea93/src/index.ts#L66)
