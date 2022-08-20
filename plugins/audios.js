let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]


if (chat.audios && m.text.match(/(SEÑO|seño)/gi)) {
let vn = './media/seño.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


return !0 }
export default handler

