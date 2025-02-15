const axios = require('axios');

module.exports = async (ctx) => {
    const ip = ctx.message.text.split(' ')[1];
    if (ip) {
        const response = await axios.get(`https://ip-api.com/json/${ip}`);
        const data = response.data;
        ctx.reply(`Geolocation for IP ${ip}:\nCity: ${data.city}\nCountry: ${data.country}\nRegion: ${data.regionName}\nLat: ${data.lat}\nLon: ${data.lon}`);
    } else {
        ctx.reply('Please provide an IP address.');
    }
};