const Discord = require('discord.js');

exports.run = async (client, message, args) => {// Can°B#1308

let member;
if(message.mentions.members.first()) {
member = message.mentions.members.first()
} else {
member = message.member;

}

let baknedicm = {
  web: 'İnternet',
  desktop: 'Uygulama',
  mobile: 'Telefon'
}

let durum = (member.user.presence.status).replace('dnd', '<a:Onay3:945473619927138323> Rahatsız etmeyin.').replace('idle', 'Boşta.').replace('online', '<a:Onay:941657684564934676> Aktif.').replace('offline', 'Çevrimdışı.');
let uyy;
if(member.user.presence.status !== 'offline') {
uyy = ` Bağlandığı cihaz: ${baknedicm[Object.keys(member.user.presence.clientStatus)[0]]}` } else { uyy = '' }
message.channel.send(`${member.user} durumu: ${durum}${uyy}`)

};
exports.conf = {
    aliases: []
  };
  
  exports.help = {
    name: "cihaz"
  };