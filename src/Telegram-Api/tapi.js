const Token = '1033720100:AAEJqctB3xt4eSqT5QHbm_mSJN---SDL7mM';
const TelegramBot = require('node-telegram-bot-api');
exports.bot = new TelegramBot(Token, {polling: true});
