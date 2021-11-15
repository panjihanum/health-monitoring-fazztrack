const request = require("request");
const { telegram } = require("../config");

const checkSites = () => {
  const time = 1000 * 60 * 5;
  const urls = ["https://www.fazztrack.com/", "https://arkademy.com/"];
  
  const handleCheck = () => {
    urls.forEach((url) => {
      request(url, async function (error, response) {
        if (!error && response?.statusCode == 200) {
          console.log(`Url: ${url}\nStatus: Website Aman\n`);
          // await telegram.sendMessageToGroup(`Website Aman\nURL: ${url}`);
        } else {
          console.log(`Url: ${url}\nStatus: Website Down\n`);
          await telegram.sendMessageToGroup(
            `Website Down !!\nURL: ${url} \n${error}`
          );
        }
      });
    });
  };

  handleCheck();
  setInterval(function () {
    handleCheck();
  }, time);
};

module.exports = checkSites;
