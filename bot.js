const { Telegraf } = require('telegraf');
const axios = require('axios');
require('dotenv').config();

// Create bot instance using your token
const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

// Start command
bot.start((ctx) => {
  ctx.reply('Hello! I am GwarGura bot. Let me know how I can assist you!');
});

// Respond with an image when the user sends a photo
bot.on('photo', (ctx) => {
  ctx.replyWithPhoto('https://path-to-your-image.jpg', { caption: 'Here’s an image for you!' });
});

// Respond with a voice message
bot.command('voice', (ctx) => {
  ctx.replyWithVoice('https://github.com/Chanuka-KL/GawrGura-bot/raw/refs/heads/main/Pew.wav');
});

// React to messages
bot.on('text', (ctx) => {
  ctx.react('👍'); // Adds a thumbs up reaction
});

// Send a custom styled text with Markdown formatting
bot.command('styled', (ctx) => {
  ctx.replyWithMarkdown(
    '*Welcome to GwarGura Bot!* \n _We can send images, voice messages, and more!_ \n **Enjoy!**',
    { parse_mode: 'MarkdownV2' }
  );
});

// Inline query (Optional: You can extend this feature if needed)
bot.on('inline_query', (ctx) => {
  ctx.answerInlineQuery([
    {
      type: 'article',
      id: '1',
      title: 'Check this out!',
      input_message_content: { message_text: 'This is an inline message!' }
    }
  ]);
});

// Start the bot
bot.launch();
console.log('Bot is running...');
