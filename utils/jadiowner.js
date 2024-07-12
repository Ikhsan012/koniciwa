const fs = require('fs')
const toMs = require('ms')
const { MessageType } = require("@adiwajshing/baileys");
const { sleep } = require('./myfunc')


/**
 * Add Sewa group.
 * @param {String} groupId 
 * @param {String} expired 
 * @param {Object} _dir 
 */
const addjadibot = (groupid, expired, _dir) => {
    const obj = { 
    id: groupid, 
    expired: Date.now() + toMs(expired), status: true 
    }
    _dir.push(obj)
    fs.writeFileSync('./database/jadiowner.json', JSON.stringify(_dir))
}

/**
 * Get sewa group position.
 * @param {String} groupId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getSewaPosition2 = (groupid, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === groupid) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

/**
 * Get sewa group expire.
 * @param {String} groupId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getSewaExpired2 = (groupid, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === groupid) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].expired
    }
}

/**
 * Check group is sewa.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Boolean}
 */
const checkSewaGroup2 = (groupid, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === groupid) {
            status = true
        }
    })
    return status
}

/**
 * Constantly checking sewa.
 * @param {object} WAConnection
 * @param {Object} _dir 
 */
const expiredCheck2 = (setya, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            //console.log(`Sewa expired: ${_dir[position].id}`)        	
            if (_dir[position].status === true){
                linkgcc = setya.groupInviteCode(from)
                .then(() => {       	
                    setya.sendMessage('6285892935752@s.whatsapp.net', `Jadiowner Expired : Jadi Owner Abis`, MessageType.text)                
                    .then(() => {
                        _dir.splice(position, 1)
                        fs.writeFileSync('./database/jadiowner.json', JSON.stringify(_dir))
                    })
                })
            }
        }
    }, 1)
}

/**
 * Get all premium user ID.
 * @param {Object} _dir 
 * @returns {String[]}
 */
const getAllPremiumUser2 = (_dir) => {
    const array = []
    Object.keys(_dir).forEach((i) => {
        array.push(_dir[i].id)
    })
    return array
}

module.exports = {
    addjadibot,
    getSewaExpired2,
    getSewaPosition2,
    expiredCheck2,
    checkSewaGroup2,
    getAllPremiumUser2
}


