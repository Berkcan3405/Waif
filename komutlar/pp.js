const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client, message, args) => {// chimp 💕'b#0308
if(!message.member.hasPermission('MANAGE_ROLES')) return;
if(!args[0]) return message.channel.send(`v!pp-gif ayarla/sıfırla komutlarını kullanın.`)

if(args[0] === 'ayarla') {

const ayarlı = await data.fetch(`ppgif.${message.guild.id}`)
if(ayarlı) return message.channel.send(`Kanal zaten ayarlı.`)

if(!args[1]) return message.channel.send(`Bir kanalı etiketlemelisin.`)
let channel = message.mentions.channels.first()
if(!channel) return message.channel.send(`${args[1]}, isimli kanalı bu sunucuda bulamıyorum.`)

data.set(`ppgif.${message.guild.id}`, channel.id)
message.channel.send(`PP fotoğrafların gönderileceği yer: ${channel} olarak ayarlandı.
Sıfırlamak için: v!pp sıfırla`)

} else if(args[0] === 'sıfırla') {
const ayarlı = await data.fetch(`ppgif.${message.guild.id}`)
if(!ayarlı) return message.channel.send(`Kanal zaten ayarlı değil :)`)

data.delete(`ppgif.${message.guild.id}`)
message.channel.send(`PP fotoğrafların gönderileceği kanal sıfırlandı.
Ayarlamak için: v!pp ayarla #channel`) }

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["pp"],
  permLevel: 0
}

exports.help = {
  name: 'pp'
};// codare ♥