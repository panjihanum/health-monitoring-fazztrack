const request = require("request");
const { telegram } = require("../config");

const checkFazztrack = () => {
  const time = 1000 * 60 * 5;
  const url = "https://www.fazztrack.com/";
  const handleCheck = () => {
    request(url, async function (error, response) {
      if (!error && response?.statusCode == 200) {
        console.log("Website Aman");
        // await telegram.sendMessageToGroup(`Website Aman\nURL: ${url}`);
      } else {
        console.log("Website Down");
        await telegram.sendMessageToGroup(`Website Down !!\nURL: ${url} \n${error}`);
      }
    });
  };

  handleCheck();
  setInterval(function () {
    handleCheck();
  }, time);
};

module.exports = {
  checkFazztrack,
};
