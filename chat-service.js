const axios = require('axios');


const saveMessageToDB = async(url, body) => {
    let res = await axios.post(url, body);
}

const initMessaging = async(url, body, callback) => {
    let res = await axios.post(url, body);
    callback(res.data.data);
}

const testConnection = async(url) => {
    let res = await axios.get(url);
    return res.data;
}


module.exports = { saveMessageToDB, initMessaging, testConnection };