const axios = require("axios");

const { TELEGRAM_GROUP_ID, TELEGRAM_BOT_TOKEN } = process.env;
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;

const sendMessageToGroup = async(message) => {
  const chatId = TELEGRAM_GROUP_ID;
  const text = message;

  await axios.post(`${TELEGRAM_API}/sendMessage`, {
    chat_id: chatId,
    text: text,
  });
};

module.exports = {
  sendMessageToGroup,
};
