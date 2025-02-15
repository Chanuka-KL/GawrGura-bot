const { Telegraf } = require('telegraf');
const config = require('./config/config.js');
const ipgeo = require('./commands/ipgeo');
const portscan = require('./commands/portscan');
// Load other commands similarly...

// Initialize Telegram Bot
const bot = new Telegraf(config.BOT_TOKEN);

// Register Commands
bot.command('ipgeo', ipgeo);
bot.command('portscan', portscan);
// Register other commands...

bot.launch().then(() => {
    console.log('GawrGura Hacking Bot is live!');
});