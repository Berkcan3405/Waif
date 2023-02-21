const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.MessageEmbed()
    .setColor('GOLD')
    .setAuthor(`𓇼 𝙳𝙰𝚁𝙺𝙻𝟷𝙶𝙷𝚃 #𝚉𝚄𝙻𝙰 | Bot Komutları`, client.user.avatarURL) 
      .setDescription('**[İnstagram](https://www.instagram.com/zula.fabulous/)**')
.setThumbnail(client.user.avatarURL)
      .addField('**Komutlar:**', "`v!afk` `v!cihaz` `v!dmduyuru` `v!say`, `v!profil` `v!şikayet` `v!sunucukur` `v!sml` `v!isim`")
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()
    message.delete()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [`yardım`],
    permLevel: 0
};

exports.help = {
    name: 'bot',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};