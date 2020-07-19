const Token = '1136687058:AAGEPw6RuvOW4JCXGWP8X5u-ABnncptTzHc';
const TelegramBot = require('node-telegram-bot-api');
exports.bot = new TelegramBot(Token, {polling: true});
