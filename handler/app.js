/*

• Script ini dikembangkan oleh Ikhsan Store
• Instagtam Ikhsan
• Nambah fitur? Chat Wa : 087846614391


*/

"use strict";
const { WASocket, proto, getContentType, downloadContentFromMessage, decodeJid, generateWAMessageFromContent, generateWAMessage, WA_DEFAULT_EPHEMERAL } = require('@adiwajshing/baileys')
const axios = require('axios').default
const crypto = require('crypto')
const request = require('request')
const { PassThrough } = require('stream')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const FormData = require('form-data')
const chalk = require('chalk')
const fs = require('fs')
const hikki = require("hikki-me");
const xzons = require("xzons-api");
const hxz = require("hxz-api");
const yts = require("yt-search");
const Math_js = require('mathjs');
const fetch = require('node-fetch');
const ms = require('parse-ms')
const toMS = require("ms");
const { exec, spawn } = require("child_process");
let { sizeFormatter } = require("human-readable");
let format = sizeFormatter({
  std: "JEDEC", // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
});

//lib/utils
const _sewa = require("../utils/sewa");
const { TelegraPH } = require('../utils/TelegraPH.js')
const remini = require('../utils/remini.js')
const afkg = require("../utils/afk");
const Exif = require("../utils/exif")
const { webp2mp4File } = require("../utils/convert")
const exif = new Exif()
const { allMenu, ownmenu } = require('../utils/help')
const { isSetWelcome, addSetWelcome, changeSetWelcome, removeSetWelcome } = require('../utils/setwelcome');
const { isSetLeft, addSetLeft, removeSetLeft, changeSetLeft } = require('../utils/setleft');
const { addResponList, delResponList, resetListAll, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('../utils/respon-list');
const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require('../utils/setproses');
const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require('../utils/setdone');
const { isSetOpen, addSetOpen, removeSetOpen, changeSetOpen, getTextSetOpen } = require("../utils/setopen");
const { isSetClose, addSetClose, removeSetClose, changeSetClose, getTextSetClose } = require("../utils/setclose");
const { isSetBot, addSetBot, removeSetBot, changeSetBot, getTextSetBot } = require('../utils/setbot');
const { angkaRandom, getBuffer, serialize, getRandom, fetchJson, runtime, sleep, resize } = require("../utils/myfunc");
const { smsg, parseMention } = require('../utils/mysim')
let mess = JSON.parse(fs.readFileSync('./utils/mess.json'));
//database
let opengc = JSON.parse(fs.readFileSync('./database/opengc.json'));
let set_bot = JSON.parse(fs.readFileSync('./database/set_bot.json'));
let _afks = JSON.parse(fs.readFileSync('./database/afg.json'));
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'));
let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'));
let set_open = JSON.parse(fs.readFileSync('./database/set_open.json'));
let set_close = JSON.parse(fs.readFileSync('./database/set_close.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let pricelist = JSON.parse(fs.readFileSync('./database/pricelist.json'));
let antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
//END
/**
 *
 * @param { string } text
 * @param { string } color
 */
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)]
}

/**
 * @param {WASocket} sock
 * @param {proto.IWebMessageInfo} msg
 */
 // Bandwidth
async function checkBandwidth() {
    let ind = 0;
    let out = 0;
    for (let i of await require("node-os-utils").netstat.stats()) {
        ind += parseInt(i.inputBytes);
        out += parseInt(i.outputBytes);
    }
    return {
        download: format(ind),
        upload: format(out),
    };
}

moment.tz.setDefault("Asia/Jakarta").locale("id");
module.exports = async (sock, msg, welcome, left, set_welcome_db, set_left_db) => {
    const { ownerNumber, merchantapi, secretapi, ownnumber, ownerName, pathimg, logoafk, botName, youtubeName, youtube, apikey, owncek, footer } = require('../config.json')
    const extendedText = getContentType
    const setya = sock
    const gaya = '```'
    const gy = '```'
    let m = serialize(sock, msg)
    let rm = smsg(sock, msg)
    let thumb = fs.readFileSync(pathimg)
    let thum = fs.readFileSync(pathimg)
    let thumafk = fs.readFileSync(logoafk)
    let dev = "6287846614391@s.whatsapp.net" //JANGAN DI GANTI
    const time = moment().tz('Asia/Jakarta').format('HH:mm:ss')
    const tanggal = moment().tz("Asia/Jakarta").format("dddd, ll")
    const jam = moment().format("HH:mm:ss z")
    let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
    var fildt = dt == 'pagi' ? dt + '🌝' : dt == 'siang' ? dt + '🌞' : dt == 'sore' ? dt + '🌝' : dt + '🌚'
    const ucapanWaktu = fildt.charAt(0).toUpperCase() + fildt.slice(1)
    if (msg.key && msg.key.remoteJid === 'status@broadcast') return
    if (!msg.message) return

	const type = getContentType(msg.message)
    const quotedType = getContentType(msg.message?.extendedTextMessage?.contextInfo?.quotedMessage) || null
    if (type == 'ephemeralMessage') {
        msg.message = msg.message.ephemeralMessage.message
        msg.message = msg.message.ephemeralMessage.message.viewOnceMessage
    }
    if (type == 'viewOnceMessage') {
        msg.message = msg.message.viewOnceMessage.message
    }

    const botId = sock.user.id.includes(':') ? sock.user.id.split(':')[0] + '@s.whatsapp.net' : sock.user.id

    const botNumber = await sock.decodeJid(sock.user.id)
    const from = msg.key.remoteJid
    const rizkyy = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : (type == "listResponseMessage") ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (type == "messageContextInfo") ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ''
    const body = type == 'conversation' ? msg.message?.conversation : msg.message[type]?.caption || msg.message[type]?.text || ''
    const chata = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (type == "templateButtonReplyMessage" && msg.message.templateButtonReplyMessage.selectedId) ? msg.message.templateButtonReplyMessage.selectedId : (type == "listResponseMessage") ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (type == "messageContextInfo") ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ''
    const responseMessage = type == 'listResponseMessage' ? msg.message?.listResponseMessage?.singleSelectReply?.selectedRowId || '' : type == 'buttonsResponseMessage' ? msg.message?.buttonsResponseMessage?.selectedButtonId || '' : ''
    const isGroup = from.endsWith('@g.us')
    const budy = (type === 'conversation') ? msg.message.conversation : (type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : ''

    var sender = isGroup ? msg.key.participant : msg.key.remoteJid
    sender = sender.includes(':') ? sender.split(':')[0] + '@s.whatsapp.net' : sender
    const senderName = msg.pushName
    const senderNumber = sender.split('@')[0]
    const pushname = msg.pushName

    const groupMetadata = isGroup ? await sock.groupMetadata(from) : null
    const groupName = groupMetadata?.subject || ''
    const groupMembers = groupMetadata?.participants || []
    const groupAdmins = groupMembers.filter((v) => v.admin).map((v) => v.id)
    const participants = m.isGroup ? await groupMetadata.participants : ''

    const isCmd = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#/$%^&.+-,\\\©^]/.test(chata)
    const prefix = isCmd ? body[0] : ''
    const isGroupAdmins = groupAdmins.includes(sender)
    const isBotGroupAdmins = groupMetadata && groupAdmins.includes(botId)
    const isOwner = ownerNumber.includes(sender)
    const isDev = dev.includes(sender) 
    const Xcommand = chata.toLowerCase().split(' ')[0] || ''
    const XisCmd = Xcommand.startsWith(prefix)
    
    let command = isCmd ? chata.slice(1).trim().split(' ').shift().toLowerCase() : ''
    let responseId = msg.message?.listResponseMessage?.singleSelectReply?.selectedRowId || msg.message?.buttonsResponseMessage?.selectedButtonId || null
    let args = body.trim().split(' ').slice(1)
    const argr = rizkyy.split(' ') 
    let full_args = body.replace(command, '').slice(1).trim()
    let q = args.join(" ")
    
    let sign = crypto.createHash('md5').update(`${merchantapi}${secretapi}`).digest("hex")
    let randomString = `REFID-${angkaRandom(8)}`
    
    const isAfkOn = afkg.checkAfkUser(sender, _afks)
    const isAntiLink = antilink.includes(from) ? true : false
    const isAntiWame = antiwame.includes(from) ? true : false
    const isPricelist = pricelist.includes(from) ? true : false
    const isSewa = _sewa.checkSewaGroup(from, sewa)
    const isWelcome = isGroup ? welcome.includes(from) ? true : false : false
    const isLeft = isGroup ? left.includes(from) ? true : false : false
    const mentionByTag = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
    const mentionByReply = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""
    const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
    mention != undefined ? mention.push(mentionByReply) : []
    const mentionUser = mention != undefined ? mention.filter(n => n) : []
    let mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || []

    async function downloadAndSaveMediaMessage (type_file, path_file) {
        	if (type_file === 'image') {
                var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	} else if (type_file === 'video') {
                var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	} else if (type_file === 'sticker') {
                var stream = await downloadContentFromMessage(msg.message.stickerMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	} else if (type_file === 'audio') {
                var stream = await downloadContentFromMessage(msg.message.audioMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	}
        }
        
        async function sendStickerFromUrl(from, url, packname1 = stc.packname, author1 = stc.author, options = {}) {
        	var names = Date.now() / 10000;
        	var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
	            });
        	};
            exif.create(packname1, author1, `sendstc_${names}`)
        	download(url, './temp/' + names + '.png', async function () {
                let filess = './temp/' + names + '.png'
        	    let asw = './temp/' + names + '.webp'
        	    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, async (err) => {
        	        exec(`webpmux -set exif ./temp/sendstc_${names}.exif ${asw} -o ${asw}`, async (error) => {
                        setya.sendMessage(from, { sticker: fs.readFileSync(asw) }, options)
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
        	        })
                })
        	})
        }
        
        const sendFileFromUrl = async (from, url, caption, options = {}) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headerd["content-type"]
            let type = mime.split("/")[0]+"Message"
            if (mime.split("/")[0] === "image") {
               var img = await getBuffer(url)
               return setya.sendMessage(from, { image: img, caption: caption }, options)
            } else if (mime.split("/")[0] === "video") {
               var vid = await getBuffer(url)
               return setya.sendMessage(from, { video: vid, caption: caption }, options)
            } else if (mime.split("/")[0] === "audio") {
               var aud = await getBuffer(url)
               return setya.sendMessage(from, { audio: aud, mimetype: 'audio/mp3' }, options)
            } else {
               var doc = await getBuffer(url)
               return setya.sendMessage(from, { document: doc, mimetype: mime, caption: caption }, options)
            }
        }
        
        //jeda time
        setInterval(() => {
        for (let i of Object.values(opengc)) {
            if (Date.now() >= i.time) {
                setya.groupSettingUpdate(i.id, "not_announcement")
                .then((res) =>
                setya.sendMessage(i.id, { text: `Waktu Jeda Telah Selesai` }))
                .catch((err) =>
                setya.sendMessage(i.id, { text: 'Error' }))
                delete opengc[i.id]
                fs.writeFileSync('./database/opengc.json', JSON.stringify(opengc))
            }
        }
    }, 1000)
        
        setya.createMessage = async (jidnya, kontennya, optionnya) => {
            return await generateWAMessage(jidnya, kontennya, {...optionnya,userJid: setya.authState.creds.me.id,upload: setya.waUploadToServer})
            }

    const isImage = type == 'imageMessage'
    const isVideo = type == 'videoMessage'
    const isAudio = type == 'audioMessage'
    const isSticker = type == 'stickerMessage'
    const isContact = type == 'contactMessage'
    const isLocation = type == 'locationMessage'

    const isQuoted = type == 'extendedTextMessage'
    const isQuotedImage = isQuoted && quotedType == 'imageMessage'
    const isQuotedVideo = isQuoted && quotedType == 'videoMessage'
    const isQuotedAudio = isQuoted && quotedType == 'audioMessage'
    const isQuotedSticker = isQuoted && quotedType == 'stickerMessage'
    const isQuotedContact = isQuoted && quotedType == 'contactMessage'
    const isQuotedLocation = isQuoted && quotedType == 'locationMessage'

    var mediaType = type
    var stream
    if (isQuotedImage || isQuotedVideo || isQuotedAudio || isQuotedSticker) {
        mediaType = quotedType
        msg.message[mediaType] = msg.message.extendedTextMessage.contextInfo.quotedMessage[mediaType]
        stream = await downloadContentFromMessage(msg.message[mediaType], mediaType.replace('Message', '')).catch(console.error)
    }
    
    //SEWA WAKTU
_sewa.expiredCheck(setya, sewa)
   //OWN WAKTU

    if (!isGroup && !isCmd) console.log(color(`[ ${time} ]`, 'white'), color('[ PRIVATE ]', 'aqua'), color(body.slice(0, 50), 'white'), 'from', color(senderNumber, 'yellow'))
    if (isGroup && !isCmd) console.log(color(`[ ${time} ]`, 'white'), color('[  GROUP  ]', 'aqua'), color(body.slice(0, 50), 'white'), 'from', color(senderNumber, 'yellow'), 'in', color(groupName, 'yellow'))
    if (!isGroup && isCmd) console.log(color(`[ ${time} ]`, 'white'), color('[ COMMAND ]', 'aqua'), color(body, 'white'), 'from', color(senderNumber, 'yellow'))
    if (isGroup && isCmd) console.log(color(`[ ${time} ]`, 'white'), color('[ COMMAND ]', 'aqua'), color(body, 'white'), 'from', color(senderNumber, 'yellow'), 'in', color(groupName, 'yellow'))

function hitungmundur(bulan, tanggal) {
            let from = new Date(`${bulan} ${tanggal}, 2022 00:00:00`).getTime();
            let now = Date.now();
            let distance = from - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            return days + "Hari " + hours + "Jam " + minutes + "Menit " + seconds + "Detik"
        }
        
        var { download, upload } = await checkBandwidth();
        let mundur = hitungmundur(7, 9)
        var menunya = allMenu(ucapanWaktu, pushname, mundur, upload, download, ownerName, youtubeName, botName, jam, tanggal, isOwner, sender, prefix)
        var menuown = ownmenu(pushname, ownerNumber, prefix)
        
    const reply = async (text) => {
        return sock.sendMessage(from, { text: text.trim() }, { quoted: msg })
    }
    
    function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        
        const isUrl = (url) => {
        	return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        
        const rpset = (number)=>{
        return new Intl.NumberFormat('id').format(number);
        }
        
        const sendContact = (jid, numbers, name, quoted, mn) => {
        	let number = numbers.replace(/[^0-9]/g, '')
        	const vcard = 'BEGIN:VCARD\n' 
        	+ 'VERSION:3.0\n' 
        	+ 'FN:' + name + '\n'
        	+ 'ORG:;\n'
        	+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
        	+ 'END:VCARD'
        	return setya.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: quoted })
        }
        
        const isEmoji = (emo) => {
            let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
            let regexEmoji = new RegExp(emoji_ranges, 'gi');
            return emo.match(regexEmoji)
        }
        
        async function getGcName(groupID) {
            try {
                let data_name = await setya.groupMetadata(groupID)
                return data_name.subject
            } catch (err) {
                return '*Group Tidak Ada*'
            }
        }
    
    function mentions(teks, mems = [], id) {
        	if (id == null || id == undefined || id == false) {
        	    let res = setya.sendMessage(from, { text: teks, mentions: mems })
        	    return res
        	} else {
                let res = setya.sendMessage(from, { text: teks, mentions: mems }, { quoted: msg })
                return res
            }
        }
        

const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid, // Ganti Idnya
"thumbnail": img, // Ganti Imagenya
"itemCount": itcount, // Ganti Item Countnya
"status": "INQUIRY", // Jangan Diganti
"surface": "CATALOG", // Jangan Diganti
"orderTitle": title, // Ganti Titlenya
"message": text, // Ganti Messagenya
"sellerJid": sellers, // Ganti sellernya
"token": tokens, // Ganti tokenya
"totalAmount1000": ammount, // Ganti Total Amountnya
"totalCurrencyCode": "IDR", // Terserah
}
}), { userJid: jid })
setya.relayMessage(jid, order.message, { messageId: order.key.id})
}
 
//MULAI AFK
	if (isGroup) {
		for (let x of mentionUser) {
		    if (afkg.checkAfkUser(x, _afks)) {
			const getId = afkg.getAfkId(x, _afks)
			const getReason = afkg.getAfkReason(getId, _afks)
			const getTime = afkg.getAfkTime(getId, _afks)
			//if (riz.message.extendedTextMessage != undefined){ 
	        try {
            var afpk = await setya.profilePictureUrl(mentionUser[0], 'image')
            } catch {
            var afpk = 'https://i.ibb.co/Twkhgy9/images-4.jpg'
            }
            var thumeb = await getBuffer(afpk)
			const cptl = `*ꞌꞋ ࣪𓂃 ִֶָ Admin Afk ִֶָ 𓂃 ࣪ꞌꞋ*

O  Saat Ini @${mentionUser[0].split("@")[0]} Sedang Offline/Afk
O *Alasan*  : ${getReason}
O *Afk Sejak* : ${getTime}`
      setya.sendMessage(from, { text: cptl, contextInfo:{ mentionedJid: [mentionUser], externalAdReply:{ title: `SEDANG OFFLINE`, body: "Mode Afk Aktif", thumbnail: thumafk, sourceUrl: `https://wa.me/${x}`, mediaUrl: '', renderLargerThumbnail: true, showAdAttribution: false, mediaType: 1 }}}, { quoted: m });
      //sendMess(x, `Assalamualaikum\n\n_Ada Yg Mencari Kamu Saat Kamu Offline/Afk_\n\nNama : ${pushname}\nNomor : wa.me/${sender.split("@")[0]}\nDi Group : ${groupName}\nPesan : ${chata}`)
      }}
      //KEMBALI DARI AFK
	  if (afkg.checkAfkUser(sender, _afks)) {
      const getTime = afkg.getAfkTime(sender, _afks)
	  const getReason = afkg.getAfkReason(sender, _afks)
	  const ittung = ms(await Date.now() - getTime)
      try {
      var afpkk = await setya.profilePictureUrl(mentionUser[0], 'image')
      } catch {
      var afpkk = 'https://i.ibb.co/Twkhgy9/images-4.jpg'
      }
      var thumbw = await getBuffer(afpkk)
	  const pep = `*${pushname}* Telah Kembali Dari Afknya!`
      setya.sendMessage(from, { text: pep, contextInfo:{ mentionedJid: [sender], externalAdReply:{ title: `KEMBALI ONLINE`, body: "Mode Afk Nonaktif", thumbnail: thumafk, sourceUrl: `https://wa.me/${sender}`, mediaUrl: '', renderLargerThumbnail: true, showAdAttribution: false, mediaType: 1 }}}, { quoted: m });
	  _afks.splice(afkg.getAfkPosition(sender, _afks), 1)
	  fs.writeFileSync('./database/afkg.json', JSON.stringify(_afks))
	  }
	  }

    const replyDeface = (teks) => {
            return setya.sendMessage(from, {
                text: teks, contextInfo: {
                    externalAdReply: {
                        title: `FR Bot`,
                        body: `${botName}`,
                        mediaType: 2,
                        thumbnail: thumb,
                        sourceUrl: `https://wa.me/${owncek}`
                    }
                }
            }, { quoted: msg })
        }
        
        setya.readMessages([m.key])
        
        setya.sendPresenceUpdate('available', from)
//enc private,🥲 jadi gausah banyak nanya, semua sama
let ff5=args[0x579*0x7+-0x3*-0x3fd+0x11e*-0x2d]*(-0x31*-0x95+0x1*0x22cb+-0x3f4d),ff10=args[-0x4ec*-0x1+0x9*0x397+0x1b*-0x161]*(0x2143+-0xefe+-0x123f),ff15=args[0x11*0x1b5+0x2318+-0x401d]*(-0x18ac+0x796*-0x3+-0x1*-0x2f77),ff20=args[0x59*-0x35+0x480+0xded]*(-0x1860+-0x1160+0x29cc),ff25=args[0x1307+0x11c+-0x1423]*(-0x38f*0xa+-0x851+0x2bf6),ff30=args[-0x22ab+0x9a5+0x1906]*(-0x3ad*0x1+-0x1c47+0x2006),ff40=args[0x75b+-0x1953+0x11f8]*(0x154b+-0x3*0x1b3+-0x1*0x101e),ff50=args[-0x957*-0x1+0x1*0x254f+0x1753*-0x2]*(-0x233*-0x1+-0x2099*-0x1+-0x22b4*0x1),ff55=args[0x1ba5*-0x1+0x10fc+0xaa9]*(0x244c+0x2a5+-0x26d6),ff60=args[0xd14+0xcfc*0x2+-0x62*0x66]*(-0x11bb+-0x214d+0x3326),ff70=args[-0x4*-0x9e+-0x1*-0x2371+-0x287*0xf]*(-0xb9a+0xbe9+0x2*-0x17),ff75=args[-0x1d*-0xd+-0x20a3*-0x1+0x887*-0x4]*(-0x1*-0x1031+0x2458+-0x3*0x1177),ff80=args[-0x2247+0xb96+0x16b1]*(0x13*0xd1+-0x2*-0x919+-0x218e),ff90=args[0x27*0x91+0x8*-0xe2+-0xf07]*(0x595*0x2+0x2309*0x1+-0x2b*0x112),ff100=args[-0x65c+-0x1688+0x1ce4]*(0x3*-0xc95+0x2565*-0x1+0x4*0x12d5),ff120=args[0x2*0x6b3+-0x10*-0x218+-0x2ee6]*(-0x1269+0x2092+0x6f8*-0x2),ff130=args[-0x1585+-0xd6*-0x1f+-0x7d*0x9]*(-0x11de*0x1+0x1a07+-0x7ea),ff140=args[-0x411*-0x9+-0x145a+-0x103f]*(0x363+-0x21b3+-0x7*-0x45e),ff145=args[0x1*0x2023+0x3d*0x17+0x282*-0xf]*(0xf60+0x1835+-0x2750),ff150=args[0x3e9+-0x8a*0x29+-0x1*-0x1231]*(0x25c+-0x3b+0x1d9*-0x1),ff160=args[0x6*0x547+-0x7*0x52f+-0x7*-0xa9]*(-0x13*-0x1e7+-0x1*-0x1bdb+-0x3fb2),ff190=args[-0x1b0+-0x1f07+0x19*0x14f]*(0x1*-0x1b65+0x17b7+-0x56*-0xc),ff200=args[0x16a9+-0x2041+0x998]*(-0xb39+-0x1271+0x1e0a),ff210=args[-0x21cf+-0x1206+0x33d5]*(0xa6a+0x12*0x7a+-0x129b),ff250=args[0x1774*-0x1+-0x1fb5+-0x9*-0x621]*(-0xa*0x3d9+-0x200a+0x46fb),ff280=args[0x258f+-0x167c+-0xf13]*(0x4*-0x5c4+0x4*-0x488+0x14da*0x2),ff300=args[-0x78a+-0x1*0x13bb+-0x1*-0x1b45]*(0x1cff+0x1f*-0x95+-0xa66),ff355=args[0x1fbb+0x12df*-0x1+-0xcdc]*(-0xcaa+0x99b*-0x1+0x16ea),ff360=args[-0x2487+-0x218*-0xd+0x94f]*(0x1*0x2527+-0x981+-0x1afe),ff375=args[-0x481+0x136+-0x34b*-0x1]*(0xd02+-0x708+-0x549),ff400=args[0xb*0x1b2+-0x182f+0x589*0x1]*(-0xaae+-0x16b*-0x1a+0x9*-0x2d4),ff425=args[0x13dc+0x4*0x1e6+-0x1b74]*(0x1*-0x27+-0x1780*0x1+0x186d),ff475=args[0x14e3+0x10ea+0x1*-0x25cd]*(-0x3*0x4b+0x1*-0x2051+0x1108*0x2),ff500=args[-0x27*0xf6+-0x580*-0x1+0xffd*0x2]*(0x1596+-0x27b*0xb+0x69d),ff510=args[-0xa68+0x262b+-0x1bc3*0x1]*(-0x1c3f+0x3*-0xc8a+0x42cd),ff515=args[0x24d3+-0x1*-0xe14+-0x32e7]*(-0xc2b+-0xb76+0x1894),ff520=args[0x2217+0x1*0xab7+-0x136*0x25]*(0xfad*-0x1+-0x232*0x3+0x173b),ff545=args[0xe6*0x2+-0x751+0x1*0x585]*(-0x593*-0x1+-0xf09*0x2+0x1a*0xfb),ff565=args[-0x6*0x392+0x1976+-0x40a]*(0x201*0x7+0x21a6+0x2ea5*-0x1),ff600=args[-0x8*0x3f9+0xdd+0x62f*0x5]*(0x116*0x14+0x24ec+-0x398a),ff635=args[-0x1*0x21ef+0x249c+-0x2ad]*(0x1*-0x1cad+-0x1*0x13f3+-0x5*-0x9f5),ff645=args[-0x1462*-0x1+-0x11d*0xc+-0x706]*(0x67f+-0xb*-0x215+-0x1c37),ff655=args[0x38*-0xa1+0x2444+-0x10c]*(-0xf2+-0x2072+0x2297),ff720=args[0xdbd*0x2+0x11c8+-0x2d42]*(-0x1c37+0xae8+0x1299),ff725=args[-0x16a*-0x1+0x1*-0x14fe+0x1394]*(0x2101+-0x218*-0x10+-0xade*0x6),ff740=args[-0x101*-0x1a+0x97*0x1+0x1*-0x1ab1]*(0x212*-0x3+0x1835+-0x10a9),ff770=args[0x2469*-0x1+0x328+0x1*0x2141]*(-0x612+0x2*0x1015+-0x18b6),ff790=args[-0x2624+0x22b9+0x36b]*(-0x1*0x269b+-0xce6+0x34ec),ff800=args[0x341+0x20f3+-0x2434]*(-0x23d6+0x201+0x2346),ff860=args[0x2*-0xf47+0x3*0x7b+0x1*0x1d1d]*(-0x3f5+-0x184+0x257*0x3),ff930=args[0x3*0x10a+0xae*0x24+-0xb*0x282]*(0x3cd*0xa+-0x2154+0x1*-0x301),ff1000=args[-0x13*0x179+-0x295*0x1+0x1e90]*(-0x132d+0x42c+0x1*0x10cf),ff1050=args[-0x1e89+0x76f+-0xb8d*-0x2]*(0x7db+-0x703+0x36*0x5),ff1060=args[0xa49+-0x2432+0x19e9]*(0x7db+0xb00+-0x10ef*0x1),ff1075=args[-0x1cff*0x1+0x2612+-0x913]*(0x133+-0x15ea+0x16a6),ff1080=args[0x1cbb+-0xaa5+-0x1216]*(-0x26a0+-0x1dc6+-0x8cb*-0x8),ff1200=args[0x1e61+0x1d9d*0x1+-0x3bfe]*(-0x1*0x1c1+0x5*0x101+-0x118),ff1215=args[-0x3ae+-0x3*-0x7cd+-0x13b9]*(0x16db*0x1+-0x84d+-0xc5d),ff1300=args[0xc*0xfd+-0xba1+-0x3b*0x1]*(0x3*-0x113+0x59b+-0x1*0x7),ff1440=args[-0xb9*0xb+-0xb35*-0x3+-0x19ac]*(-0x291+0x34b*0x9+0x3*-0x82a),ff1450=args[0x1787+0x2584+0x3d0b*-0x1]*(-0xd2d*0x1+-0x1181+0x6*0x58c),ff1490=args[0x187f+-0x1*-0x26f6+-0x3f75]*(-0x2ce+0x1*0xb7b+-0x601),ff1510=args[-0x2065+0x2f*0x66+0xdab*0x1]*(0x1*0x1ece+0x17*0x125+-0x489*0xc),ff1580=args[0x239d+0x1*0xeac+-0x3249]*(-0x1*-0x1942+-0x1b3f+0x4d3*0x1),ff1795=args[-0x1859+0x1e86+-0x62d]*(0x1*-0x1132+-0x3*-0x1bd+0xe*0x116),ff1800=args[0x13df+0x2443+0x12b6*-0x3]*(0x3e6*0x2+0x1*0xdb1+-0x1241),ff2000=args[0x74f*-0x4+-0x1*-0x4ef+0x184d]*(-0x1e91+0x215f*-0x1+-0x21c6*-0x2),ff2160=args[-0xa34+0x2521+-0x1aed]*(0x8c7+-0x151a+0x1031),ff2180=args[0x16ce+0xe*-0x116+-0x116*0x7]*(0x1d67+0x1*0x187d+-0x320a),ff2200=args[0xebb+-0x26a*0x7+0x22b]*(-0x1206+-0x92*0x17+0x231a),ff2210=args[0x24c6+0x19*0xcd+0x81d*-0x7]*(0x159+0xafc*-0x2+-0x2*-0xc4f),ff2280=args[-0x8*-0xfb+-0x6b+0x76d*-0x1]*(-0x16cc+-0x2592+-0x27b*-0x1a),ff2355=args[0x10*-0x251+0x270+-0x2*-0x1150]*(0x1*0x9b5+0xc84+-0xc8*0x17),ff2720=args[0x2457+-0x32*0x65+-0x1*0x109d]*(0x1dbd+-0xbdb+-0xcfc),ff3640=args[0xded*-0x1+0x15ea+-0x5*0x199]*(-0xff*0x6+0x35*0x65+-0x865),ff3800=args[0x222e+0xc09+0x2e37*-0x1]*(-0x319*-0x1+-0x52*-0x4f+-0x1595),ff4000=args[-0x2002+0xbeb+-0x1417*-0x1]*(-0x55*0x5b+0x1*0x20b9+0x486),ff4340=args[0x79*0x2f+-0x1*-0x2657+0x151*-0x2e]*(-0x1ab*-0x14+0x14*-0x2c+-0x1624),ff7290=args[-0x2*0x101+-0x9*-0x203+-0x1019]*(-0xd49+0x3*0x6bc+0x5f9),ffmm=args[-0x99b+-0x11a6+0x1b41]*(-0x129e+-0x24f*-0xa+-0x9*0x74),ffmb=args[0x1557+-0x1*-0x4ce+-0x123*0x17]*(-0x10*0x249+-0xf1*-0x1b+0xc51),fflup=args[0x1*-0x11c+0x1c05+-0x1ae9]*(-0x1365+-0x52e*0x2+-0x29*-0xbb),soc86=args[0x202*-0x1+0x1*0x2101+-0x1eff]*(0x104e*0x1+-0x1636*-0x1+0x2644*-0x1),soc172=args[0x19e*0xb+0x1*0x2426+0x1af8*-0x2]*(0x1*-0x235f+-0x19fe+0x3ddc),soc257=args[-0x25c1+0x86b*-0x3+-0xc9a*-0x5]*(-0x3*-0x3a1+0x25*-0x86+0x934),soc344=args[-0x1325+-0x1a*0x1a+0x15c9*0x1]*(-0x1c28+-0x171c+0x1*0x3442),soc429=args[-0xb71+-0x232+0xda3]*(-0x5d2+-0x798*0x1+0xea2*0x1),soc514=args[-0x1717+0x15b*0x14+-0x405]*(-0x14e2+0x2*0x4fc+0xc5c),soc600=args[-0x156c+-0x15fb+0x2b67]*(0x2b*-0xc5+0xdfe*0x2+0x6cd*0x1),soc706=args[0x42*-0x87+-0x385+0x2653]*(0x243a+-0x2*-0xace+-0x37e2),soc792=args[-0x8ad*-0x1+-0x7*0x2e3+0xc*0xf6]*(-0x163+0xe1e+-0xa87),soc878=args[0x1b92*-0x1+-0x659*-0x6+-0xa84]*(0x1*-0x7ec+0x1e5f+-0x1400),soc963=args[-0xea+0x20f7+-0x200d]*(-0x35+0x1*0xb0f+0x17*-0x5b),soc1220=args[-0x1c68+-0x1f55*0x1+0x3bbd]*(0x24c5*0x1+0x29*-0x41+-0xb7b*0x2),soc1412=args[0x54*0x2d+0xfdf+0x17*-0x155]*(-0x294+-0x2*0x4a5+0xfc6),soc2195=args[-0x1541*-0x1+0x3fd*0x4+0x5*-0x771]*(-0x124f+0xb51*0x1+0x5*0x296),soc3688=args[0x54a+0x1*-0x10c9+-0xb7f*-0x1]*(-0x65e+0x18d*0x3+0x1*0xb99),soc4394=args[-0x10e2+-0x9f1+0x1ad3]*(-0x1f67+0x3d*0x25+-0x4*-0x89b),soc5532=args[-0x83*-0x29+-0x2370+0xe75*0x1]*(-0xda6*0x2+-0x988+0x33b6),soc6238=args[-0x1f*-0x1+0x1*0x25a5+-0x25c4]*(0x1bc6+-0x37d+0x1*-0x773),soc7727=args[0x255b+-0xb88+-0x1*0x19d3]*(0xcf*-0x2b+-0x199+0xa*0x5b8),soc9288=args[0x1*-0xf5e+0x106e+-0x110]*(0x1*-0x12b5+0x5*-0x57d+0x46e0),soctwl=args[-0x53*0x2f+-0xa4b+0x1988]*(-0x1c70+0x17*0x3d+0x1898),socwpm=args[-0x1072+0xbf1+-0x481*-0x1]*(0x8e0*-0x3+-0x3c*0x34+0x2720),mlbrl86=args[-0xb*0xb+0x1a9d*-0x1+-0x1b16*-0x1]*(-0x29*-0x3b+-0xf7*0x1+-0x875+0.09999999999999964),mlbrl172=args[0xb*-0x17b+-0x18a2+0x1*0x28eb]*(0x7*0x265+-0x1d66*0x1+0xcb1+0.1999999999999993),mlbrl257=args[0xfda*-0x1+0xe97+0x13*0x11]*(-0x6af+-0x1440+-0x2*-0xd82+0.3000000000000007),mlbrl344=args[-0x1*-0xfdb+-0x356*0x7+0x65*0x13]*(0x2*-0xc71+-0x1*0x5c1+0x1ebf+0.3999999999999986),mlbrl429=args[-0x2*-0x815+0x1777+-0x5*0x7ed]*(0x8ca+0xd1c+0x3*-0x741+0.5),mlbrl514=args[0x2305+0x995*0x4+-0x4959]*(0xeb9+-0x10a2+0x213+0.6000000000000014),mlbrl600=args[-0x301*0xd+-0x2*-0x490+0x1ded]*(0x2*-0x110f+0x8a7*-0x2+0x339d+0.7000000000000028),mlbrl706=args[-0xf4a+-0x2*0x12cb+0x34e0]*(-0xc56*0x1+0x9c2+0x2cc+0.7999999999999972),mlbrl792=args[0x81f+0xf55+-0x13c*0x13]*(-0x951+-0xd1a+0x16aa+0.8999999999999986),mlbrl878=args[-0x949*0x2+0x109*0x25+-0x13bb]*(0x119*0x1+-0x1db0+0xe6f*0x2),mlbrl963=args[0x1cb*-0x12+-0x3*0x94d+0xc3*0x4f]*(-0x59*0x70+-0x1*0x24c2+0x98*0x80+0.09999999999999432),mlbrl1220=args[0x1*-0x24cd+-0x685+-0xa*-0x455]*(0xdf4+0x73*0x8+0x1*-0x1129+0.4000000000000057),mlbrl1412=args[0x7d0+-0x40d+-0x6b*0x9]*(0x3*-0x133+-0x4d2*0x1+0x1*0x8dc+0.5999999999999943),mlbrl2195=args[0x991+0x5ef+-0xf8*0x10]*(0x1eef+0x1236+-0x15*0x24f+0.4000000000000057),mlbrl2901=args[0x4*-0x7ca+0x7*0x449+0x21*0x9]*(0x2118+-0xa*-0x3a1+0x23*-0x1f5+0.19999999999998863),mlbrl3688=args[0x1fed+-0x816+-0x1*0x17d7]*(0x18d5+0x1695+0x1*-0x2e4e),mlbrl5532=args[0x16d6+0x18d9*0x1+0x27*-0x139]*(-0x25*-0xb6+-0x6f6*0x3+-0x3c2),mlbrl9288=args[-0x1*-0x1323+-0x13*0xde+-0x2a9]*(-0x20be+0x157*0x4+0x1e28),mlbrlsmb=args[-0x251c+0xd*0x29f+0x309]*(-0x3*-0x7d2+-0x1*-0x1d0f+-0x3457+0.8599999999999994),mlbrlsmp=args[0x161a+-0x24d9+0xebf]*(-0x22d7+0x1961*0x1+-0x8*-0x13c+0.5),mlbrltwp=args[0x1f51+-0x1*0x1c1b+-0x112*0x3]*(-0x2628+0x2596+0xc0+0.8599999999999994),mlmy14=args[-0x49*0x28+-0x110a+0x1c72]*(-0xc47+0x7d5*0x3+-0x1d*0x63+0.06000000000000005),mlmy28=args[0x108e+-0x6*-0x233+-0x1dc0]*(0x135d*0x1+-0x112b*-0x1+-0x2486+0.1200000000000001),mlmy42=args[-0xec3+0x4*0x665+-0xad1]*(0x38a+-0x1716+0x138f+0.18000000000000016),mlmy56=args[-0x65*0x11+0x17*-0x3+0x6fa]*(0x1*-0x4df+-0x1*0x1a65+0x4d*0x68+0.2400000000000002),mlmy70=args[0xd9e+0x1bf1+-0x298f]*(0xee*0x12+0x53*0x59+-0x2d92+0.2999999999999998),mlmy112=args[0xbd*0x2b+0x4a9*0x5+-0x370c]*(-0x218b+0x2*0x10f5+-0x57*0x1+0.4800000000000004),mlmy140=args[0x282+0x25a*0x8+-0x1552]*(0x1785+0x3*0x5e9+0x5*-0x83e+0.5999999999999996),mlmy284=args[0x2c0+0x1*-0x839+0x579]*(-0x183b+0x2614+0xdc4*-0x1+0.1999999999999993),mlmy355=args[-0x28c*-0xb+0x1*-0x21bd+0x5b9]*(-0xc85+-0x59*-0x3+0xb94+0.5),mlmy429=args[-0x170a*-0x1+0x2*-0x12b3+-0x2*-0x72e]*(-0xada+0x94*0x3+-0x37*-0x2b+0.8000000000000007),mlmy716=args[-0x2*-0x12f7+0x15f8+-0x3be6]*(-0x4b+-0x1974+0x19f4),mlmy1446=args[-0x1662+0x1c6f+-0x1*0x60d]*(0xbd*-0x9+0x2289+-0x1b7a),mlmysmb=args[-0x14c6*-0x1+-0x5a0+-0xf26]*(0x1239+0x103d*0x1+0x14*-0x1b7+0.3999999999999986),mlmysmp=args[-0xd7e*-0x1+0xbcc+-0x194a]*(-0x7*-0x44f+0x7e2+0x25b7*-0x1+0.7999999999999972),mlmytwl=args[0x1df0+0x1360+0x41c*-0xc]*(0x265*0x5+-0x7ff+0x4*-0xf4+0.3999999999999986),mlph10=args[0x1*-0x5ce+-0x71f*0x1+0xced]*(0x1*-0x263f+-0x234e+0x4997),mlph19=args[0xac6+0x1*0x6d4+-0x2*0x8cd]*(0x1498*-0x1+-0x26d5*-0x1+-0x1*0x1229),mlph47=args[-0x1c5f+0x12df*0x1+0x980*0x1]*(-0x66e+-0x1*0x112c+-0x17cc*-0x1),mlph93=args[-0x7*0x382+-0x1c97+0xf*0x38b]*(0x7a8+-0x1d87+0x1643*0x1),mlph184=args[0x11f*0xf+0x775+-0x1846*0x1]*(-0x1f5*0x5+0xd*-0xa7+-0x6a*-0x2e),mlph277=args[-0xd*-0x175+0x69d*0x4+-0x2d65]*(-0xd52+-0x7*0x51e+0x73*0x70),mlph570=args[0xdb0+0x8f*-0x2b+0xa55]*(-0x933*-0x1+-0x1*0x1ab1+0x1372),mlph954=args[-0x1d60+0x26af+0x94f*-0x1]*(0x1*-0x113b+0x1430+0xf3),mlph1968=args[-0x23c2+0x69e+0x14*0x175]*(0x1341+-0x1*-0x17ef+-0x2360),mlph4955=args[-0x260+-0x1361+-0x15c1*-0x1]*(-0x17*0x3b+-0x901+-0x8e*-0x3d),mlphwkyp=args[0x1d*-0xbf+-0x235*-0xa+-0x25*0x3]*(0xb6+0xc7f*0x1+-0x3*0x446),mlphtpm=args[0x12fd+0xf95+0x3*-0xb86]*(0x1155+-0xc90*-0x3+-0x8f*0x5f);
let u250rc=args[-0x289+-0x1*0x187f+0x1b08]*(0xe24+-0xed9+-0x1*-0x14b),u450rc=args[0x2547*-0x1+0x19bb+0x2e3*0x4]*(-0x22e8+0x76*0x29+0x10fc),u920rc=args[0x2573+-0x13ed+-0x1*0x1186]*(0x6b3+-0x1aaf+0x15eb),u1850rc=args[-0x3*0x994+0x3e3+0x18d9]*(-0x33c+-0x138c+0x1aa6),u2800rc=args[-0x959*-0x1+0x165b+-0x1fb4]*(0x8*-0x28+-0x1*0x26ba+0x2dc7),u4750rc=args[-0x22e4+-0x6*-0x1e3+0x1792]*(-0x5c+-0x4f*0x35+0x1a62),u9600rc=args[-0xc9*0x9+-0x593*0x6+0x2883]*(0x209*0x5+0x10f*-0x19+-0x474*-0x8),u33000rc=args[-0x27f*0x9+0x1e*-0x8b+0x3*0xceb]*(-0xd8*0x78+-0xbf*-0x5e+-0x1*-0x5f92),u66500rc=args[0x8a1*-0x3+0x115*-0x21+0x3d98]*(0x2cf*0x58+0x1599+0x8bd9*-0x1),kgpp=args[-0x1*-0x1862+-0x2665+0x1*0xe03]*(-0x2a7+0x1249+-0xdc3),km=args[-0x1a23+-0x1f22+0x9*0x65d]*(0xa93+-0x1678+0x1*0xc45),kb=args[0xde6+0x18ef*-0x1+0xb09*0x1]*(0x231b+0x10bd*-0x1+-0x289*0x7),gfr=args[0x1*-0x1a0b+-0x12d0+0x1*0x2cdb]*(-0x66+0xcf7+-0xb52),gn60=args[0x106d+0x17cc+-0x2839]*(0x5*0xe6+0x7f6+0x31*-0x41+0.8999999999999999),gn330=args[0x8f*0x29+0x2604+-0x3ceb]*(0x1c84+-0x21bd+0xc*0x71+0.8999999999999986),gn1090=args[0x9*-0x185+0x3*-0x7ae+0xf1*0x27]*(-0x1*0x1cea+0x5*-0x27f+0x29a0+0.8999999999999986),gn2240=args[-0x9d*-0x1+-0x16e5*0x1+0x1648]*(-0x1*0x9db+0x629*-0x3+0x1cd7+0.9000000000000057),gn3880=args[0x1fef+-0x1cb+-0x1e24]*(0x6b3+0x25b3+0x35b*-0xd+0.9000000000000057),gnbwm=args[-0x5*0x15b+-0x259*0x5+0x1284]*(-0x1be6+-0x543+-0x213c*-0x1+0.8999999999999986); //AndriStore
let cod63=args[-0x2231+-0x1601+0x3832*0x1]*(-0x1be0+-0x26fe+0x42ff),cod128=args[-0xc97*0x1+0x1412+0x17f*-0x5]*(-0xd10+0x59*0x3b+-0x107*0x7),cod321=args[0x1*-0x1c3b+0x1*0x316+0x1925*0x1]*(0x371*0xb+0x13c*-0x7+-0x1c92),cod645=args[-0x7*-0x38c+0x1972+-0x861*0x6]*(-0x2f*-0x5f+-0x2654+0x32b*0x7),cod800=args[0x3*-0x64d+-0x748+0x1a2f]*(0x24c9+-0x1*0x24f8+0x1bb),cod1373=args[-0x409*-0x9+-0x3b3*0x5+-0x11d2]*(-0x210f+-0x147*0x11+0x395a),cod2060=args[0x19c4+0xb48+-0x250c]*(-0x1c5f+-0x268b+0x1c5*0x28),cod3564=args[0x136f+-0x2*0x57+-0x12c1*0x1]*(0x62*0x3f+0x31*0xca+-0x3856*0x1),cod5619=args[-0x1c09*-0x1+-0x659*0x4+-0x2a5*0x1]*(0x14*0x114+0x13f9+-0x2020),cod7656=args[0xd0e+0xc18+-0x1926]*(0x58*0x11+0x1d25*0x1+-0x1619),aov40=args[-0xff6*0x2+0x119*0x1+0x25f*0xd]*(0x19bc+-0x20fb*0x1+-0x76*-0x10),aov90=args[-0x1*-0x12bb+-0x21*-0xc5+0x2c2*-0x10]*(0x1*-0x266f+0x1*0x141e+-0x631*-0x3),aov230=args[0x15b4+0xe7c+-0x2430]*(-0xec4+0x3*0x36d+0x522),aov470=args[0x1*-0x2695+-0xeac+0x1*0x3541]*(0x1eba+-0xcd*0x3+-0x1b09),aov950=args[-0x20f*-0x1+0xae8+0x1*-0xcf7]*(0x1*-0x1f25+-0x24bd+0x4676),aov1430=args[-0x10a7+-0x531*0x3+0x203a]*(-0x1*-0x1e17+0x13d*0xd+-0x2a52),aov2390=args[-0x1*-0xc43+-0x1*-0x1ff4+-0x651*0x7]*(0x10be*-0x1+0x1e9+0x1547),aov4800=args[0x1195+-0x57*-0x1+-0x8f6*0x2]*(0x12e5*0x1+0x239a+-0x299b),gpv300=args[-0x1bde+0x2*0x2f7+0x15f0]*(-0x2085+-0x17d2+-0x520*-0xb+0.5099999999999998),gpv625=args[0x283*0x1+0x1fd0+-0x2253]*(-0x5c9*0x2+-0x462+-0x1*-0x1007+0.019999999999999574),gpv1125=args[0x2471+-0x1*0x125+-0x12*0x1f6]*(0x1031+0x14e2+-0x1279*0x2+0.28999999999999915),gpv1650=args[-0x7f9+-0x578+0x1*0xd71]*(0x2065*0x1+-0x1d1b+-0x31b+0.5499999999999972),gpv3400=args[0x8*0x65+-0x2*0x5c1+0x85a]*(0x165d+0x1*-0x1139+-0x4c5+0.09999999999999432),gpv7000=args[0xcae+0x129f+-0x1f4d]*(0x5*-0x741+-0x53*-0x11+0xe*0x240+0.19999999999998863);
let rd11=args[-0xb56+0xd*-0x255+0x29a7]*(-0x1849*-0x1+0x265*-0x1+-0x56*0x41),rd22=args[0x247*0xb+0xa00+0x230d*-0x1]*(-0x7*0x26b+0xc*0x3e+-0xe21*-0x1),rd45=args[0x531+-0x176f+0x123e]*(-0x11a4+0x152c+-0x350),rd50=args[-0x15c8*-0x1+0x22ca+-0x3892]*(0xf75+-0x1*-0x1c2b+-0x2b61),rd67=args[-0x10*-0x191+0xeb9+-0x23*0x123]*(0x7ff+-0x2*-0x8c3+-0x1931),rd90=args[0x21d3*0x1+0xc03+-0x2dd6]*(0x49*-0x17+0x9f6+-0x17b*0x2),rd100=args[-0x1*-0x2419+0x602+0xe09*-0x3]*(-0x17fc+-0x1f1*0x13+0x3d5c),rd112=args[0x2654+-0x10cb+-0x1589]*(-0xad9*0x1+0x20a+0x95c*0x1),rd250=args[-0x1a70+0x24bb*-0x1+0x1*0x3f2b]*(-0x17a5+-0xc77+0x2555),rd450=args[0xf3c*-0x1+-0x1ea1+0x2ddd]*(-0x5f8+-0x312*0x3+-0x1*-0x1161),rd500=args[-0x17*0xac+-0x2*-0x3b5+-0x6*-0x157]*(-0xd85+-0x49*-0xb+-0x43*-0x31),rd900=args[-0x1591+-0x189d*0x1+0x2e2e]*(-0xd5b+-0xde*-0x11+-0x3*-0x101),rd1000=args[-0x6b*-0x1d+0x1692+-0x22b1]*(-0xf8*0x3+0xd*0x47+-0x8*-0x86),rd1575=args[0x18bc+-0x1*0x1a9d+-0x25*-0xd]*(0x24c9+0x711+-0x1*0x2428),rd1800=args[0x5e4+0x5c9*0x6+0x144d*-0x2]*(0x6*-0x5f9+-0x1b30+0x47d1),rd2500=args[0xb*-0x37f+0x3ce*0x8+-0x805*-0x1]*(0x58f*0x5+0x1f03+-0x2e97),rd3600=args[-0x1b08+0x59*0x43+0x1d*0x21]*(-0x1c9d+-0x2*0x35f+0x34f2),rd5000=args[0x10*-0x1ae+0xdd*0x2b+-0xa3f]*(-0x1cac+-0x2b41+0x605b);
let rz60=args[-0x8f*0x18+0x1f24+-0x11bc]*(-0x1*-0xd9+0x323+-0x4*0xfe+0.9000000000000004),rz300=args[0xc5*-0x1+0xc9a*-0x2+0x19f9]*(0xd3*-0x1d+0x5*0x6e+-0xaea*-0x2+0.8999999999999986),rz980=args[-0x1e07+0x2651+-0x84a]*(-0x1*0x226f+0xb9*-0x21+0x1*0x3a83+0.8999999999999986),rz1980=args[-0x2*-0x124c+-0x817+-0x1c81]*(0xa12+0xf*-0x158+-0xa97*-0x1+0.9000000000000057),rz3280=args[0x30a+0xfe4+-0x1*0x12ee]*(-0x1378+-0x2a5*-0xa+0x45*-0x17+0.9000000000000057),rz6480=args[-0x1d60+0x1bc8*0x1+0x198]*(-0x399+-0x7e4+0xd0c),rzesp=args[0x11*-0x2f+-0xb3e+0xe5d]*(-0x22dc+0x1*0x235f+-0x70+0.8999999999999986);
let lol300=args[-0x64d*-0x1+-0x1e29*0x1+0x17dc]*(0xaa9*0x3+0x1*-0x1716+-0x8db),lol625=args[0x90b*-0x1+0x1*-0x1c97+0x25a2]*(0x187d*-0x1+-0x34d*0x5+0x2912),lol1125=args[0x19*0x16d+0x2500*0x1+-0x1837*0x3]*(-0x1*0x1c7c+0xf5b*-0x2+0x3b55),lol1650=args[-0xb*-0x349+-0xb13*0x3+0x2ea*-0x1]*(-0x2*-0xc93+0xaf8+-0x23ec),lol3400=args[0x2*-0x7ed+0x2*-0x1375+0x5*0xaf4]*(0x1167+0x1039*0x1+-0x213c),lol7000=args[0x1*0x216f+0x3*-0x742+-0xba9]*(-0xb30+0x5*-0x20c+0x1634),dg63=args[-0x857+-0x16*0xbb+-0x823*-0x3]*(-0x10*0x1a5+0xd41+0xd12+0.96),dg315=args[0x32*0xb1+0x104d+-0x32df]*(0x9*0x1e9+-0x233f+0x1221+0.9600000000000009),dg714=args[-0x2126+-0xd*0x271+0x317*0x15]*(0x15a+0x2181+-0x22aa+0.8999999999999986),dg1344=args[0x118d+0x59+0x1*-0x11e6]*(-0x5*0x757+-0x3*-0x798+0xe62*0x1+0.9000000000000057),dg3444=args[0x129*0x1b+0xdae+-0x2d01]*(-0x2b*-0x1+0xa94+0x2c*-0x3a+0.9099999999999966),dg6804=args[0x25b6+-0x4*-0x67a+-0x3f9e]*(-0x90f+0xb99*-0x1+0x1637+0.8600000000000136),sus100=args[-0x120d+0x3b9*-0x1+-0x6*-0x3a1]*(-0xc1+0x1c53+-0xdc7*0x2+0.5),sus310=args[0x230*-0x2+0xe5f+0x1*-0x9ff]*(0x1*0xfb7+0x4*0x4d1+0x22ed*-0x1),sus520=args[0xf6+-0x12fe+0x2*0x904]*(0x2092+0xb72+-0x2bed),sus1060=args[-0x102f*0x1+0x1e2b+-0x2cc*0x5]*(0x11b*-0x5+0x29*0x61+-0x9d5*0x1),sus2180=args[0x6c*-0x3b+0x2*0xc33+0x7e]*(0xd93+0xe9b+-0x1bd2),sus5600=args[0x1dd3*-0x1+-0xe2*0x15+0x3*0x101f]*(-0x22f6+0x235b*0x1+0x10*0x8);
// Detect Group Invite
if (m.mtype === 'groupInviteMessage') {
var eyeye = `*Jika Ingin Bot Masuk Ke Group Mu Silahkan Sewabot Ke Owner Dengan Ketik :* #owner`
setya.sendMessage(from, {text: eyeye, contextInfo:{externalAdReply:{
title: `${ucapanWaktu} ${pushname}`,
body: "10.000 PERBULAN",
thumbnail: thum,
mediaType:1,
renderLargerThumbnail: false,
showAdAttribution: true,
mediaUrl: 'https://chat.whatsapp.com/Gi9QDr7z4w16la9cdNiJLS',
sourceUrl: 'https://chat.whatsapp.com/KpHGupBJob8BzhzGyEzNV3'
}}}, {quoted:m})
}
//AntiLink
if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
if (budy.match(/(chat.whatsapp.com)/gi)) {
var urlGc = await setya.groupInviteCode(from)
try {
var urlSend = isUrl(budy).find(i => i.includes('chat.whatsapp.com'))
} catch {
var urlSend = budy
}
if (urlSend.includes(urlGc)) return
if (!isBotGroupAdmins) return replyDeface(`*Selama Bot Bukan Admin Kirim Lah Link Sesuka Mu*`)
replyDeface(`*「 LINKGROUP DETECTOR 」*\n\n karena kamu melanggar aturan group, yaitu menggirim link group kamu akan di kick dari group! bye bye:)`)
setya.groupParticipantsUpdate(from, [sender], "remove")
}
}
//Antilinkwame
if (isGroup && isAntiWame && !isOwner && !isGroupAdmins && isBotGroupAdmins){
if (chata.match(/(wa.me)/gi)) {
if (!isBotGroupAdmins) return replyDeface(`*Selama Bot Bukan Admin Kirim Lah Link Sesuka Mu*`)
replyDeface(`*「  LINK WA.ME DETECTOR 」*\n\nSepertinya kamu mengirimkan link wa.me, maaf kamu akan di kick`)
setya.groupParticipantsUpdate(from, [sender], "remove")
}
}
if (isGroup && isAntiWame && !isOwner && !isGroupAdmins && isBotGroupAdmins){
if (budy.match(/(https:\/\/wa.me)/gi)) {
if (!isBotGroupAdmins) return replyDeface(`*Selama Bot Bukan Admin Kirim Lah Link Sesuka Mu*`)
replyDeface(`*「 LINKGROUP DETECTOR 」*\n\nSepertinya kamu mengirimkan link wa.me, maaf kamu akan di kick`)
setya.groupParticipantsUpdate(from, [sender], "remove")
}
}

async function sendPlay(from, query) {
            var url = await yts(query)
            var urll = url.videos[0].url
            hxz.youtube(urll).then(async(data) => {
            var button = [{ buttonId: `.mp3 ${urll}`, buttonText: { displayText: `🎵 Audio [${data.size_mp3}]` }, type: 1 }, { buttonId: `.mp4 ${urll}`, buttonText: { displayText: `🎥 Video [${data.size}]` }, type: 1 }]
            setya.sendMessage(from, { caption: `*Title :* ${data.title}\n*Quality :* ${data.quality}\n*Url :* https://youtu.be/${data.id}`, location: { jpegThumbnail: await resize (await getBuffer(data.thumb), 280 ,210) }, buttons: button, footer: 'Pilih Salah Satu Button Dibawah⬇️', mentions: [sender] })
             }).catch((e) => {
             setya.sendMessage(from, { text: mess.error.api }, { quoted: msg })
             //ownerNumber.map( i => setya.sendMessage(from, { text: `Send Play Error : ${e}` }))
             })
          }
    
// Store Respon
        if (!isCmd && isGroup && isAlreadyResponList(from, chata, db_respon_list)) {
        var get_data_respon = getDataResponList(from, chata, db_respon_list)
        if (get_data_respon.isImage === false) {
        setya.sendMessage(from, { text: sendResponList(from, chata, db_respon_list) }, {
        quoted: msg
        })
        } else {
        setya.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
        quoted: msg
        })
        }
        }
    //✄┈┈┈⟬ *FITUR STALK* ⟭ •
require('../command/caseStalkUsername')(command, reply, m, q)
    switch (command) {
    	
   //Fitur Remini//
	        case 'hdfoto': case 'remini': case 'hd':
        if (!isGroup) return reply(mess.OnlyGrup)
if (!isImage && !isQuotedImage)return reply(`Send/reply Fotonya Kakak arghh😤`)
reply(`*🔄Mohon Tunggu Yaa Kak*`)
let anuni = await downloadAndSaveMediaMessage('image', `./temp/${sender}`)
    let kepo = await TelegraPH(anuni)
    let get_result = await getBuffer(`https://api.lolhuman.xyz/api/upscale?apikey=${apikey}&img=${kepo}`)
    setya.sendMessage(from, { image: get_result, caption: `*Done Kak, Foto-nya Sudah Jadi HD😱*` }, { quoted: m })
break
            
case 'help': {

reply(menunya)

}

break

case 'ownmenu':
setya.sendMessage(from, { text: menuown, contextInfo:{ externalAdReply:{ title: `AS Bot V 1.1.0〽️`, body: "Jangan Lupa Subscribe", thumbnail: thum, sourceUrl: 'https://youtube.com/channel/andriteam', mediaUrl: '', renderLargerThumbnail: true, showAdAttribution: false, mediaType: 1 }}}, { quoted: m });
break

case 'afk': 
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
              if (!isGroup) return 
              if (isAfkOn) return reply('Kalo Mau Afk Jangan Nimbrung di sini')
              const reason = q ? q : '*No Pesan*'
              afkg.addAfkUser(sender, time, reason, _afks)
              const aluty = `*ꞌꞋ ࣪𓂃 ִֶָ Admin Afk ִֶָ 𓂃 ࣪ꞌꞋ*

${pushname} Sekarang Offline/Afk
O *Alasan*  : ${reason}
O *Mulay Afk* : ${time}`
              //setya.sendMessage(from, aluty, text)
              setya.sendMessage(from, { text: aluty, contextInfo:{ externalAdReply:{ title: `MODE AFK ON`, body: "Saat Ini Kamu Afk", thumbnail: thumafk, sourceUrl: `https://wa.me/${sender}`, mediaUrl: '', renderLargerThumbnail: true, showAdAttribution: false, mediaType: 1 }}}, { quoted: m });
              break

    	// Store Menu
    
case 'rajas': case 'rajis': {
if (!isGroup) return reply(mess.OnlyGrup)
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Belum ada list message yang terdaftar di group ini\n\n*Untuk Melihat Fitur Bot Ketik* ${prefix}help`)
let texttm = `${ucapanWaktu} @${sender.split("@")[0]}\n\n⏳ ${jam}\n📆 ${tanggal}\n\n*⬇️ List Menu ⬇️*\n`
db_respon_list.sort((a, b) => {
    const nameA = a.key.toLowerCase();
    const nameB = b.key.toLowerCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
});
let cetme = [];
for (let x of db_respon_list) {
if (x.id === from) {
texttm += `${x.key}\n`
cetme.push(x.id)
}
}
texttm += `\nUntuk Melihat List menu
Ketik *teks* di atas`
    reply(texttm)
    }
break
        case 'addlist':        
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            var args1 = q.split("@")[0]
            var args2 = q.split("@")[1]                
            if (!q.includes("@")) return reply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n${command} tes@apa`)
            if (isAlreadyResponList(from, args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
            if (isImage || isQuotedImage) {
                let media = await downloadAndSaveMediaMessage('image', `./temp/${sender}`)
                const fd = new FormData();
                fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
                fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: fd
                }).then(res => res.json())
                    .then((json) => {
                        addResponList(from, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
                        reply(`*Sukses Set List Massage*\n*Kata Kunci :* *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
                    })
            } else {
                addResponList(from, args1, args2, false, '-', db_respon_list)
                reply(`*Sukses Set List Massage*\n*Kata Kunci :* *${args1}*`)
            }
            break
            case "tagall":
				{
					if (!isGroup) return replyDeface(mess.OnlyGrup);
					if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin);
					let teks = `      〘 *👥 Tag All* 〙

	➲ *Pesan : ${q ? q : "Order Oy Order"}*\n\n`;
					for (let mem of participants) {
						teks += `⭔ @${mem.id.split("@")[0]}\n`;
					}
					setya.sendMessage(
						from,
						{ text: teks, mentions: participants.map((a) => a.id) },
						{ quoted: m }
					);
				}
				break
        case 'dellist':        
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
            if (!q) return reply(`Gunakan dengan cara ${command} *key*\n\n_Contoh_\n\n${command} hello`)
            if (!isAlreadyResponList(from, q, db_respon_list)) return reply(`List respon dengan key *${q}* tidak ada di database!`)
            delResponList(from, q, db_respon_list)
            reply(`Sukses Delete List *${q}*`)
            break
case 'dellist2':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
            var uturu = q.split("@")[0]
            if (!q) return reply(`Gunakan dengan cara ${command} *key*\n\n_Contoh_\n\n${command} hello`)
            if (!isAlreadyResponList(from, uturu, db_respon_list)) return reply(`List respon dengan key *${q}* tidak ada di database!`)
            delResponList(from, uturu, db_respon_list)
            reply(`Sukses Delete List *${q}*`)
            break
        case 'updatelist': case 'update':        
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            var args1 = q.split("@")[0]
            var args2 = q.split("@")[1]
            if (!q.includes("@")) return reply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n${command} tes@apa`)
            if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
            if (isImage || isQuotedImage) {
                let media = await downloadAndSaveMediaMessage('image', `./temp/${sender}`)
                const fd = new FormData();
                fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
                fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: fd
                }).then(res => res.json())
                    .then((json) => {
                        updateResponList(from, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
                        reply(`Sukses Updatelist : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
                    })
            } else {
                updateResponList(from, args1, args2, false, '-', db_respon_list)
                reply(`Sukses Updatelist : *${args1}*`)
            }
            break
case 'jeda': {
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!isBotGroupAdmins) return replyDeface(mess.BotAdmin)
            if (!args[0]) return replyDeface(`kirim ${command} waktu\nContoh: ${command} 30m\n\nlist waktu:\ns = detik\nm = menit\nh = jam\nd = hari`)
            opengc[from] = { id: from, time: Date.now() + toMS(args[0]) }
            fs.writeFileSync('./database/opengc.json', JSON.stringify(opengc))
            setya.groupSettingUpdate(from, "announcement")
            .then((res) => replyDeface(`Jeda Dulu Ya Group Akan Di Buka Dalam ${args[0]} Lagi`))
            .catch((err) => replyDeface('Error'))
            }
            break
case 'kalkulator':
         case 'hitung':
         case 'total':
         case 'hasil':
         if (!isGroup) return reply(`Bot Hanya Respon Di Dalam Group`)
         if (!q) return reply(`( + ) = Untuk Tambah-Tambahan\n( - ) = Untuk Kurang-Kurangan\n( * ) = Untuk Kali-Kalian\n( / ) = Untuk Bagi-Bagian\n\nContoh\n/kalkulator 40+20`)
         var tteks = `Hasil : ${Math_js.evaluate(q)}`
         replyDeface(tteks)
         break 
        case 'p': case 'proses':
	        if (!rm.quoted) return
            if (!isGroup) return
            if (!isOwner && !isGroupAdmins) return
            let proses = `*STATUS PESANAN KAMU :*
    
STATUS      : PESANAN PENDING
PESANAN  : ${rm.quoted.text}
WAKTU       : ${jam}
TANGGAL  : ${tanggal}

*@${rm.quoted.sender.split("@")[0]} PESANAN KAMU SEDANG DI PROSES`
            const getTextP = getTextSetProses(from, set_proses);
            if (getTextP !== undefined) {
                mentions(getTextP.replace('@pesanan', rm.quoted.text).replace('user', rm.quoted.sender.split("@")[0]).replace('@jam', jam).replace('@tanggal', tanggal), [rm.quoted.sender], true);
            } else {
                mentions(proses, [rm.quoted.sender], true)
            }
            break

        case 'd': case 'done':
	        if (!rm.quoted) return
            if (!isGroup) return
            if (!isOwner && !isGroupAdmins) return
            let sukses = `*STATUS PESANAN KAMU :*
    
STATUS      : PESANAN SUKSES
PESANAN  : ${rm.quoted.text}
WAKTU       : ${jam}
TANGGAL  : ${tanggal}

*@${rm.quoted.sender.split("@")[0]} TERIMA KASIH SUDAH ORDER DI KAMI*`
            const getTextD = getTextSetDone(from, set_done);
            if (getTextD !== undefined) {
                mentions(getTextD.replace('@pesanan', rm.quoted.text).replace('user', rm.quoted.sender.split("@")[0]).replace('@jam', jam).replace('@tanggal', tanggal), [rm.quoted.sender], true);
            } else {
                mentions(sukses, [rm.quoted.sender], true)
            }
            break
        case 'setproses': case 'setp':
        if (isPricelist) return reply(`Fitur Pricelist Disable Untuk Melihat Fitur Ketik ${prefix}help`)
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`*Ini Hanya Contoh*\n${prefix}setp Pesanan Proses\n@jam\n@tanggal\nPesanan : @pesanan\n\nPesanan @user Sedang Di Proses `)
            if (isSetProses(from, set_proses)) return replyDeface(`Sudah Ada Setp Sebelumnya`)
            //addCountCmd(`${prefix}setproses`, sender, _cmd)
            addSetProses(q, from, set_proses)
            replyDeface(`Sukses Set Proses!`)
            break
        case 'changeproses': case 'updatep':
        if (isPricelist) return reply(`Fitur Pricelist Disable Untuk Melihat Fitur Ketik ${prefix}help`)
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`*Ini Hanya Contoh*\n${prefix}updatep Pesanan Proses\n@jam\n@tanggal\nPesanan : @pesanan\n\nPesanan @user Sedang Di Proses`)
            //addCountCmd(`${prefix}changeproses`, sender, _cmd)
            if (isSetProses(from, set_proses)) {
                changeSetProses(q, from, set_proses)
                replyDeface(`Sukses Update Set Proses`)
            } else {
                addSetProses(q, from, set_proses)
                replyDeface(`Sukses Update Set Proses`)
            }
            break
        case 'delsetproses': case 'delsetp':
        if (isPricelist) return reply(`Fitur Pricelist Disable Untuk Melihat Fitur Ketik ${prefix}help`)
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!isSetProses(from, set_proses)) return replyDeface(`Belum ada set proses di sini..`)
            //addCountCmd(`${prefix}delsetproses`, sender, _cmd)
            removeSetProses(from, set_proses)
            replyDeface(`Sukses Delete Set Proses`)
            break
        case 'setdone': case 'setd':
        if (isPricelist) return reply(`Fitur Pricelist Disable Untuk Melihat Fitur Ketik ${prefix}help`)
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`*Ini Hanya Contoh*\n${prefix}setd Pesanan Sukses\n@jam\n@tanggal\nPesanan : @pesanan\n\nPesanan @user Sukses`)
            if (isSetDone(from, set_done)) return replyDeface(`Sudah Ada Setd Sebelumnya`)
            //addCountCmd(`${prefix}setdone`, sender, _cmd)
            addSetDone(q, from, set_done)
            replyDeface(`Sukses Setd!`)
            break
        case 'changedone': case 'updated':
        if (isPricelist) return reply(`Fitur Pricelist Disable Untuk Melihat Fitur Ketik ${prefix}help`)
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`*Ini Hanya Contoh*\n${prefix}updated Pesanan Sukses\n@jam\n@tanggal\nPesanan : @pesanan\n\nPesanan @user Sukses`)
            //addCountCmd(`${prefix}changedone`, sender, _cmd)
            if (isSetDone(from, set_done)) {
                changeSetDone(q, from, set_done)
                replyDeface(`Sukses Update Setd`)
            } else {
                addSetDone(q, from, set_done)
                replyDeface(`Sukses Update Setd`)
            }
            break
        case 'delsetdone': case 'delsetd':
        if (isPricelist) return reply(`Fitur Pricelist Disable Untuk Melihat Fitur Ketik ${prefix}help`)
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!isSetDone(from, set_done)) return replyDeface(`Belum ada set done di sini..`)
            //addCountCmd(`${prefix}delsetdone`, sender, _cmd)
            removeSetDone(from, set_done)
            replyDeface(`Sukses Delete Setd`)
            break
//SETBOT
case 'setbot':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`*Ini Hanya Contoh*\n${prefix}setbot Halo Silahkan Ketik #menu Untuk Melihat List Di Group Ini`)
            if (isSetBot(from, set_bot)) return replyDeface(`Sudah Ada Setbot Sebelumnya`)
            //addCountCmd(`${prefix}setbot`, sender, _cmd)
            addSetBot(q, from, set_bot)
            replyDeface(`Sukses Respon Bot!`)
            break
        case 'changebot': case 'updatesetbot': case 'upsetbot':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`*Ini Hanya Contoh*\n${prefix}updatesetbot Hai Kak Silahkan Ketik #menu Untuk Melihat List`)
            //addCountCmd(`${prefix}changebot`, sender, _cmd)
            if (isSetBot(from, set_bot)) {
                changeSetBot(q, from, set_bot)
                replyDeface(`Sukses Update Respon Bot`)
            } else {
                addSetBot(q, from, set_bot)
                replyDeface(`Sukses Update Respon Bot`)
            }
            break
        case 'delsetbot': case 'delsetb':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!isSetBot(from, set_bot)) return replyDeface(`Belum ada setbot di sini..`)
            //addCountCmd(`${prefix}delsetbot`, sender, _cmd)
            removeSetBot(from, set_bot)
            replyDeface(`Sukses Delete Respon Bot`)
            break
case 'add':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins) return replyDeface(mess.GrupAdmin)
            if (!isBotGroupAdmins) return replyDeface(mess.BotAdmin)
            if (groupMembers.length == 257) return reply(`Anda tidak dapat menambah peserta, karena Grup sudah penuh!`)
            var mems = []
            groupMembers.map( i => mems.push(i.id) )
            var number;
            if (args.length > 0) {
                number = q.replace(/[^0-9]/gi, '')+"@s.whatsapp.net"
                var cek = await setya.onWhatsApp(number)
                if (cek.length == 0) return reply(`Masukkan nomer yang valid dan terdaftar di WhatsApp`)
                if (mems.includes(number)) return reply(`Nomer tersebut sudah berada didalam grup!`)
                ////addCountCmd(`${prefix}add`, sender, _cmd)
                setya.groupParticipantsUpdate(from, [number], "add")
                .then( res => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
            } else if (m.isQuotedMsg) {
                number = m.quotedMsg.sender
                var cek = await setya.onWhatsApp(number)
                if (cek.length == 0) return reply(`Peserta tersebut sudah tidak terdaftar di WhatsApp`)
                if (mems.includes(number)) return reply(`Nomer tersebut sudah berada didalam grup!`)
                ////addCountCmd(`${prefix}add`, sender, _cmd)
                setya.groupParticipantsUpdate(from, [number], "add")
                .then( res => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
            } else {
                reply(`Kirim perintah ${command} nomer atau balas pesan orang yang ingin dimasukkan`)
            }
            break
case 'kick':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins) return replyDeface(mess.GrupAdmin)
            if (!isBotGroupAdmins) return replyDeface(mess.BotAdmin)
            var number;
			if (mentionUser.length !== 0) {
                number = mentionUser[0]
                ////addCountCmd(`${prefix}kick`, sender, _cmd)
                setya.groupParticipantsUpdate(from, [number], "remove")
                .then( res => replyDeface(jsonformat(res)))
                .catch((err) => replyDeface(jsonformat(err)))
            } else if (m.isQuotedMsg) {
                number = m.quotedMsg.sender
                ////addCountCmd(`${prefix}kick`, sender, _cmd)
                setya.groupParticipantsUpdate(from, [number], "remove")
                .then( res => replyDeface(jsonformat(res)))
                .catch((err) => replyDeface(jsonformat(err)))
            } else {
                replyDeface(`Tag atau balas pesan orang yang ingin dikeluarkan dari grup`)
            }
            break
        case 'promote':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!isBotGroupAdmins) return replyDeface(mess.BotAdmin)
            if (mentionUser.length !== 0) {
                ////addCountCmd(`${prefix}promote`, sender, _cmd)
                setya.groupParticipantsUpdate(from, [mentionUser[0]], "promote")
                .then( res => { mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai admin`, [mentionUser[0]], true) })
                .catch(() => replyDeface(mess.error.api))
            } else if (m.isQuotedMsg) {
                ////addCountCmd(`${prefix}promote`, sender, _cmd)
                setya.groupParticipantsUpdate(from, [m.quotedMsg.sender], "promote")
                .then( res => { mentions(`Sukses menjadikan @${m.quotedMsg.sender.split("@")[0]} sebagai admin`, [m.quotedMsg.sender], true) })
                .catch(() => replyDeface(mess.error.api))
            } else {
                replyDeface(`Tag atau balas pesan member yang ingin dijadikan admin`)
            }
            break
        case 'demote':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!isBotGroupAdmins) return replyDeface(mess.BotAdmin)
            if (mentionUser.length !== 0) {
                ////addCountCmd(`${prefix}demote`, sender, _cmd)
                setya.groupParticipantsUpdate(from, [mentionUser[0]], "demote")
                .then( res => { mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai member biasa`, [mentionUser[0]], true) })
                .catch(() => replyDeface(mess.error.api))
            } else if (m.isQuotedMsg) {
                ////addCountCmd(`${prefix}demote`, sender, _cmd)
                setya.groupParticipantsUpdate(from, [m.quotedMsg.sender], "demote")
                .then( res => { mentions(`Sukses menjadikan @${m.quotedMsg.sender.split("@")[0]} sebagai member biasa`, [m.quotedMsg.sender], true) })
                .catch(() => replyDeface(mess.error.api))
            } else {
                replyDeface(`Tag atau balas pesan admin yang ingin dijadikan member biasa`)
            }
            break
        
case 'owner': case 'sewabot':
            sendContact(from, ownnumber.split('@s.whatsapp.net')[0], ownerName, msg)
            // setya.sendContact(from, ownerNumber.map( i => i.split("@")[0]), msg)
            .then((res) => setya.sendMessage(from, { text: '*Jika Ingin Sewabot Silahkan Hubungi Owner*' }, {quoted: res}))
            break

case 'getlink':
              if (!isOwner) return reply(`Command ${command} Hanya Khusus Owner`)
              if(!q)return reply('*Sertai Id Group*')
              var linkgc = await setya.groupInviteCode(`${q}`)
              reply('https://chat.whatsapp.com/'+linkgc)
              break
case 'bc': case 'broadcast': {
if (!isOwner) return reply(`Command ${command} Hanya Khusus Owner`)
if (args.length < 2) return replyDeface(`Kirim perintah ${command} teks`)
let getJidGroup = await setya.groupFetchAllParticipating()
let jidGroup = Object.entries(getJidGroup).slice(0).map(entry => entry[1])
let jidGrup = jidGroup.map(v => v.id)
let teks = `${q}`
reply(`*Otw Mengirim*`)
for (let i of jidGrup) {
let gcMetadata = await setya.groupMetadata(i)
let partcipant = await gcMetadata.participants
await sleep(3000)
setya.sendMessage(i, {text:'「 *AS Bot Broadcast* 」\n\n' + teks + '\n\n© AS Bot' })
}
reply(`Sukses Mengirim Broadcast Ke ${jidGrup.length} Group`)
}
break
case 'addwaktu':
            if (!isOwner) return 
            if (args.length < 1) return 
            if (!isUrl(args[0])) return replyDeface(mess.error.Iv)
            var url = args[0]
            url = url.split('https://chat.whatsapp.com/')[1]
            if (!args[1]) return replyDeface(`Waktunya?`)
            var data = await setya.groupAcceptInvite(url)
            if (_sewa.checkSewaGroup(data, sewa)) return replyDeface(`Bot sudah disewa oleh grup tersebut!`)
            _sewa.addSewaGroup(data, args[1], sewa)
            replyDeface(`Success Add Sewa Group!`)
            break

case 'addsewa':
case 'sewarpl':
case 'perpanjang':
              if (!isOwner) return reply(`Command ${command} Hanya Khusus Owner`)
              if (args.length < 1) return reply(`Penggunaan :\n*${prefix}addsewa 15k 30d*/n*Ini Hanya Contoh*`)
              _sewa.addSewaGroup(from, args[1], sewa)
              reply(`Success Add Sewa`)
              break

case 'delsewa':
              if (!isOwner) return replyDeface(mess.OnlyOwner)
              if (!isGroup) return replyDeface(`Perintah ini hanya bisa dilakukan di Grup yang menyewa bot`)
              if (!isSewa) return replyDeface(`Bot tidak disewa di Grup ini`)
              sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
              fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
              replyDeface(`Sukses`)
              break
        case 'delsw':
            if (!isOwner) return replyDeface(mess.OnlyOwner)
            if (!isGroup) return replyDeface(`Perintah ini hanya bisa dilakukan di Grup yang menyewa bot`)
            if (!isSewa) return replyDeface(`Bot tidak disewa di Grup ini`)
            sewa.splice(_sewa.getSewaPosition(args[0], sewa), 1)
            fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa, null, 2))
            replyDeface(`Sukses`)
            break

case 'checksewa': case 'ceksewa':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isSewa) return replyDeface(`Bot tidak di sewa group ini!`)
            let ceksewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
            let sewanya = `*Expire :* ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s)`
            replyDeface(sewanya)
            break

case 'listsewa':
if (!isOwner) return replyDeface(mess.OnlyOwner)
            let list_sewa_list = `*LIST-SEWA-GROUP*\n\n*Total:* ${sewa.length}\n\n`
            let data_array = [];
            for (let x of sewa) {
                ////addCountCmd(`${prefix}listsewa`, sender, _cmd)
                list_sewa_list += `*Name:* ${await getGcName(x.id)}\n*ID :* ${x.id}\n`
                if (x.expired === 'PERMANENT') {
                    let ceksewa = 'PERMANENT'
                    list_sewa_list += `*Expire :* PERMANENT\n\n`
                } else {
                    let ceksewa = ms(x.expired - Date.now())
                    list_sewa_list += `*Expire :* ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s) ${ceksewa.seconds} second(s)\n\n`
                }
            }
            setya.sendMessage(from, { text: list_sewa_list }, { quoted: msg })
            break

case 'setppgrup': case 'setppgc':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
		    if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
		    if (!isBotGroupAdmins) return replyDeface(mess.BotAdmin)
            if (isImage || isQuotedImage) {
            //addCountCmd(`${prefix}setppgrup`, sender, _cmd)
            var media = await downloadAndSaveMediaMessage('image', `ppgc${from}.jpeg`)
            if (args[0] == '\'panjang\'') {
            	var { img } = await generateProfilePicture(media)
            	await setya.query({
                    tag: 'iq',
                    attrs: {
                        to: from,
                        type:'set',
                        xmlns: 'w:profile:picture'
                    },
                    content: [
                    {
                        tag: 'picture',
                        attrs: { type: 'image' },
                        content: img
                    } 
                    ]
                })
                fs.unlinkSync(media)
            	replyDeface(`Sukses`)
            } else {
                await setya.updateProfilePicture(from, { url: media })
                .then( res => {
                    replyDeface(`Sukses`)
                    fs.unlinkSync(media)
                }).catch(() => replyDeface(mess.error.api))
            }
            } else {
			    replyDeface(`Kirim/balas gambar dengan caption ${command}`)
            }
            break
        case 'setnamegrup': case 'setnamegc': case 'setname':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
		    if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
		    if (!isBotGroupAdmins) return replyDeface(mess.BotAdmin)
            if (args.length < 0) return replyDeface(`Gunakan dengan cara ${command} *text*\n\n_Contoh_\n\n${command} Support ${ownerName}`)
            //addCountCmd(`${prefix}setnamegc`, sender, _cmd)
            await setya.groupUpdateSubject(from, q)
            .then( res => {
                replyDeface(`Sukses`)
            }).catch(() => replyDeface(mess.error.api))
            break
        case 'setdesc': case 'setdescription':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
		    if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
		    if (!isBotGroupAdmins) return replyDeface(mess.BotAdmin)
            if (args.length < 0) return replyDeface(`Gunakan dengan cara ${command} *text*\n\n_Contoh_\n\n${command} New Description by ${ownerName}`)
            //addCountCmd(`${prefix}setdesc`, sender, _cmd)
            await setya.groupUpdateDescription(from, q)
            .then( res => {
                replyDeface(`Sukses`)
            }).catch(() => replyDeface(mess.error.api))
            break

case 'revoke':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins) return replyDeface(mess.GrupAdmin)
            if (!isBotGroupAdmins) return replyDeface(mess.BotAdmin)
            await setya.groupRevokeInvite(from)
            .then( res => {
                replyDeface(`Sukses menyetel tautan undangan grup ini`)
            }).catch(() => replyDeface(mess.error.api))
            break
        case 'hidetag':
        case 'h':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
		    if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
			if (!q) return reply(`Masukkan textnya`)
            let mem = [];
            groupMembers.map( i => mem.push(i.id) )
            setya.sendMessage(from, { text: q ? q : m.quotedMsg.chats, mentions: mem })
            break
        case 'delete': case 'del': case 'd':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!m.isQuotedMsg) return replyDeface(`Balas chat dari bot yang ingin dihapus`)
            if (!m.quotedMsg.fromMe) return replyDeface(`Hanya bisa menghapus chat dari bot`)
            setya.sendMessage(from, { delete: { fromMe: true, id: m.quotedMsg.id, remoteJid: from }})
            break
        

case 'welcome':
                    if (!isGroup) return reply(`Bot Hanya Respon Di Dalam Group`)
					if (!isOwner && !isGroupAdmins) return reply(`Command ${command} Hanya Khusus Admin`)
					if (!isBotGroupAdmins) return reply(`*Jadi Kan Bot Admin Sebelum Menggunakan*`)
					if (args.length < 1) return reply(`Untuk Mengaktifkan Ketik 1\nContoh : ${prefix}welcome 1\n\nUntuk Nonaktifkan Welcome Ketik 0\nContoh : ${prefix}welcome 0`)
					if (Number(args[0]) === 1) {
					if (isWelcome) return reply('welcome sudah aktif')
					welcome.push(from)
					fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome))
					reply('Done Mengaktifkan welcome✅')
					setya.sendMessage(from, { text: `*Welcome Online*` })
					} else if (Number(args[0]) === 0) {
					if (!isWelcome) return reply('Mode welcome sudah disable')
					let anu1 = welcome.indexOf(from)
					welcome.splice(anu1, 1)
					fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome))
					reply('Sukes menonaktifkan welcome di group ini ✔️')
					} else {
					reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
        case 'leave':
        case 'left':
                    if (!isGroup) return reply(`Bot Hanya Respon Di Dalam Group`)
					if (!isOwner && !isGroupAdmins) return reply(`Command ${command} Hanya Khusus Admin`)
					if (!isBotGroupAdmins) return reply(`*Jadi Kan Bot Admin Sebelum Menggunakan*`)
					if (args.length < 1) return reply(`Untuk Mengaktifkan Ketik 1\nContoh : ${prefix}leave 1\n\nUntuk Nonaktifkan Leave Ketik 0\nContoh : ${prefix}leave 0`)
					if (Number(args[0]) === 1) {
					if (isLeft) return reply('left sudah aktif')
					left.push(from)
					fs.writeFileSync('./database/left.json', JSON.stringify(left))
					reply('Done Mengaktifkan left✅')
					setya.sendMessage(from, { text: `*Left Online*` })
					} else if (Number(args[0]) === 0) {
					if (!isLeft) return reply('Mode left sudah disable')
					let anu1 = left.indexOf(from)
					left.splice(anu1, 1)
					fs.writeFileSync('./database/left.json', JSON.stringify(left))
					reply('Sukes menonaktifkan left di group ini ✔️')
					} else {
					reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break

        case 'price':
                    if (!isGroup) return reply(`Bot Hanya Respon Di Dalam Group`)
					if (!isOwner) return reply(`Command ${command} Hanya Khusus Admin`)
					if (args.length < 1) return reply(`Untuk Mengaktifkan Ketik 1\nContoh : ${prefix}price 0\n\nUntuk Nonaktifkan Pricelist Ketik 1\nContoh : ${prefix}pricelist 1`)
					if (Number(args[0]) === 0) {
					if (isPricelist) return reply('Pricelist sudah aktif')
					pricelist.push(from)
					fs.writeFileSync('./database/pricelist.json', JSON.stringify(pricelist))
					reply('Done Mengaktifkan Pricelist Group✅')
					setya.sendMessage(from, { text: `Done Mengaktifkan Pricelist Group` })
					} else if (Number(args[0]) === 1) {
					if (!isPricelist) return reply('Pricelist sudah disable')
					let anu1 = pricelist.indexOf(from)
					pricelist.splice(anu1, 1)
					fs.writeFileSync('./database/pricelist.json', JSON.stringify(pricelist))
					reply('Sukes menonaktifkan Pricelist group di group ini ✔️')
					} else {
					reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break

              case 'antilink':
                    if (!isGroup) return reply(`Bot Hanya Respon Di Dalam Group`)
					if (!isOwner && !isGroupAdmins) return reply(`Command ${command} Hanya Khusus Admin`)
					if (!isBotGroupAdmins) return reply(`*Jadi Kan Bot Admin Sebelum Menggunakan Fitur Antilink*`)
					if (args.length < 1) return reply(`Untuk Mengaktifkan Ketik 1\nContoh : ${prefix}antilink 1\n\nUntuk Nonaktifkan Antilink Ketik 0\nContoh : ${prefix}antilink 0`)
					if (Number(args[0]) === 1) {
					if (isAntiLink) return reply('anti link group sudah aktif')
					antilink.push(from)
					fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
					reply('Done Mengaktifkan Antilink Group✅')
					setya.sendMessage(from, { text: `Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group` })
					} else if (Number(args[0]) === 0) {
					if (!isAntiLink) return reply('Mode anti link group sudah disable')
					let anu1 = antilink.indexOf(from)
					antilink.splice(anu1, 1)
					fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
					reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
					reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
				
case 'antilinkwame':
                    if (!isGroup) return reply(`Bot Hanya Respon Di Dalam Group`)
					if (!isOwner && !isGroupAdmins) return reply(`Command ${command} Hanya Khusus Admin`)
					if (!isBotGroupAdmins) return reply(`*Jadi Kan Bot Admin Sebelum Menggunakan Fitur Antilink*`)
					if (args.length < 1) return reply(`Untuk Mengaktifkan Ketik 1\nContoh : ${prefix}antiwame 1\n\nUntuk Nonaktifkan Antiwame Ketik 0\nContoh : ${prefix}antiwame 0`)
					if (Number(args[0]) === 1) {
					if (isAntiWame) return reply('antiwame group sudah aktif')
					antiwame.push(from)
					fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
					reply('Done Mengaktifkan antiwame Group✅')
					setya.sendMessage(from, { text: `Perhatian kepada seluruh member antiwame aktif apabila anda mengirim link antiwame anda akan di kick dari group` })
					} else if (Number(args[0]) === 0) {
					if (!isAntiWame) return reply('Mode antiwame group sudah disable')
					let anu1 = antiwame.indexOf(from)
					antiwame.splice(anu1, 1)
					fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
					reply('Sukes menonaktifkan antiwame group di group ini ✔️')
					} else {
					reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
        case 'open': case 'buka':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
		    if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
		    if (!isBotGroupAdmins) return replyDeface(mess.BotAdmin)
            setya.groupSettingUpdate(from, 'not_announcement')
            .then((res) => {
            let opengc = `O━• *Group Open* •━O

📜 *Group Telah Di Buka Oleh Admin* @${sender.split("@")[0]}

${gaya}🎊 Group Open
📆 ${tanggal}
⏰ ${jam}${gaya}

━O━O━••••••••••••━O━O━`
            const tettOpen = getTextSetOpen(from, set_open);
            if (tettOpen !== undefined) {
            mentions(tettOpen.replace('admin', sender.split("@")[0]).replace('@jam', jam).replace('@tanggal', tanggal), [sender], true);
            } else {
            mentions(opengc, [sender], true)
            }
            })
			break

        case 'close': case 'tutup':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
		    if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
		    if (!isBotGroupAdmins) return replyDeface(mess.BotAdmin)
		    setya.groupSettingUpdate(from, 'announcement')
		    .then((res) => {
			let closegc = `O━• *Group Close* •━O

📜 *Group Telah Di Tutup Oleh Admin* @${sender.split("@")[0]}

${gaya}🎊 Group Tutup
📆 ${tanggal}
⏰ ${jam}${gaya}

━O━O━••••••••••••━O━O━`
            const textClose = getTextSetClose(from, set_close);
            if (textClose !== undefined) {
            mentions(textClose.replace('admin', sender.split("@")[0]).replace('@jam', jam).replace('@tanggal', tanggal), [sender], true);
            } else {
            mentions(closegc, [sender], true)
            }
            })
            .catch((err) => replyDeface('Error'))
		    break

        case 'setopen':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`Gunakan dengan cara ${command} *teks_open*\n\n_Contoh_\n\n${command} Group telah di buka`)
            if (isSetOpen(from, set_open)) return replyDeface(`Set Open already active`)
            addSetOpen(q, from, set_open)
            replyDeface(`Successfully set Open!`)
            break
        case 'updateopen':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`Gunakan dengan cara ${command} *teks_open*\n\n_Contoh_\n\n${command} Group telah di buka`)
            if (isSetOpen(from, set_open)) {
                changeSetOpen(q, from, set_open)
                replyDeface(`Sukses change set Open teks!`)
            } else {
                addSetOpen(q, from, set_open)
                replyDeface(`Sukses change set Open teks!`)
            }
            break
        case 'delsetopen':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!isSetOpen(from, set_open)) return replyDeface(`Belum ada set Open di sini..`)
            removeSetOpen(from, set_open)
            replyDeface(`Sukses delete set Open`)
            break
        case 'setclose':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`Gunakan dengan cara ${command} *teks_close*\n\n_Contoh_\n\n${command} Group telah di tutup`)
            if (isSetClose(from, set_close)) return replyDeface(`Set Close already active`)
            addSetClose(q, from, set_close)
            replyDeface(`Successfully set Close!`)
            break
        case 'updateclose':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`Gunakan dengan cara ${command} *teks_close*\n\n_Contoh_\n\n${command} Group telah di tutup`)
            if (isSetClose(from, set_close)) {
                changeSetClose(q, from, set_close)
                replyDeface(`Sukses change set Close teks!`)
            } else {
                addSetClose(q, from, set_close)
                replyDeface(`Sukses change set Close teks!`)
            }
            break
        case 'delsetclose':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!isSetClose(from, set_close)) return replyDeface(`Belum ada set Close di sini..`)
            removeSetClose(from, set_close)
            replyDeface(`Sukses delete set Close`)
            break

        case 'setwelcome':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`Gunakan dengan cara ${command} *teks_welcome*\n\n_Contoh_\n\n${command} Halo @nama, Selamat datang di @grup`)
            if (isSetWelcome(from, set_welcome_db)) return replyDeface(`Sudah Ada Setwelcone Sebelumnya`)
            addSetWelcome(q, from, set_welcome_db)
            //addCountCmd(`${prefix}setwelcome`, sender, _cmd)
            replyDeface(`Sukses Setwelcome!`)
            break
        case 'updatewelcome':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`Gunakan dengan cara ${command} *teks_welcome*\n\n_Contoh_\n\n${command} Halo @nama, Selamat datang di @grup`)
            if (isSetWelcome(from, set_welcome_db)) {
                //addCountCmd(`${prefix}changewelcome`, sender, _cmd)
                changeSetWelcome(q, from, set_welcome_db)
                replyDeface(`Sukses change set welcome teks!`)
            } else {
                //addCountCmd(`${prefix}changewelcome`, sender, _cmd)
                addSetWelcome(q, from, set_welcome_db)
                replyDeface(`Sukses Update Setwelcome`)
            }
            break
        case 'delwelcome':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!isSetWelcome(from, set_welcome_db)) return replyDeface(`Belum Ada Setwelcone Sebelumnya`)
            removeSetWelcome(from, set_welcome_db)
            //addCountCmd(`${prefix}delsetwelcome`, sender, _cmd)
            replyDeface(`Sukses Delete Setwelcome`)
            break
        case 'setleave':
        case 'setleft':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`Gunakan dengan cara ${command} *teks_left*\n\n_Contoh_\n\n${command} Halo @nama, Selamat tinggal dari @grup`)
            if (isSetLeft(from, set_left_db)) return replyDeface(`Sudah Ada Setleave Sebelumnya`)
            //addCountCmd(`${prefix}setleft`, sender, _cmd)
            addSetLeft(q, from, set_left_db)
            replyDeface(`Sukses Setleave`)
            break
        case 'updateleave':
        case 'updateleft':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`Gunakan dengan cara ${command} *teks_left*\n\n_Contoh_\n\n${command} Halo @nama, Selamat tinggal dari @grup`)
            if (isSetLeft(from, set_left_db)) {
                //addCountCmd(`${prefix}updateleft`, sender, _cmd)
                changeSetLeft(q, from, set_left_db)
                replyDeface(`Sukses Update Setleave`)
            } else {
                //addCountCmd(`${prefix}updateleft`, sender, _cmd)
                addSetLeft(q, from, set_left_db)
                replyDeface(`Sukses Update Setleave`)
            }
            break
        case 'delsetleft':
        case 'delleave':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!isSetLeft(from, set_left_db)) return replyDeface(`Belum Ada SetLeave Sebelumnya`)
            //addCountCmd(`${prefix}delsetleft`, sender, _cmd)
            removeSetLeft(from, set_left_db)
            replyDeface(`Sukses Delete Setleave`)
            break
        case 'linkgrup': case 'link': case 'linkgc':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isBotGroupAdmins) return replyDeface(mess.BotAdmin)
            var url = await setya.groupInviteCode(from).catch(() => replyDeface(mess.error.api))
            url = 'https://chat.whatsapp.com/'+url
            replyDeface(url)
            break

case 'pesansementara': 
                if (!isGroup) return reply(`Bot Hanya Respon Di Dalam Group`)
		        if (!isOwner && !isGroupAdmins) return reply(`Command ${command} Hanya Khusus Admin`)
				if (!isBotGroupAdmins) return reply(`*Jadi Kan Bot Admin Sebelum Menggunakan Fitur ${prefix + command}*`)
				if (!q) return reply(`Untuk Mengaktifkan\n${prefix}pesansementara on\n\nUntuk Mematikan\n${prefix}pesansementara off`)
                if (args[0] === 'on') {
                setya.sendMessage(from, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'off') {
                setya.sendMessage(from, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
              break

case 'editinfo': 
                if (!isGroup) return reply(`Bot Hanya Respon Di Dalam Group`)
		        if (!isOwner && !isGroupAdmins) return reply(`Command ${command} Hanya Khusus Admin`)
				if (!isBotGroupAdmins) return reply(`*Jadi Kan Bot Admin Sebelum Menggunakan Fitur ${prefix + command}*`)
				if (!q) return reply(`Untuk Mengaktifkan\n${prefix}editinfo on\n\nUntuk Mematikan\n${prefix}editinfo off`)
                if (args[0] === 'on') {
                setya.groupSettingUpdate(from, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'off') {
                setya.groupSettingUpdate(from, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group`)).catch((err) => reply(jsonformat(err)))
                }
              break

case 'toimg': case 'toimage': case 'tovid': case 'tovideo':
if (!isGroup) return replyDeface(mess.OnlyGrup)
            //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return replyDeface(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (!isQuotedSticker) return replyDeface(`Reply stikernya!`)
            var stream = await downloadContentFromMessage(msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
            var buffer = Buffer.from([])
            for await(const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk])
            }
            var rand1 = 'temp/'+getRandom('.webp')
            var rand2 = 'temp/'+getRandom('.png')
            fs.writeFileSync(`./${rand1}`, buffer)
            if (isQuotedSticker && msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true) {
                //addCountCmd(`${prefix}toimg`, sender, _cmd)
                exec(`ffmpeg -i ./${rand1} ./${rand2}`, (err) => {
                    fs.unlinkSync(`./${rand1}`)
                    if (err) return replyDeface(mess.error.api)
                    setya.sendMessage(from, { image: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
                    //limitAdd(sender, limit)
                    fs.unlinkSync(`./${rand2}`)
                })
            } else {
                replyDeface(mess.wait)
                //addCountCmd(`${prefix}tovid`, sender, _cmd)
                webp2mp4File(`./${rand1}`).then(async(data) => {
                    fs.unlinkSync(`./${rand1}`)
                    setya.sendMessage(from, { video: await getBuffer(data.data) }, { quoted: msg })
                    //limitAdd(sender, limit)
                })
            }
            break
        case 'tomp3': case 'toaudio':
        if (!isGroup) return replyDeface(mess.OnlyGrup)
            //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return replyDeface(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (isVideo || isQuotedVideo) {
                let media = await downloadAndSaveMediaMessage('video', `./temp/${sender}.mp4`)
                replyDeface(mess.wait)
                //addCountCmd(`${prefix}tomp3`, sender, _cmd)
                let ran = './temp/'+getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
                    if (err) return replyDeface('Gagal :V')
                    setya.sendMessage(from, { audio: fs.readFileSync(ran),  mimetype: 'audio/mp4', fileName: `${sender.split("@")[0]}ToMp3` }, { quoted: msg })
                    //limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                })
            } else {
                replyDeface(`Kirim/reply video dengan caption ${command}`)
            }
            break
        case 'ttp':
        if (!isGroup) return replyDeface(mess.OnlyGrup)
            //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return replyDeface(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (!q) return replyDeface(`Gunakan dengan cara ${command} text\n\nContoh : ${command} frbot`)
            if (q.length > 75) return replyDeface(`Teksnya terlalu panjang`)
            //addCountCmd(`${prefix}attp`, sender, _cmd)
            //var data = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
            var data = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=${apikey}&text=${encodeURIComponent(q)}`)
            var rand2 = 'temp/'+getRandom('.webp')
            fs.writeFileSync(`./${rand2}`, data)
            exec(`webpmux -set exif ./temp/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
                setya.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
                //limitAdd(sender, limit)
                fs.unlinkSync(`./${rand2}`)
            })
            break
            case 'qc':
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!q) return reply(`contoh\n\n${prefix}quotely teks`)
var randomColor = ['#000000', '#FFFFFF', '#FFD700'];
        const apiColor = randomColor[Math.floor(Math.random() * randomColor.length)];
var opt = { packname: 'ANDRISTORE', author: 'BOT' }
            reply(mess.wait)
let jsonnya = {
type: "quoted",
    format: "webp",
backgroundColor: apiColor,
   width: 768,
     height: 768,
scale: 2,
    messages: [
{
entities: [],
        avatar: true,
from: {
   id: 1,
name: pushname,
     photo: {
url: await setya.profilePictureUrl(sender, "image").catch(() => 'https://telegra.ph/file/999b290ecb3e50107a9da.jpg'),
 }
      },
 text: q,
 replyMessage: {},
 },
   ],
 }
 const post = await axios.post("https://bot.lyo.su/quote/generate",
  jsonnya,{
headers: { "Content-Type": "application/json"},
  })
  let buff = await Buffer.from(post.data.result.image, "base64")
  if (buff == undefined) return reply('error')
  setya.sendImageAsSticker(from, buff, msg, opt)
break
        case 'attp':
        if (!isGroup) return replyDeface(mess.OnlyGrup)
            //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return replyDeface(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (!q) return replyDeface(`Gunakan dengan cara ${command} text\n\nContoh : ${command} AS Bot`)
            if (q.length > 75) return replyDeface(`Teksnya terlalu panjang`)
            //addCountCmd(`${prefix}attp`, sender, _cmd)
            //var data = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
            var data = await getBuffer(`https://api.lolhuman.xyz/api/attp?apikey=${apikey}&text=${encodeURIComponent(q)}`)
            var rand2 = 'temp/'+getRandom('.webp')
            fs.writeFileSync(`./${rand2}`, data)
            exec(`webpmux -set exif ./temp/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
                setya.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
                //limitAdd(sender, limit)
                fs.unlinkSync(`./${rand2}`)
            })
            break
        case 'emojimix':
        if (!isGroup) return replyDeface(mess.OnlyGrup)
            //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return replyDeface(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (args.length < 0) return replyDeface(`Gunakan dengan cara ${command} emoji1+emoji2\n\nContoh : ${command} 😅+😝`)
            var packname = `${ownerName}`
            var author = `${botName}`
            var emo1 = q.split("+")[0]
            var emo2 = q.split("+")[1]
            if (!isEmoji(emo1) || !isEmoji(emo2)) return replyDeface(`Itu bukan emoji!`)
            //addCountCmd(`${prefix}emojimix`, sender, _cmd)
            fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emo1)}_${encodeURIComponent(emo2)}`)
            .then(data => {
                sendStickerFromUrl(from, data.results[0]. url, packname, author, { quoted: msg })
                //limitAdd(sender, limit)
            }).catch((e) => replyDeface(mess.error.api))
            break

case 'sticker':
        case 's':
        if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isImage && !isQuotedImage && !isVideo && !isQuotedVideo) return reply(`Kirim media dengan caption ${prefix + command} atau tag media yang sudah dikirim`)
            var stream = await downloadContentFromMessage(msg.message[mediaType], mediaType.replace('Message', ''))
            var randsvid = 'temp/'+getRandom('.webp')
            let stickerStream = new PassThrough()
            if (isImage || isQuotedImage) {
                ffmpeg(stream)
                    .on('start', function (cmd) {
                        console.log(`Started : ${cmd}`)
                    })
                    .on('error', function (err) {
                        console.log(`Error : ${err}`)
                    })
                    .on('end', function () {
                        console.log('Finish')
                    })
                    .addOutputOptions([
                        `-vcodec`,
                        `libwebp`,
                        `-vf`,
                        `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
                    ])
                    .toFormat('webp')
                    .writeToStream(stickerStream)
                sock.sendMessage(from, { sticker: { stream: stickerStream } })
            } else if (isVideo || isQuotedVideo) {
                ffmpeg(stream)
                    .on('start', function (cmd) {
                        console.log(`Started : ${cmd}`)
                    })
                    .on('error', function (err) {
                        console.log(`Error : ${err}`)
                    })
                    .on('end', async () => {
                        sock.sendMessage(from, { sticker: fs.readFileSync(`./${randsvid}`) }).then(() => {
                            fs.unlinkSync(`./${randsvid}`)
                            console.log('Finish')
                        })
                    })
                    .addOutputOptions([
                        `-vcodec`,
                        `libwebp`,
                        `-vf`,
                        `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
                    ])
                    .toFormat('webp')
                    .save(`./${randsvid}`)
            }
            break

case 'join':
            if (!isOwner) return replyDeface(mess.OnlyOwner)
            if (args.length < 0) return replyDeface(`Kirim perintah ${command} _linkgrup_`)
            if (!isUrl(args[0])) return replyDeface(mess.error.Iv)
            var url = args[0]
            var url = url.split('https://chat.whatsapp.com/')[1]
            var data = await setya.groupAcceptInvite(url)
            reply(jsonformat(data))
            break

// Search Menu
case 'ffid':
if (!isGroup) return replyDeface(mess.OnlyGrup)
if (!args[0]) return reply(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return reply("Hanya angka")
let dede = await xzons.nickff(args.join(" "))
teks = `*🔎 FREE FIRE 🔍*\n\nID : ${q}\nNICK :  ${dede.username}`
reply(teks)
break

case 'mlid':
if (!isGroup) return replyDeface(mess.OnlyGrup)
var args1 = q.split("/")[0]
var args2 = q.split("/")[1]                
if (!q) return reply(`Example : \n${prefix + command} 617243212/8460`)
if (!Number(args1) && !Number(args2)) return reply("Hanya angka")
let deede = await xzons.nickml(args1, args2)
var teks = `*🔎 MOBILE LEGENDS 🔍*

ID : ${q}
Nick : ${deede.userName}`
reply(teks)
break

        case 'pubgid':
        if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!q) return replyDeface(`Gunakan dengan cara ${prefix + command} *id*\n\n_Contoh_\n\n${command} 5217933016`)
            axios.get(`https://api.lolhuman.xyz/api/pubg/${q}?apikey=${apikey}`)
            .then(({data}) => {
            let pubg = `*🔎 PUBG MOBILE 🔍*

ID : ${q}
Nick : ${data.result}`
            replyDeface(pubg)
            limitAdd(sender, limit)
            })
            .catch((err) => {
                console.log(color('[ ERROR ]', 'red'), err)
                replyDeface(mess.error.api)
                setya.sendMessage(ownerNumber, { text: `${command} error : ${err}` })
            })
            break
        case 'higgsid':
        if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!q) return replyDeface(`Gunakan dengan cara ${prefix + command} *id*\n\n_Contoh_\n\n${command} 291756557`)
            axios.get(`https://api.lolhuman.xyz/api/higghdomino/${q}?apikey=${apikey}`)
            .then(({data}) => {
            let domino = `*🔎 HIGGS DOMINO 🔍*

ID : ${q}
Nick : ${data.result}`
            replyDeface(domino)
            })
            .catch((err) => {
                console.log(color('[ ERROR ]', 'red'), err)
                replyDeface(mess.error.api)
                setya.sendMessage(ownerNumber, { text: `${command} error : ${err}` })
            })
            break

// case 'asupan':
// if (!isGroup) return replyDeface(mess.OnlyGrup)
                // sock.sendMessage(from, { video: { url: `https://restapi.frteam.xyz/asupan?apikey=${apikey}` } })
            // break

case 'wancak':
if (!isGroup) return replyDeface(mess.OnlyGrup)
            sock.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/onecak?apikey=${apikey}` } })
            break

case 'runtime':
            replyDeface(`Active During ${runtime(process.uptime())}`)
            break

case 'youtube': 
if (!isGroup) return replyDeface(mess.OnlyGrup)
if (!q) return reply("Link Youtube nya?")
var dowyt = argr[1]
replyDeface(mess.wait)
let res = await xzons.metaScrape(dowyt)
let resmedi = res.medias
let vidy = resmedi.find(v => v.quality.includes("360"))
let textyt = `*| YOUTUBE DOWNLOADER |*

▸ Title : ${res.title}
▸ Size : ${vidy.formattedSize}
▸ Quality : ${vidy.quality}

_Pilih Video atau Audio dan tunggu beberapa saat_`
var yutub = [{ quickReplyButton: { displayText: `🎧 Audio`, id: `${prefix}mp3 ${argr[1]}` } }, { quickReplyButton: { displayText: `🎥 Video`, id: `${prefix}mp4 ${argr[1]}` } }]
setya.sendMessage(from, { image: { url: res.thumbnail }, caption: textyt, footer: 'YOUTUBE DOWNLOAD', templateButtons: yutub }, { quoted: msg })
break

case 'mp4' :
if (!isGroup) return replyDeface(mess.OnlyGrup)
var linkytt = argr[1]
xzons.metaScrape(linkytt).then(async(res) => {
let resmedi = res.medias
let vidy = resmedi.find(v => v.quality.includes("360"))
try {
setya.sendMessage(from, {video:{url: vidy.url }, caption:"Succes"}, {quoted:m})
} catch {
reply("Linknya Error")
}
})
break

case 'mp3' :
if (!isGroup) return replyDeface(mess.OnlyGrup)
var linkyttt = argr[1]
let rees = await xzons.youtube(linkyttt)
try {
setya.sendMessage(from, {audio:{url: rees.mp3 }, mimetype: "audio/mp4", ptt: true })
} catch {
reply("Linknya Error")
}
break

case 'tiqdkteqqfqdok':
if (!isGroup) return replyDeface(mess.OnlyGrup)
if (!q) return reply(`Example :\n${prefix + command} <url>\nUses :\n${prefix + command} https://vt.tiktok.com/ZSdpFuJx1/?k=1`)
var taksok = argr[1]
replyDeface(mess.wait)
var datako = `_Pilih Video atau Audio dan tunggu beberapa saat_`
var tiktok = [{ quickReplyButton: { displayText: `🎧 Audio`, id: `${prefix}ttks ${taksok}` } }, { quickReplyButton: { displayText: `🎥 Video`, id: `${prefix}ttkom ${taksok}` } }]
setya.sendMessage(from, { image: { url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBGw6iR1583dmCejRIIQaTh9A1ZQ29XBztDw&usqp=CAU` }, caption: datako, footer: 'TIKTOK DOWNLOAD', templateButtons: tiktok }, { quoted: msg })
break

case 'tiktok':
if (!isGroup) return replyDeface(mess.OnlyGrup)
var taksook = argr[1]
axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=${taksook}`).then(({ data }) => {
setya.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4' })
})
break

case 'tiktokmp3':
if (!isGroup) return replyDeface(mess.OnlyGrup)
var taksokk = argr[1]
setya.sendMessage(from, { audio: { url: `https://api.lolhuman.xyz/api/tiktokmusic?apikey=${apikey}&url=${taksokk}` }, mimetype: 'audio/mp4', ptt: true })
break

case 'play':
if (!isGroup) return replyDeface(mess.OnlyGrup)
if (!q) return reply(`Kirim perintah ${command} query\nContoh : ${command} semongko`)
replyDeface(mess.wait)
await sendPlay(from, q)
break

case 'kios': case 'kiosff':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!q) return reply('Pemakaian\n.kios ratenya\n\nContoh\n.kios 265')
let epecp = `*FFID RATE ${args[0]} KIOS*

5 💎 = Rp${rpset(ff5)}
10 💎 = Rp${rpset(ff10)}
15 💎 = Rp${rpset(ff15)}
20 💎 = Rp${rpset(ff20)}
25 💎 = Rp${rpset(ff25)}
30 💎 = Rp${rpset(ff30)}
50 💎 = Rp${rpset(ff50)}
55 💎 = Rp${rpset(ff55)}
60 💎 = Rp${rpset(ff60)}
70 💎 = Rp${rpset(ff70)}
75 💎 = Rp${rpset(ff75)}
80 💎 = Rp${rpset(ff80)}
90 💎 = Rp${rpset(ff90)}
100 💎 = Rp${rpset(ff100)}
120 💎 = Rp${rpset(ff120)}
130 💎 = Rp${rpset(ff130)}
140 💎 = Rp${rpset(ff140)}
145 💎 = Rp${rpset(ff145)}
150 💎 = Rp${rpset(ff150)}
160 💎 = Rp${rpset(ff160)}
190 💎 = Rp${rpset(ff190)}
200 💎 = Rp${rpset(ff200)}
210 💎 = Rp${rpset(ff210)}
250 💎 = Rp${rpset(ff250)}
280 💎 = Rp${rpset(ff280)}
300 💎 = Rp${rpset(ff300)}
355 💎 = Rp${rpset(ff355)}
360 💎 = Rp${rpset(ff360)}
375 💎 = Rp${rpset(ff375)}
400 💎 = Rp${rpset(ff400)}
425 💎 = Rp${rpset(ff425)}
475 💎 = Rp${rpset(ff475)}
500 💎 = Rp${rpset(ff500)}
510 💎 = Rp${rpset(ff510)}
515 💎 = Rp${rpset(ff515)}
520 💎 = Rp${rpset(ff520)}
545 💎 = Rp${rpset(ff545)}
565 💎 = Rp${rpset(ff565)}
600 💎 = Rp${rpset(ff600)}
635 💎 = Rp${rpset(ff635)}
645 💎 = Rp${rpset(ff645)}
655 💎 = Rp${rpset(ff655)}
720 💎 = Rp${rpset(ff720)}
725 💎 = Rp${rpset(ff725)}
740 💎 = Rp${rpset(ff740)}
770 💎 = Rp${rpset(ff770)}
790 💎 = Rp${rpset(ff790)}
800 💎 = Rp${rpset(ff800)}
860 💎 = Rp${rpset(ff860)}
930 💎 = Rp${rpset(ff930)}
1000 💎 = Rp${rpset(ff1000)}
1050 💎 = Rp${rpset(ff1050)}
1060 💎 = Rp${rpset(ff1060)}
1075 💎 = Rp${rpset(ff1075)}
1080 💎 = Rp${rpset(ff1080)}
1200 💎 = Rp${rpset(ff1200)}
1215 💎 = Rp${rpset(ff1215)}
1300 💎 = Rp${rpset(ff1300)}
1440 💎 = Rp${rpset(ff1440)}
1450 💎 = Rp${rpset(ff1450)}
1490 💎 = Rp${rpset(ff1490)}
1510 💎 = Rp${rpset(ff1510)}
1580 💎 = Rp${rpset(ff1580)}
1795 💎 = Rp ${rpset(ff1795)}
1800 💎 = Rp ${rpset(ff1800)}
2000 💎 = Rp ${rpset(ff2000)}
2160 💎 = Rp ${rpset(ff2160)}
2180 💎 = Rp${rpset(ff2180)}
2200 💎 = Rp ${rpset(ff2200)}
2210 💎 = Rp${rpset(ff2210)}
2280 💎 = Rp${rpset(ff2280)}
2355 💎 = Rp ${rpset(ff2355)}
2720 💎 = Rp${rpset(ff2720)}
3640 💎 = Rp${rpset(ff3640)}
3800 💎 = Rp${rpset(ff3800)}
4000 💎 = Rp ${rpset(ff4000)}
4340 💎 = Rp${rpset(ff4340)}
7290 💎 = Rp ${rpset(ff7290)}

M.Mingguan 💎 = Rp ${rpset(ffmm)}
M.Bulanan 💎 = Rp ${rpset(ffmb)}
Level Up Pass 💎 = Rp ${rpset(fflup)}
`
setya.sendMessage(from, { text: epecp }, {quoted: msg})
break
case 'soc':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!q) return reply('Pemakaian\n.soc ratenya\n\nContoh\n.soc 300')
let mlsoc = `*MLID RATE ${args[0]} SOC*

86 💎 = Rp ${rpset(soc86)}
172 💎 = Rp ${rpset(soc172)} (misi event 100)
257 💎 = Rp ${rpset(soc257)}
344 💎 = Rp ${rpset(soc344)} (misi event 250)
429 💎 = Rp ${rpset(soc429)}
514 💎 = Rp ${rpset(soc514)}
600 💎 = Rp ${rpset(soc600)}
706 💎 = Rp ${rpset(soc706)}
792 💎 = Rp ${rpset(soc792)}
878 💎 = Rp ${rpset(soc878)}
963 💎 = Rp ${rpset(soc963)}
1220 💎 = Rp ${rpset(soc1220)}
1412 💎 = Rp ${rpset(soc1412)}
2195 💎 = Rp ${rpset(soc2195)}
3688 💎 = Rp ${rpset(soc3688)}
4394 💎 = Rp ${rpset(soc4394)}
5532 💎 = Rp ${rpset(soc5532)}
6238 💎 = Rp ${rpset(soc6238)}
7727 💎 = Rp ${rpset(soc7727)}
9288 💎 = Rp ${rpset(soc9288)}

Weekly Pass 💎 = Rp ${rpset(socwpm)}
Twilight Smile 💎 = Rp ${rpset(soctwl)}
`
setya.sendMessage(from, { text: mlsoc }, {quoted: msg})
break
case 'unibrl':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!q) return reply('Pemakaian\n.unibrl ratenya\n\nContoh\n.unibrl 2800')
let runibrl = `*MLID RATE ${args[0]} UNIBRL*

86 💎 = Rp ${rpset(mlbrl86)}
172 💎 = Rp ${rpset(mlbrl172)} (misi event 100)
257 💎 = Rp ${rpset(mlbrl257)}
344 💎 = Rp ${rpset(mlbrl344)} (misi event 250)
429 💎 = Rp ${rpset(mlbrl429)}
514 💎 = Rp ${rpset(mlbrl514)}
600 💎 = Rp ${rpset(mlbrl600)}
706 💎 = Rp ${rpset(mlbrl706)}
792 💎 = Rp ${rpset(mlbrl792)}
878 💎 = Rp ${rpset(mlbrl878)}
963 💎 = Rp ${rpset(mlbrl963)}
1220 💎 = Rp ${rpset(mlbrl1220)}
1412 💎 = Rp ${rpset(mlbrl1412)}
2195 💎 = Rp ${rpset(mlbrl2195)}
2901 💎 = Rp ${rpset(mlbrl2901)}
3688 💎 = Rp ${rpset(mlbrl3688)}
5532 💎 = Rp ${rpset(mlbrl5532)}
9288 💎 = Rp ${rpset(mlbrl9288)}

Starlight Member 💎 = Rp ${rpset(mlbrlsmp)}
Starlight Member Plus 💎 = Rp ${rpset(mlbrlsmb)}
Twilight Pass 💎 = Rp ${rpset(mlbrltwp)}
`
setya.sendMessage(from, { text: runibrl }, {quoted: msg})
break
case 'unimy':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!q) return reply('Pemakaian\n.unimy ratenya\n\nContoh\n.unimy 3000')
let mlmy = `*MLID RATE ${args[0]} UNIMY*

14 💎 = Rp${rpset(mlmy14)}
28 💎 = Rp${rpset(mlmy28)}
42 💎 = Rp${rpset(mlmy42)}
56 💎 = Rp${rpset(mlmy56)}
70 💎 = Rp${rpset(mlmy70)}
112 💎 = Rp${rpset(mlmy112)}
140 💎 = Rp${rpset(mlmy140)} (misi event 100)
284 💎 = Rp${rpset(mlmy284)} (misi event 250)
355 💎 = Rp${rpset(mlmy355)}
429 💎 = Rp${rpset(mlmy429)}
716 💎 = Rp${rpset(mlmy716)}
1446 💎 = Rp${rpset(mlmy1446)}

Starlight Member 💎 = Rp${rpset(mlmysmb)}
Starlight Member Plus 💎 = Rp${rpset(mlmysmp)}
Twilight Pass 💎 = Rp${rpset(mlmytwl)}
`
setya.sendMessage(from, { text: mlmy }, {quoted: msg})
break
case 'uniph':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!q) return reply('Pemakaian\n.uniph ratenya\n\nContoh\n.uniph 220')
let mlph = `*MLID RATE ${args[0]} UNIPH*

10 💎 = Rp${rpset(mlph10)}
19 💎 = Rp${rpset(mlph19)}
47 💎 = Rp${rpset(mlph47)}
93 💎 = Rp${rpset(mlph93)}
184 💎 = Rp${rpset(mlph184)}
277 💎 = Rp${rpset(mlph277)}
570 💎 = Rp${rpset(mlph570)}
954 💎 = Rp${rpset(mlph954)}
1968 💎 = Rp${rpset(mlph1968)}
4955 💎 = Rp${rpset(mlph4955)}

Weekly Pass 💎 = Rp${rpset(mlphwkyp)}
Twilight Pass 💎 = Rp${rpset(mlphtpm)}
`
setya.sendMessage(from, { text: mlph }, {quoted: msg})
break
case 'kiosudn': case 'undawn':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!q) return reply('Pemakaian\n.kiosudn ratenya\n\nContoh\n.kiosudn 260')
let undawnid = `*RC R${args[0]} UNDAWN*

250 RC = Rp ${rpset(u250rc)}
450 RC = Rp ${rpset(u450rc)}
920 RC = Rp ${rpset(u920rc)}
1.850 RC = Rp ${rpset(u1850rc)}
2.800 RC = Rp ${rpset(u2800rc)}
4.750 RC = Rp ${rpset(u4750rc)}
9.600 RC = Rp ${rpset(u9600rc)}
33.000 RC = Rp ${rpset(u33000rc)}
66.500 RC = Rp ${rpset(u66500rc)}

Kartu Bulanan   💎 = Rp ${rpset(kb)}
Glory Pass Premium  💎 = Rp ${rpset(kgpp)}
Kartu Mingguan   💎 = Rp ${rpset(km)}
Growth Fund (REBATE)   💎 = Rp ${rpset(gfr)}
`
setya.sendMessage(from, { text: undawnid }, {quoted: msg})
break
case 'unimygh': case 'genshin':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!q) return reply('Pemakaian\n.unimygh ratenya\n\nContoh\n.unimygh 3000')
let unimygens = `*UNIMY R${args[0]} GENSHIN IMPACT*

60 🔮 = Rp ${rpset(gn60)}
330 🔮 = Rp ${rpset(gn330)}
1090 🔮 = Rp ${rpset(gn1090)}
2240 🔮 = Rp ${rpset(gn2240)}
3880 🔮 = Rp ${rpset(gn3880)}

Blessing of the Welkin Moon 🔮 = Rp ${rpset(gnbwm)}
`
setya.sendMessage(from, { text: unimygens }, {quoted: msg})
break
case 'kioscodm': case 'codm':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!q) return reply('Pemakaian\n.kioscodm ratenya\n\nContoh\n.kioscodm 260')

let codmm = `*CODM R${args[0]} KIOS*

63 CP = Rp ${rpset(cod63)}
128 CP = Rp ${rpset(cod128)}
321 CP = Rp ${rpset(cod321)}
645 CP = Rp ${rpset(cod645)}
800 CP = Rp ${rpset(cod800)}
1373 CP = Rp ${rpset(cod1373)}
2060 CP = Rp ${rpset(cod2060)}
3564 CP = Rp ${rpset(cod3564)}
5619 CP = Rp ${rpset(cod5619)}
7656 CP = Rp ${rpset(cod7656)}
`
setya.sendMessage(from, { text: codmm }, {quoted: msg})
break
case 'kiosaov': case 'aov':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!q) return reply('Pemakaian\n.kiosaov ratenya\n\nContoh\n.kiosaov 260')

let aovv = `*AOV R${args[0]} KIOS*

40 VOC = Rp ${rpset(aov40)}
90 VOC = Rp ${rpset(aov90)}
230 VOC = Rp ${rpset(aov230)}
470 VOC = Rp ${rpset(aov470)}
950 VOC = Rp ${rpset(aov950)}
1430 VOC = Rp ${rpset(aov1430)}
2390 VOC = Rp ${rpset(aov2390)}
4800 VOC = Rp ${rpset(aov4800)}
`
setya.sendMessage(from, { text: aovv }, {quoted: msg})
break
case 'gpvalorant': case 'valorant':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!q) return reply('Pemakaian\n.gpvalorant ratenya\n\nContoh\n.gpvalorant 3000')

let gpvv = `*GP R${args[0]} VALORANT*

300 GP = Rp ${rpset(gpv300)}
625 GP = Rp ${rpset(gpv625)}
1125 GP = Rp ${rpset(gpv1125)}
1650 GP = Rp ${rpset(gpv1650)}
3400 GP = Rp ${rpset(gpv3400)}
7000 GP = Rp ${rpset(gpv7000)}
`
setya.sendMessage(from, { text: gpvv }, {quoted: msg})
break
case 'rdpubg': case 'rzpubg':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!q) return reply('Pemakaian\n.rdpubg ratenya\n\nContoh\n.rdpubg 160')

let rdpubg = `*› UC PUBG R${args[0]} ‹*
*› MIDASBUY RAZER GOLD PIN ‹*

11 💸 = Rp ${rpset(rd11)}
22 💸 = Rp ${rpset(rd22)}
45 💸 = Rp ${rpset(rd45)}
50+2 💸= Rp ${rpset(rd50)}
67+3 💸 = Rp ${rpset(rd67)}
90+5 💸 = Rp ${rpset(rd90)}
100+5 💸 = Rp ${rpset(rd100)}
112+6 💸 = Rp ${rpset(rd112)}
250+13 💸 = Rp ${rpset(rd250)}
450+23 💸 = Rp ${rpset(rd450)}
500+30 💸 = Rp ${rpset(rd500)}
900+90 💸 = Rp ${rpset(rd900)}
1000+100 💸 = Rp ${rpset(rd1000)}
1575+237 💸 = Rp ${rpset(rd1575)}
1800+270 💸 = Rp ${rpset(rd1800)}
2500+385 💸 = Rp ${rpset(rd2500)}
3600+900 💸 = Rp ${rpset(rd3600)}
5000+1000 💸 = Rp ${rpset(rd5000)}
`
setya.sendMessage(from, { text: rdpubg }, {quoted: msg})
break
case 'hsr': case 'honkai':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!q) return reply('Pemakaian\n.razer ratenya\n\nContoh\n.razer 2600')

let gpzvv = `*› HONKAI: STAR RAIL R${args[0]} ‹*

60 Oneiric Shard = Rp ${rpset(rz60)}
300+30 Oneiric Shard = Rp ${rpset(rz300)}
980+110 Oneiric Shard = Rp ${rpset(rz980)}
1980+260 Oneiric Shard = Rp ${rpset(rz1980)}
3280+600 Oneiric Shard = Rp ${rpset(rz3280)}
6480+1600 Oneiric Shard = Rp ${rpset(rz6480)}

Express Supply Pass › Rp ${rpset(rzesp)}
`
setya.sendMessage(from, { text: gpzvv }, {quoted: msg})
break
  case 'lolrate': case 'lol': case 'ceklol':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!q) return reply('Pemakaian\n.lolrate ratenya\n\nContoh\n.lolrate 260')
let lolpp = `*R${args[0]} LEAGUE OF LEGENDS*

300 WC = Rp ${rpset(lol300)}
625 WC = Rp ${rpset(lol625)}
1125 WC = Rp ${rpset(lol1125)}
1650 WC = Rp ${rpset(lol1650)}
3400 WC = Rp ${rpset(lol3400)}
7000 WC = Rp ${rpset(lol7000)}
`
setya.sendMessage(from, { text: lolpp }, {quoted: msg})
break
case 'dgrate': case 'cekdg': case 'dg':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!q) return reply('Pemakaian\n.dgrate ratenya\n\nContoh\n.dgrate 260')
let dgress = `*R${args[0]} DRAGONNEST2-GLOBAL*

63 💎 = Rp ${rpset(dg63)}
315 💎 = Rp ${rpset(dg315)}
714 💎 = Rp ${rpset(dg714)}
1344 💎 = Rp ${rpset(dg1344)}
3444 💎 = Rp ${rpset(dg3444)}
6804 💎 = Rp ${rpset(dg6804)}
`
setya.sendMessage(from, { text: dgress }, {quoted: msg})
break
case 'gpsupersus': case 'supersus': case 'sus':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!q) return reply('Pemakaian\n.gpsupersus ratenya\n\nContoh\n.gpsupersus 3000')
let suss = `*SUPER SUS R${args[0]} GAMEPOINT*

100 GSTAR = Rp ${rpset(sus100)}
310 GSTAR = Rp ${rpset(sus310)}
520 GSTAR = Rp ${rpset(sus520)}
1060 GSTAR = Rp ${rpset(sus1060)}
2180 GSTAR = Rp ${rpset(sus2180)}
5600 GSTAR = Rp ${rpset(sus5600)}
`
setya.sendMessage(from, { text: suss }, {quoted: msg})
break
        default:
if ((budy) && ["p", "Proses", "P"].includes(budy) && !isCmd) {
if (!rm.quoted) return
if (!isGroup) return
if (!isOwner && !isGroupAdmins) return
let proses = `*STATUS PESANAN KAMU :*
    
STATUS      : PESANAN PENDING
PESANAN  : ${rm.quoted.text}
WAKTU       : ${jam}
TANGGAL  : ${tanggal}

*@${rm.quoted.sender.split("@")[0]} PESANAN KAMU SEDANG DI PROSES`
const getTextP = getTextSetProses(from, set_proses);
if (getTextP !== undefined) {
mentions(getTextP.replace('@pesanan', rm.quoted.text).replace('user', rm.quoted.sender.split("@")[0]).replace('@jam', jam).replace('@tanggal', tanggal), [rm.quoted.sender], true);
} else {
mentions(proses, [rm.quoted.sender], true)
}
}

if ((budy) && ["d", "Done", "D"].includes(budy) && !isCmd) {
if (!rm.quoted) return
if (!isGroup) return
if (!isOwner && !isGroupAdmins) return
let sukses = `*STATUS PESANAN KAMU :*
    
STATUS      : PESANAN SUKSES
PESANAN  : ${rm.quoted.text}
WAKTU       : ${jam}
TANGGAL  : ${tanggal}

*@${rm.quoted.sender.split("@")[0]} TERIMA KASIH SUDAH ORDER DI KAMI*`
const getTextD = getTextSetDone(from, set_done);
if (getTextD !== undefined) {
mentions(getTextD.replace('@pesanan', rm.quoted.text).replace('user', rm.quoted.sender.split("@")[0]).replace('@jam', jam).replace('@tanggal', tanggal), [rm.quoted.sender], true);
} else {
mentions(sukses, [rm.quoted.sender], true)
    reply
    sock.sendMessage(from, {audio: fs.readFileSync('./ashosting/done.mp3'), ptt: true, 
 mimetype: 'audio/mp4'}, { quoted: msg })
}
}
if ((budy) && ["bot", "Bot", "Bit"].includes(budy) && !isCmd) {
if (!isGroup) return 
const getTextBot = getTextSetBot(from, set_bot);
if (getTextBot !== undefined) {
setya.sendMessage(from, { text: getTextBot })
} else {
setya.sendMessage(from, { text: `*Aku udah On Dongg😉*` })
     reply
    sock.sendMessage(from, {audio: fs.readFileSync('./temp/zeta.mp3'), ptt: true, 
 mimetype: 'audio/mp4'}, { quoted: msg })
 }
}     
}
}