const Discord = require("discord.js");

module.exports.run = async (client, message, args,) => {
message.delete({timeout: 3000})

    let g1 = message.guild.members.cache.filter(m => new Date().getTime() - m.joinedTimestamp < 86400000).size;
    let g7 = message.guild.members.cache.filter(m => new Date().getTime() - m.joinedTimestamp < 604800000).size;
    let g15 = message.guild.members.cache.filter(m => new Date().getTime() - m.joinedTimestamp < 1296000000).size;
    let g30 = message.guild.members.cache.filter(m => new Date().getTime() - m.joinedTimestamp < 2592000000).size;

    var s = message.guild.fetchBans().then(bans => {

  const voiceChannels = message.guild.channels.cache.filter(c => c.type === "voice");
  let count = 0;

  for (const [id, voiceChannel] of voiceChannels)
  count += voiceChannel.members.size;
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`

  \`ÜYE BİLGİ\`   <:gamers:1005162716530491492>

    **Üye sayısı:** ( ${message.guild.memberCount} ) **Bot sayısı:** ( ${message.guild.members.cache.filter(m => m.user.bot).size} ) **Banlı üye:** ( ${bans.size} ) **Sesli üye:** ( ${count} )

    \`AKTİFLİK BİLGİ\`   <:gamers:1005162716530491492>
    
    **Online:** ( ${message.guild.members.cache.filter(x =>  !x.user.bot && x.user.presence.status === 'online').size} ) **Boşta:** ( ${message.guild.members.cache.filter(x =>  !x.user.bot && x.user.presence.status === 'idle').size} ) **Meşgul:** ( ${message.guild.members.cache.filter(x =>  !x.user.bot && x.user.presence.status === 'dnd').size} ) **Çevrimiçi:** ( ${message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size} ) **Offline:** ( ${message.guild.members.cache.filter(x =>  !x.user.bot && x.user.presence.status === 'offline').size} )

    \`CİHAZ BİLGİ:\`   <:gamers:1005162716530491492>

    **Tarayıcı:** ( ${message.guild.members.cache.filter(m => !m.user.bot && (m.user.presence.status !== "offline")).filter(m => Object.keys(m.user.presence.clientStatus).includes("web")).size} ) **Telefon:** ( ${message.guild.members.cache.filter(m => !m.user.bot && (m.user.presence.status !== "offline")).filter(m => Object.keys(m.user.presence.clientStatus).includes("mobile")).size} ) **Bilgisayar:** ( ${message.guild.members.cache.filter(m => !m.user.bot && (m.user.presence.status !== "offline")).filter(m => Object.keys(m.user.presence.clientStatus).includes("desktop")).size} )

    \`KATILIM BİLGİ:\`   <:gamers:1005162716530491492>

    **1 gün:**   ( ${g1} ) **7 gün:**   ( ${g7} ) **15 gün:**   ( ${g15} ) **30 gün:**   ( ${g30} )`)

    message.channel.send(embed)
})
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "say",
  description: "- ",
  usage: "say"
};