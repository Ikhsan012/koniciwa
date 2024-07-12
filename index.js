(async() => {
const { default: WASocket, useMultiFileAuthState, fetchLatestBaileysVersion, DisconnectReason, makeInMemoryStore, jidDecode} = require('@adiwajshing/baileys')
const Pino = require('pino')
const logg = require('pino')
const chalk = require('chalk')
const { sessionName } = require('./config.json')
const { Boom } = require('@hapi/boom')
const { existsSync } = require('fs')
const cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
const fs = require('fs')
const moment = require('moment')
const path = require('path')
const { remini } = require('./utils/remini')
const { getBuffer, serialize } = require("./utils/myfunc");
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./utils/exif2')
const messageHandler = require('./handler/app')
const { state, saveCreds } = await useMultiFileAuthState(path.resolve('sessions'), Pino({ level: 'silent' }))
let welcome = JSON.parse(fs.readFileSync('./database/welcome.json'));
let left = JSON.parse(fs.readFileSync('./database/left.json'));
let set_welcome_db = JSON.parse(fs.readFileSync('./database/set_welcome.json'));
let set_left_db = JSON.parse(fs.readFileSync('./database/set_left.json'));
const { isSetWelcome, getTextSetWelcome } = require('./utils/setwelcome');
const { isSetLeft, getTextSetLeft } = require('./utils/setleft');
const time = moment(new Date()).format('HH:mm:ss DD/MM/YYYY')

const store = makeInMemoryStore({ logger: logg().child({ level: 'fatal', stream: 'store' }) })

const konekinWhatsApp = async () => {
    let { version, isLatest } = await fetchLatestBaileysVersion()

    console.log(`Using: ${version}, newer: ${isLatest}`)
    const getVersionWaweb = () => {
        let version
        try {
        let a = fetchJson('https://web.whatsapp.com/check-update?version=1&platform=web')
        version = [a.currentVersion.replace(/[.]/g, ', ')]
        } catch {
        version = [2, 2413, 1]
        }
        return version
}

    const sock = WASocket({
        logger: Pino({ level: 'silent' }),
        printQRInTerminal: true,
        syncFullHistory: true,
        browser: ['AndriStore','chrome','4.4.0'],
        auth: state,
        version: getVersionWaweb() || [2, 2413, 1]
    })
    store.bind(sock.ev)    

    sock.ev.on('chats.set', () => {
        console.log('got chats', store.chats.all().length)
    })

    sock.ev.on('contacts.set', () => {
        console.log('got contacts', Object.values(store.contacts).length)
    })
    
    function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
    
    function nocache(module, cb = () => { }) {
      console.log(`Module ${module} Berjalan`)
        fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
      })
}

    require('./utils/help')
    require('./utils/myfunc')
    require('./handler/app')
    require('./config.json')
    nocache('./utils/help', module => console.log(chalk.greenBright('[ sock ID ]  ') + time + chalk.cyanBright(` "${module}" Updated!`)))
    nocache('./utils/myfunc', module => console.log(chalk.greenBright('[ sock ID ]  ') + time + chalk.cyanBright(` "${module}" Updated!`)))
    nocache('./handler/app', module => console.log(chalk.greenBright('[ sock ID ]  ') + time + chalk.cyanBright(` "${module}" Updated!`)))

    sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update
        if (connection === 'close') {
        lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut 
        ? konekinWhatsApp() : console.log('Bot Terputus...')
        }
        console.log('Bot Terhubung...', update)
        })
        sock.ev.on ('creds.update', saveCreds)

    // messages.upsert
    sock.modelmenu = "image"
    sock.ev.on('messages.upsert', ({ messages, type }) => {
        if (type !== 'notify') return
        messageHandler(sock, messages[0], welcome, left, set_welcome_db, set_left_db)
    })

sock.ev.on('group-participants.update', async (data) => {
        const isWelcome = welcome.includes(data.id) ? true : false
        const isLeft = left.includes(data.id) ? true : false
        const metadata = await sock.groupMetadata(data.id)
        const groupName = metadata.subject
        const groupDesc = metadata.desc
        const groupMem = metadata.participants.length
        try {
            for (let i of data.participants) {
                if (data.action == "add" && isWelcome) {
                    try {
                        var pp_user = await sock.profilePictureUrl(i, 'image')
                    } catch {
                        var pp_user = 'https://telegra.ph/file/fef14821155923b7a1e14.jpg'
                    }
                    if (isSetWelcome(data.id, set_welcome_db)) {
                        var get_teks_welcome = getTextSetWelcome(data.id, set_welcome_db)
                        var replace_pesan = (get_teks_welcome.replace(/@nama/gi, `@${i.split('@')[0]}`))
                        var full_pesan = (replace_pesan.replace(/@grup/gi, groupName).replace(/@desc/gi, groupDesc))
                        sock.sendMessage(data.id, { caption: `${full_pesan}`, image: await getBuffer(pp_user), mentions: [i] })
                    } else {
                        sock.sendMessage(data.id, { caption: `Welcome @${i.split("@")[0]} in the group ${groupName}`, image: await getBuffer(pp_user), mentions: [i] })
                    }
                } else if (data.action == "remove" && isLeft) {
                    try {
                        var pp_user = await sock.profilePictureUrl(i, 'image')
                    } catch {
                        var pp_user = 'https://telegra.ph/file/35a42736e71df88e6e3e4.jpg'
                    }
                    if (isSetLeft(data.id, set_left_db)) {
                        var get_teks_left = getTextSetLeft(data.id, set_left_db)
                        var replace_pesan = (get_teks_left.replace(/@nama/gi, `@${i.split('@')[0]}`))
                        var full_pesan = (replace_pesan.replace(/@grup/gi, groupName).replace(/@desc/gi, groupDesc))
                        sock.sendMessage(data.id, { caption: `${full_pesan}`, image: await getBuffer(pp_user), mentions: [i] })
                    } else {
                        sock.sendMessage(data.id, { caption: `Bye @${i.split("@")[0]}`, image: await getBuffer(pp_user), mentions: [i] })
                    }
                }
            }
        } catch (e) {
            console.log(e)
        }
    })
    
    sock.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }        
        await sock.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
    
    sock.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
}
konekinWhatsApp()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
})()