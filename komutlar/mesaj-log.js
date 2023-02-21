const Discord = require('discord.js');
const Database = require("quick.db");
const db = require("quick.db");

exports.run = async(client, message, args) => {
message.delete({timeout: 3000})

let silinenmesajlarlogsistem = message.mentions.channels.first()
if(!silinenmesajlarlogsistem) return message.channel.send('\`Silinen mesajlar log sistemi için bir kanal belirtmelisiniz.\`  <:darklight:989213357166977044>').then(msg => msg.delete({timeout: 10000}))
db.set(`silinenmesajlarveri_${message.guild.id}`, silinenmesajlarlogsistem.id)
return message.channel.send(`\`Silinen mesajlar log sistemi için kanal başarılı bir şekilde ayarlanmıştır.\` <#${silinenmesajlarlogsistem.id}>   <:darklight:989213357166977044>`).then(msg => msg.delete({timeout: 10000}))

};
exports.conf = {
enabled: true, 
guildOnly: false,
aliases: [],
permLevel: 3

};
exports.help = {
name : "sml"    
};
