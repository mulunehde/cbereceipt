# CBE Receipt Telegram Bot

## Overview

This Simple Telegram bot is designed to provide users with the ability to view bank receipts using their reference number and the last 7 digits of their account number.

## Setup Instructions

1. Clone this repository to your local machine.
2. Install the necessary dependencies by running `bun install`.
3. Obtain API keys for Telegram Bot API.
4. Create a `.env.local` file in the root directory of the project and add your API keys in the following format:

    ```
    BOT_TOKEN=your_telegram_api_key
    ```

5. Run the bot using `bun dev`.

## Usage

1. Start a conversation with the bot on Telegram by searching for (https://t.me/cbereceipt_bot).
2. Use the `/start` command to initiate the conversation.
3. To view a bank receipt, use the `/receipt` command followed by your reference number and the last 7 digits of your account number in the format `/receipt reference_number last_7_digits`.

## License

This project is licensed under the [MIT License](LICENSE).
