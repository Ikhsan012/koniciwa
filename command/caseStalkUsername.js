const fs = require('fs')
const chalk = require('chalk')
const {stalkVA, stalkpln} = require('../controller/ewaletController')
const stalkerController = require('../controller/stalkerController')
async function stalkUsername(command, reply, m, text, level){
    
    switch(command){
      case 'cekpln': {
        const aksi = 'pln';
        stalkpln(text, reply, m, aksi);
      }
      break;
      case 'cekgopay': {
        const aksi = 'gopay';
        stalkVA(text, reply, m, aksi);
      }
      break;
      case 'cekdana': {
        const aksi = 'dana';
        stalkVA(text, reply, m, aksi);
      }
      break;
      case 'cekovo': {
        const aksi = 'ovo';
        stalkVA(text, reply, m, aksi);
      }
      break;
      case 'cekshope': {
        const aksi = 'shopee';
        stalkVA(text, reply, m, aksi);
      }
      break;
case 'mlid2': {
  const mooCountry = require("../lib/region");
  const ea = text.split(' ')
  if (!text) return reply('user id nya mana?')
    stalkerController('game', 'mlreg', ea[0], ea[1])
  .then(data => {
    const decodedNickname = decodeURIComponent(data.nickname).replace(/\+/g, ' ');

    const count = mooCountry(data.userid)
   let result = '' 

   if (decodedNickname === null || count === null){
    result = `userId username tidak di temukan`
  } else {
    result =`「 *ACCOUNT-CHECKER* 」
🎮 *Kode Game:* Mobile Legends
🔎 *Nickname:* ${decodedNickname}
⭔ *Role Country:* ${count}
⭔ *ID ML:* ${ea[0]} (${ea[1]})`;
}

reply(result)
    console.log(data);
  }) 
  .catch(error => {
    reply('User Gagal Di temukan')
    console.error(error);
  });
}
break

        case 'stalkml': {
          const ea = text.split(' ')
          if (!text) return reply('user id nya mana?')
            stalkerController('game', 'mobile-legends', ea[0], ea[1])
          .then(data => {
            const username = data.nickname
            const userid = data.userid
           let result = '' 

           if (username === null || userid === null){
            result = `userId username tidak di temukan`
          } else {
            result = `_*Mobile Legends Check*_
            
*Username:* ${username}
*UserId:* ${userid}(${ea[1]})`
}

reply(result)
            console.log(data);
          }) 
          .catch(error => {
            reply('User Gagal Di temukan')
            console.error(error);
          });
        }
        break
        case 'stalkff': {
          const ea = text.split(' ')
          if (!text) return reply('user id nya mana?')
            stalkerController('game', 'free-fire', ea[0], ea[1])
          .then(data => {
            const username = data.nickname
            const userid = data.userid
           let result = '' 

           if (username === null || userid === null){
            result = `userId username tidak di temukan`
          } else {
            result = `_*Free Fire Check*_
            
*Username:* ${username}
*UserId:* ${userid}`
}

reply(result)
            console.log(data);
          }) 
          .catch(error => {
            reply('User Gagal Di temukan')
            console.error(error);
          });
        }
        break
        case 'stalkaov': {
          const ea = text.split(' ')
          if (!text) return reply('user id nya mana?')
            stalkerController('game', 'aov', ea[0], ea[1])
          .then(data => {
            const username = data.nickname
            const userid = data.userid
           let result = '' 

           if (username === null || userid === null){
            result = `userId username tidak di temukan`
          } else {
            result = `_*AOV Check*_
            
*Username:* ${username}
*UserId:* ${userid}`
}

reply(result)
            console.log(data);
          }) 
          .catch(error => {
            reply('User Gagal Di temukan')
            console.error(error);
          });
        }
        break
        case 'stalkau2m': {
          const ea = text.split(' ')
          if (!text) return reply('user id nya mana?')
            stalkerController('game', 'au2m', ea[0], ea[1])
          .then(data => {
            const username = data.nickname
            const userid = data.userid
           let result = '' 

           if (username === null || userid === null){
            result = `userId username tidak di temukan`
          } else {
            result = `_*AU2 Mobile Check*_
            
*Username:* ${username}
*UserId:* ${userid}`
}

reply(result)
            console.log(data);
          }) 
          .catch(error => {
            reply('User Gagal Di temukan')
            console.error(error);
          });
        }
        break
        case 'stalkbf': {
          const ea = text.split(' ')
          if (!text) return reply('user id nya mana?')
            stalkerController('game', 'bearfish', ea[0], ea[1])
          .then(data => {
            const username = data.nickname
            const userid = data.userid
           let result = '' 

           if (username === null || userid === null){
            result = `userId username tidak di temukan`
          } else {
            result = `_*Bearfish Check*_
            
*Username:* ${username}
*UserId:* ${userid}`
}

reply(result)
            console.log(data);
          }) 
          .catch(error => {
            reply('User Gagal Di temukan')
            console.error(error);
          });
        }
        break
        case 'stalkbgmi': {
          const ea = text.split(' ')
          if (!text) return reply('user id nya mana?')
            stalkerController('game', 'bgmi', ea[0], ea[1])
          .then(data => {
            const username = data.nickname
            const userid = data.userid
           let result = '' 

           if (username === null || userid === null){
            result = `userId username tidak di temukan`
          } else {
            result = `_*BGMI Check*_
            
*Username:* ${username}
*UserId:* ${userid}`
}

reply(result)
            console.log(data);
          }) 
          .catch(error => {
            reply('User Gagal Di temukan')
            console.error(error);
          });
        }
        break
        case 'stalkbd': {
          const ea = text.split(' ')
          if (!text) return reply('user id nya mana?')
            stalkerController('game', 'boss-domino', ea[0], ea[1])
          .then(data => {
            const username = data.nickname
            const userid = data.userid
           let result = '' 

           if (username === null || userid === null){
            result = `userId username tidak di temukan`
          } else {
            result = `_*Boss Domino Check*_
            
*Username:* ${username}
*UserId:* ${userid}`
}

reply(result)
            console.log(data);
          }) 
          .catch(error => {
            reply('User Gagal Di temukan')
            console.error(error);
          });
        }
        break
        case 'stalkbcl': {
          const ea = text.split(' ')
          if (!text) return reply('user id nya mana?')
            stalkerController('game', 'blackcloverm', ea[0], ea[1])
          .then(data => {
            const username = data.nickname
            const userid = data.userid
           let result = '' 

           if (username === null || userid === null){
            result = `userId username tidak di temukan`
          } else {
            result = `_*Black Cloverm Check*_
            
*Username:* ${username}
*UserId:* ${userid}`
}

reply(result)
            console.log(data);
          }) 
          .catch(error => {
            reply('User Gagal Di temukan')
            console.error(error);
          });
        }
        break
        case 'stalkcod': {
          const ea = text.split(' ')
          if (!text) return reply('user id nya mana?')
            stalkerController('game', 'callofduty', ea[0], ea[1])
          .then(data => {
            const username = data.nickname
            const userid = data.userid
           let result = '' 

           if (username === null || userid === null){
            result = `userId username tidak di temukan`
          } else {
            result = `_*Call of Duty Check*_
            
*Username:* ${username}
*UserId:* ${userid}`
}

reply(result)
            console.log(data);
          }) 
          .catch(error => {
            reply('User Gagal Di temukan')
            console.error(error);
          });
        }
        break
        case 'stalkdr': {
          const ea = text.split(' ')
          if (!text) return reply('user id nya mana?')
            stalkerController('game', 'dragon-raja', ea[0], ea[1])
          .then(data => {
            const username = data.nickname
            const userid = data.userid
           let result = '' 

           if (username === null || userid === null){
            result = `userId username tidak di temukan`
          } else {
            result = `_*Dragon Raja Check*_
            
*Username:* ${username}
*UserId:* ${userid}`
}

reply(result)
            console.log(data);
          }) 
          .catch(error => {
            reply('User Gagal Di temukan')
            console.error(error);
          });
        }
        break
        case 'stalkgu': {
          const ea = text.split(' ')
          if (!text) return reply('user id nya mana?')
            stalkerController('game', 'garena-undawn', ea[0], ea[1])
          .then(data => {
            const username = data.nickname
            const userid = data.userid
           let result = '' 

           if (username === null || userid === null){
            result = `userId username tidak di temukan`
          } else {
            result = `_*Garena Undawn Check*_
            
*Username:* ${username}
*UserId:* ${userid}`
}

reply(result)
            console.log(data);
          }) 
          .catch(error => {
            reply('User Gagal Di temukan')
            console.error(error);
          });
        }
        break
        
        case 'stalkhdi': {
          const ea = text.split(' ')
          if (!text) return reply('user id nya mana?')
            stalkerController('game', 'higgs-domino', ea[0], ea[1])
          .then(data => {
            const username = data.nickname
            const userid = data.userid
           let result = '' 

           if (username === null || userid === null){
            result = `userId username tidak di temukan`
          } else {
            result = `_*Higgs Domino Check*_
            
*Username:* ${username}
*UserId:* ${userid}`
}

reply(result)
            console.log(data);
          }) 
          .catch(error => {
            reply('User Gagal Di temukan')
            console.error(error);
          });
        }
        break
        case 'stalkhim': {
          const ea = text.split(' ')
          if (!text) return reply('user id nya mana?')
            stalkerController('game', 'honkai-impact', ea[0], ea[1])
          .then(data => {
            const username = data.nickname
            const userid = data.userid
           let result = '' 

           if (username === null || userid === null){
            result = `userId username tidak di temukan`
          } else {
            result = `_*Honkai Impact 3 Check*_
            
*Username:* ${username}
*UserId:* ${userid}`
}

reply(result)
            console.log(data);
          }) 
          .catch(error => {
            reply('User Gagal Di temukan')
            console.error(error);
          });
        }
        break
        case 'stalkmsw': {
          const ea = text.split(' ')
          if (!text) return reply('user id nya mana?')
            stalkerController('game', 'marvelsuperwar', ea[0], ea[1])
          .then(data => {
            const username = data.nickname
            const userid = data.userid
           let result = '' 

           if (username === null || userid === null){
            result = `userId username tidak di temukan`
          } else {
            result = `_*Marvel Super War Check*_
            
*Username:* ${username}
*UserId:* ${userid}`
}

reply(result)
            console.log(data);
          }) 
          .catch(error => {
            reply('User Gagal Di temukan')
            console.error(error);
          });
        }
        break
        case 'stalkpb': {
          const ea = text.split(' ')
          if (!text) return reply('user id nya mana?')
            stalkerController('game', 'point-blank', ea[0], ea[1])
          .then(data => {
            const username = data.nickname
            const userid = data.userid
           let result = '' 

           if (username === null || userid === null){
            result = `userId username tidak di temukan`
          } else {
            result = `_*Point Blank Check*_
            
*Username:* ${username}
*UserId:* ${userid}`
}

reply(result)
            console.log(data);
          }) 
          .catch(error => {
            reply('User Gagal Di temukan')
            console.error(error);
          });
        }
        break
        case 'stalkpubg': {
          const ea = text.split(' ')
          if (!text) return reply('user id nya mana?')
            stalkerController('game', 'pubg', ea[0], ea[1])
          .then(data => {
            const username = data.nickname
            const userid = data.userid
           let result = '' 

           if (username === null || userid === null){
            result = `userId username tidak di temukan`
          } else {
            result = `_*Game PUBG Check*_
            
*Username:* ${username}
*UserId:* ${userid}`
}

reply(result)
            console.log(data);
          }) 
          .catch(error => {
            reply('User Gagal Di temukan')
            console.error(error);
          });
        }
        break
        case 'stalkssg': {
          const ea = text.split(' ')
          if (!text) return reply('user id nya mana?')
            stalkerController('game', 'sausageman', ea[0], ea[1])
          .then(data => {
            const username = data.nickname
            const userid = data.userid
           let result = '' 

           if (username === null || userid === null){
            result = `userId username tidak di temukan`
          } else {
            result = `_*Sausage Man Check*_
            
*Username:* ${username}
*UserId:* ${userid}`
}

reply(result)
            console.log(data);
          }) 
          .catch(error => {
            reply('User Gagal Di temukan')
            console.error(error);
          });
        }
        break
        case 'stalksps': {
          const ea = text.split(' ')
          if (!text) return reply('user id nya mana?')
            stalkerController('game', 'supersus', ea[0], ea[1])
          .then(data => {
            const username = data.nickname
            const userid = data.userid
           let result = '' 

           if (username === null || userid === null){
            result = `userId username tidak di temukan`
          } else {
            result = `_*Supersus Check*_
            
*Username:* ${username}
*UserId:* ${userid}`
}

reply(result)
            console.log(data);
          }) 
          .catch(error => {
            reply('User Gagal Di temukan')
            console.error(error);
          });
        }
        break
        

    }
}
module.exports = stalkUsername
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});

