const Discord = require('discord.js');

exports.run = function(client, message, args) {

    let sikayetkonu = args.slice(0).join(' ');
    if (sikayetkonu.length < 1) return message.channel.send('Kullanım: v!sikayet (şikayetiniz)').then(msg => msg.delete({timeout: 5000}))

const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription('\`Đ𝙰𝚁𝙺 Ⱡ𝙸𝙶𝙷𝚃 🎮  Şikayetiniz İletildi.\`   <:gamers:1005162716530491492>')
message.channel.send(embed).then(msg => msg.delete({timeout: 5000}))

const embed2 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`**__YENİ BİR KULLANICI SİKAYETİ__**  <:gamers:1005162716530491492>

-------------------------------------------------------------------------------------
<:gamers:1005162716530491492>    **Şikayet:**  ${sikayetkonu}
-------------------------------------------------------------------------------------
<:gamers:1005162716530491492>   **Komut Kanalı:** ${message.channel}
-------------------------------------------------------------------------------------
<:gamers:1005162716530491492>   **Şikayet Eden:** ${message.author} **-** \`${message.author.tag}\`
-------------------------------------------------------------------------------------`)
client.channels.cache.get('997094210765340732').send(embed2).then(async msj => {msj.react('🟢').then(() => msj.react('🔴')); // Kanal ID 
})
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};
exports.help = {
  name: 'şikayet',
  description: 'Şikayet de bulunursunuz.',
  usage: 'sikayet <Şikayet>'
};