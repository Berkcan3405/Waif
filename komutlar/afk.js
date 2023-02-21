const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  if (args[0]) {
    let sebep = args.join(" ");
    let kullanıcı = message.guild.members.cache.get(message.author.id);
    const b = kullanıcı.displayName;
    await db.set(`afkSebep_${message.author.id}_${message.guild.id}`, sebep);
    await db.set(
      `afkid_${message.author.id}_${message.guild.id}`,
      message.author.id
    );
    await db.set(`afkAd_${message.author.id}_${message.guild.id}`, b);
    const a = await db.fetch(
      `afkSebep_${message.author.id}_${message.guild.id}`
    );

    message.channel.send(`<:gamers:1005162716530491492> ⇒ Sunucuda Başarıyla {AFK} Oldunuz \n<:gamers:1005162716530491492> ⇒ Girilen Sebep: ${a}`);

    message.member.setNickname(`[AFK] ` + b);
  }
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "afk",
  description: "Afk Olmanızı Sağlar.",
  usage: "afk / afk "
};
