
const fs = require("fs");
const chalk = require("chalk");
const moment = require('moment-timezone');

global.dimensionLicense = "marketstorev2" // apikeynya di sini https://api.gathstore.id/login/
global.apiUri = "https://api.sosmed-booster.my.id/api/"
// Lolkey
global.lolkey = "virtualDimension";

global.mess = {
  error: "Error",
  wait: "Loading...",
  owner: "Fitur Khusus Owner Bot",
  waitdata: "Melihat Data Terkini...",
  admin: "Fitur Khusus Admin Group!",
  group: "Fitur Digunakan Hanya Untuk Group!",
  private: 'Fitur Digunakan Hanya Untuk Private Chat!',
  botAdmin: "Bot Harus Menjadi Admin Terlebih Dahulu!",
  captionSewa: `Jika kamu ingin memasukkan Bot ke dalam Grup, kamu cukup membayar Rp5.000 untuk 1 Minggu, Rp10.000 untuk 1 Bulan. Untuk Sewa tidak ada yang Permanent. Jika berminat silahkan chat Owner Bot, ketik owner\n\nPembayaran bisa melalui Gopay/Pulsa/Dana`
};