const TeleBot = require('telebot');
const config = require('../config');
const bot = new TeleBot(config.botToken);

const start = (msg) => {
	const replyMarkup = bot.inlineKeyboard([
		[bot.inlineButton('HB4All', { url: 'https://t.mr/hb4all' })],
		[bot.inlineButton('HB4All Bot', { url: 'https://t.me/hb4all_bot' })],
	]);
	bot.sendMessage(
		msg.chat.id,
		`<b>Hi ${msg.chat.first_name}, I Can Short And Bypass Yout Links.</b>\n-/help For More Info\n<code>Bot Developer : </code>@happyboy59`,
		{ parseMode: 'html' }
	);
};

module.exports = start;
