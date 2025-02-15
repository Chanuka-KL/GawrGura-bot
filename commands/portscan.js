const axios = require('axios');

module.exports = async (ctx) => {
    const ip = ctx.message.text.split(' ')[1];
    if (ip) {
        // Example port scan response (replace with actual scan logic)
        ctx.reply(`Scanning open ports on ${ip}...\nOpen ports: 80, 443, 8080`);
    } else {
        ctx.reply('Please provide an IP address to scan.');
    }
};