[@defichainwizard/custom-logging](../README.md) / [Exports](../modules.md) / Telegram

# Class: Telegram

The Telegram connector.

## Table of contents

### Constructors

- [constructor](Telegram.md#constructor)

### Properties

- [chatId](Telegram.md#chatid)
- [logChatId](Telegram.md#logchatid)
- [logToken](Telegram.md#logtoken)
- [prefix](Telegram.md#prefix)
- [token](Telegram.md#token)

### Methods

- [internalSend](Telegram.md#internalsend)
- [send](Telegram.md#send)

## Constructors

### constructor

• **new Telegram**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`TelegramBotConfig`](../interfaces/TelegramBotConfig.md) |

#### Defined in

[messenger/telegram.ts:27](https://github.com/DeFiChain-Wizard/custom-logging/blob/6e85908/src/messenger/telegram.ts#L27)

## Properties

### chatId

• `Readonly` **chatId**: `string` = `""`

#### Defined in

[messenger/telegram.ts:22](https://github.com/DeFiChain-Wizard/custom-logging/blob/6e85908/src/messenger/telegram.ts#L22)

___

### logChatId

• `Readonly` **logChatId**: `string` = `""`

#### Defined in

[messenger/telegram.ts:24](https://github.com/DeFiChain-Wizard/custom-logging/blob/6e85908/src/messenger/telegram.ts#L24)

___

### logToken

• `Readonly` **logToken**: `string` = `""`

#### Defined in

[messenger/telegram.ts:25](https://github.com/DeFiChain-Wizard/custom-logging/blob/6e85908/src/messenger/telegram.ts#L25)

___

### prefix

• `Private` `Readonly` **prefix**: `string` = `"[DeFiChain Wizard]"`

#### Defined in

[messenger/telegram.ts:21](https://github.com/DeFiChain-Wizard/custom-logging/blob/6e85908/src/messenger/telegram.ts#L21)

___

### token

• `Readonly` **token**: `string` = `""`

#### Defined in

[messenger/telegram.ts:23](https://github.com/DeFiChain-Wizard/custom-logging/blob/6e85908/src/messenger/telegram.ts#L23)

## Methods

### internalSend

▸ **internalSend**(`message`, `chatId`, `token`): `Promise`<`unknown`\>

The actual send command for Telegram. Without any checks.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to send |
| `chatId` | `string` | The configured Telegram chatId |
| `token` | `string` | The configured Telegram token (from botfather) |

#### Returns

`Promise`<`unknown`\>

The result from the API call against Telegram.

#### Defined in

[messenger/telegram.ts:65](https://github.com/DeFiChain-Wizard/custom-logging/blob/6e85908/src/messenger/telegram.ts#L65)

___

### send

▸ **send**(`message`): `Promise`<`unknown`\>

Sends a message to the configured Telegram chat.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to send. |

#### Returns

`Promise`<`unknown`\>

The result from the API call against Telegram.

#### Defined in

[messenger/telegram.ts:48](https://github.com/DeFiChain-Wizard/custom-logging/blob/6e85908/src/messenger/telegram.ts#L48)
