const axios = require('axios');

// Function to get IP geolocation
const getIPGeoLocation = async (ip) => {
    const response = await axios.get(`https://ip-api.com/json/${ip}`);
    return response.data;
};

module.exports = { getIPGeoLocation };