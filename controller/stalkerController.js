const axios = require('axios');
const fs = require('fs')
const chalk = require('chalk')
require('../setting/config');

async function fetchDataFromURL(game, action, target, server = '') {
  try {
    const url = server ? `${apiUri}${game}/${action}/${target}/${server}/${dimensionLicense}` : `${apiUri}${game}/${action}/${target}/${dimensionLicense}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data from URL:', error);
    
  }
}

module.exports = fetchDataFromURL;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
