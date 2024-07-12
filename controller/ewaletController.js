const fs = require('fs');
const chalk = require('chalk');
const ewalet = require('../lib/ewalet');
const plnToken = require('../lib/plnToken');
require('../setting/config');
const stalkVA = (text, reply, m, aksi) => {
  const va = text.split(' ');
  if (!text) return reply('Nomernya mana?');
  const requestData = {
    apikey: dimensionLicense,
    action: aksi,
    target: va[0]
  };

  ewalet(requestData)
  .then(data => {
    console.log(data);
    const teks = `${data.message}
Nomor: ${data.nomor}`
reply(teks)
  })
  .catch(error => {
    console.error('There was a problem with the axios operation:', error);
  });
};
const stalkpln = (text, reply, m, aksi) => {
  if (!text) return reply('Masukan Nomer Meter?');
  
  const va = text.split(' ');
  const requestData = {
    apikey: dimensionLicense, // Pastikan variabel dimensionLicense sudah didefinisikan di tempat yang sesuai
    action: aksi,
    target: va[0]
  };

  return plnToken(requestData) // Menggunakan return agar fungsi ini mengembalikan promise
    .then(data => {
      console.log(data);
      const teks = `${data.nama_pelanggan}
Nomor: ${data.customer_no}
Segment Power: ${data.daya}
ID Pelanggan: ${data.id_pelanggan}`;
      reply(teks);
    })
    .catch(error => {
      console.error('There was a problem with the axios operation:', error);
      // Menggunakan throw error agar error bisa ditangkap di tempat pemanggilan
      throw error;
    });
}

module.exports = { stalkVA, stalkpln };

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
