exports.allMenu = (ucapanWaktu, pushname, mundur, upload, download, ownerName, youtubeName, botName, jam, tanggal, isOwner, sender, prefix) => {
    return`${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}
🏅Creator : ${ownerName}
🎗Youtube : ${youtubeName}
🤖Bot Name : ${botName}
❋۪──━━━── •-• ──━━━──❋
       _Indonesia Time_
⏰${jam}
📆${tanggal}

*SIMPEL MENU*
❋ ${prefix}sticker
❋ ${prefix}toimg
❋ ${prefix}tovideo
❋ ${prefix}tomp3
❋ ${prefix}ttp
❋ ${prefix}attp
❋ ${prefix}emojimix
❋ ${prefix}remini

*STORE MENU*
◪ ${prefix}menu
◪ ${prefix}addlist key@response
◪ ${prefix}dellist key
◪ ${prefix}dellist2 key @(buat hapus key yang terdapat spasi)
◪ ${prefix}update key@response
◪ ${prefix}jeda
◪ ${prefix}kalkulator

*CEK NAME MENU*
 • ${prefix}ffid Id Game
 • ${prefix}mlid Id/Server
 • ${prefix}pubgid Id Game
 • ${prefix}higgsid Id Game
╭✄┈┈┈⟬ *FITUR STALK* ⟭ •
┆◪ .cekpln
┆◪ .cekgopay
┆◪ .cekdana
┆◪ .cekovo
┆◪ .cekshope
┆◪ .stalkml
┆◪ .mlid2 ( Mobile Legends )
┆◪ .stalkff ( Free Fire )
┆◪ .stalkaov ( Arena of Valor )
┆◪ .stalkau2m ( AU2 Mobile )
┆◪ .stalkbf ( Bearfish )
┆◪ .stalkbgmi ( Battleground India )
┆◪ .stalkbd ( Boss Domino )
┆◪ .stalkbcl ( Black Cloverm )
┆◪ .stalkcod ( Call of Duty )
┆◪ .stalkdr ( Dragon Raja )
┆◪ .stalkgu ( Garena Undawn )
┆◪ .stalkhdi ( Higgs Domino )
┆◪ .stalkhim ( Honkai Impact 3 )
┆◪ .stalkmsw ( Marvel Super War )
┆◪ .stalkpb ( Point Blank )
┆◪ .stalkpubg ( Game PUBG )
┆◪ .stalkssg ( Sausage Man )
┆◪ .stalksps ( Supersus )
╰──────────◇ •

*CHECK RATE MENU*
» ${prefix}kios ratenya
» ${prefix}unibrl ratenya
» ${prefix}unimy ratenya
» ${prefix}uniph ratenya
» ${prefix}soc ratenya
» ${prefix}undawn ratenya
» ${prefix}genshin ratenya
» ${prefix}codm ratenya
» ${prefix}aov ratenya
» ${prefix}valorant ratenya
» ${prefix}rzpubg ratenya
» ${prefix}honkai ratenya
» ${prefix}supersus ratenya
» ${prefix}lol ratenya
» ${prefix}cekdg ratenya

*PROSES/DONE MENU*
⸙ ${prefix}p < reply orderan >
⸙ ${prefix}d < reply orderan >
⸙ ${prefix}setp
⸙ ${prefix}updatep
⸙ ${prefix}delsetp
⸙ ${prefix}setd
⸙ ${prefix}updated
⸙ ${prefix}delsetd

*SETBOT MENU*
❒ ${prefix}setbot Teksnya
❒ ${prefix}updatesetbot TeksBaru
❒ ${prefix}delsetbot
❒ Bot = Untuk Respon Bot

*GROUP MENU*
 • ${prefix}left 1/0
 • ${prefix}delleft
 • ${prefix}updateleft
 • ${prefix}setleft
 • ${prefix}welcome 1/0
 • ${prefix}updatewelcome
 • ${prefix}setwelcome
 • ${prefix}delwelcome
 • ${prefix}linkgc
 • ${prefix}setppgc
 • ${prefix}setnamegc
 • ${prefix}setdesc
 • ${prefix}antilink 1/0
 • ${prefix}antilinkwame 1/0
 • ${prefix}pesansementara on/off
 • ${prefix}editinfo on/off
 • ${prefix}open
 • ${prefix}close
 • ${prefix}setopen
 • ${prefix}updateopen
 • ${prefix}delsetopen
 • ${prefix}setclose
 • ${prefix}updateclose
 • ${prefix}delsetclose
 • ${prefix}add
 • ${prefix}kick
 • ${prefix}promote
 • ${prefix}demote
 • ${prefix}afk
 • ${prefix}revoke
 • ${prefix}hidetag
 • ${prefix}tagall
 • ${prefix}checksewa

*MAIN MENU*
 • ${prefix}owner
 • ${prefix}sewabot
 • ${prefix}wancak
 • ${prefix}tiktok link`
}


exports.ownmenu = (pushname, ownerNumber, prefix) => {
    return`*OWNERS MENU*
 • ${prefix}join
 • ${prefix}getlink idnya
 • ${prefix}broadcast teks
 • ${prefix}addwaktu link waktu
 • ${prefix}addsewa waktu
 • ${prefix}delsewa
 • ${prefix}listsewa`
}