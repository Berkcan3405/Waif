
const Discord = require("discord.js");
const db = require("quick.db");
const client = new Discord.Client();

const ayarlar = require("./ayarlar.json");
client.queue = new Map();
const fs = require("fs");
const moment = require("moment");
require("./util/eventLoader")(client);

moment.locale("tr");
const chalk = require("chalk");
const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(`Az Önce Bot Ping yedi, Sorun önemli değil merak etme. Hatayı düzelttik.`);
  response.sendStatus(500);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;

const log = (message) => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach((f) => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach((alias) => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = (command) => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach((alias) => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = (command) => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach((alias) => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = (command) => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//--------------------------------------------------------------------------------------\\

//--------------------------------------------------------------------------------------\\

//--------------------------------------------------------------------------------------\\

//
client.on("message", message => {
 if(message.content.toLowerCase() == ".dc")
    return message.channel.send(`https://discord.gg/9gWgbC8mS8`)
});

//-------------------------------Prefix-------------------------------------------------------\\

client.on("message", async message => {

  if (message.author.bot) return;

  if (!message.guild) return;

  let prefix = db.get(`prefix_${message.guild.id}`);

  if (prefix === null) prefix = prefix;

  if (!message.content.startsWith(prefix)) return;

  if (!message.member)

  message.member = await message.guild.fetchMember(message);

  const args = message.content

    .slice(prefix.length)

    .trim()

    .split(/ +/g);

  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;
  
  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);

});
  //-------------------------------------SEVİYE TEPKİ------------------------------------------------\\
  client.on("message", async message => {

  if(message.channel.id !== "901556138921852938") return;
  message.react("941657646287708191").then(() => {
  })

  })
//-------------------------------------SEVİYE TEPKİ 2------------------------------------------------\\
  client.on("message", async message => {

  if(message.channel.id !== "1003272924834320425") return;
  message.react("941657646287708191").then(() => {
  })

  })
//-------------------------------------SEVİYE TEPKİ 3------------------------------------------------\\
  client.on("message", async message => {

  if(message.channel.id !== "1003267278739099648") return;
  message.react("941657646287708191").then(() => {
  })

  })
//---------------------------------------PP Tepki-------------------------------------------------\\
client.on("message", async message => {

  if(message.channel.id !== "998199035129241610") return;
  message.react("996800526081605662").then(() => {
  })

  })
//---------------------------------------GİF Tepki-------------------------------------------------\\
client.on("message", async message => {

  if(message.channel.id !== "998903156756992010") return;
  message.react("996800526081605662").then(() => {
  })

  })
  //-------------------------------------DUYURU TEPKİ-------------------------------------------------\\
  client.on("message", async message => {

  if(message.channel.id !== "939570109679296543") return;
  message.react("946580258658865172")
  message.react("946580229994983434")
  message.react("946580436035964938")
  message.react("946580350476369961")
  message.react("946580367106793493")
  message.react("946580319547588728")
  message.react("946580293572259860")
  message.react("946580303982518303")
  message.react("946580477114974238")
  message.react("989213357166977044")
  })

  //-------------------------------------DAVET TEPKİ-------------------------------------------------\\
  client.on("message", async message => {

  if(message.channel.id !== "957753152369733642") return;
  message.react("1005162716530491492").then(() => {
  })
        })

 //-------------------------------------Dgko TEPKİ-------------------------------------------------\\
  client.on("message", async message => {

  if(message.channel.id !== "939593667751051337") return;
  message.react("1003599244046909520").then(() => {
  })
        })

//-------------------------------------PP-------------------------------------------------\\
client.on('userUpdate', (oldUser, newUser ,message) => {
if(oldUser.avatarURL() !== newUser.avatarURL()) {

  client.guilds.cache.forEach(async guild => {
  if(guild.members.cache.get(newUser.id)) {
  
  const channeldata = await require('quick.db').fetch(`ppgif.${guild.id}`)
  if(!channeldata) return;
  let channel = await guild.channels.cache.get(channeldata)
  
  let avatar = new Discord.MessageAttachment(newUser.avatarURL())
  let gifkontrol;
  if(newUser.avatarURL().includes('.gif')) { gifkontrol = `**[JPG](${newUser.avatarURL()})**` }
  if(!newUser.avatarURL().includes('.gif')) { gifkontrol = `**[PNG](${newUser.avatarURL()})**` }
    
    
  const chimp2 = new Discord.MessageEmbed().setColor('GOLD').setImage(newUser.avatarURL({ format: 'png',  size: 128 })).setDescription(`${gifkontrol} **[JPG](${newUser.avatarURL().replace('.gif', '.png').replace('.jpg', '.png').replace('.webp', '.png')})**`)
 if(!newUser.avatarURL().includes('.gif')) return channel.send(`<@${newUser.id}>`, chimp2)
  }
  })
}
})
//-------------------------------------ZULA TEPKİ-------------------------------------------------\\
client.on('message', async message => {// can#0002
if(message.author.bot || message.channel.type !== 'text') return;
if(message.content.split(' ').filter(x => x.startsWith(':') && x.endsWith(':')).length > 1) {
let emojiler = [];
message.content.split(' ').filter(x => x.startsWith(':') && x.endsWith(':')).forEach(x => {
emojiler.push(message.guild.emojis.cache.find(s => s.name.includes(x.replace(/:/g, ''))));
});
let newMessage;
var d = -1;
if(emojiler.length >= 1) {
emojiler.forEach(s => {
d++
if(!newMessage) newMessage = message.content.replace(message.content.split(' ').filter(x => x.startsWith(':') && x.endsWith(':'))[d], s);
if(newMessage) newMessage = newMessage.replace(message.content.split(' ').filter(x => x.startsWith(':') && x.endsWith(':'))[d], s);
});
};
return message.delete() && message.channel.send(`**${message.author.tag}**: ${newMessage}`);
};
let emoji = message.content.split(' ').find(x => x.startsWith(':') && x.endsWith(':')).toString().replace(/:/g, '');
let emojii = message.guild.emojis.cache.find(x => x.name.includes(emoji));
if(!emojii) return;
message.content = message.content.replace(message.content.split(' ').find(x => x.startsWith(':') && x.endsWith(':')), emojii);
return message.delete() && message.channel.send(`**${message.author.tag}**: ${message.content}`);
});
  //-------------------------------------ZULA TEPKİ-------------------------------------------------\\
  client.on("message", async message => {

  if(message.channel.id !== "905637704270770227") return;
  message.react("996761468068450375").then(() => {
  message.react("906512408036655135")
  message.react("906188696787755038")
  message.react("996800531420950728")
  message.react("996800528786919515")
  })
    })

  //-------------------------------------SES TEPKİ-------------------------------------------------\\
  client.on("message", async message => {

  if(message.channel.id !== "961999527248801834") return;
  message.react("1003588214721888276").then(() => {
  })
    })

  //-------------------------------------LOGLAR-------------------------------------------------\\
  client.on("voiceStateUpdate", async (oldState, newState) => {

    const seslog = client.channels.cache.get("961999527248801834") //KANAL ID
    if(oldState.member.user.bot || newState.member.user.bot) return;

    if(!oldState.channel && newState.channel) seslog.send(`⇒ 𓇼 𝙳𝙰𝚁𝙺𝙻𝟷𝙶𝙷𝚃 #𝚉𝚄𝙻𝙰  \ ${newState.member.user}  ${newState.channel} Sesli Kanala **giriş yaptı.**`)
    if(oldState.channel && !newState.channel) seslog.send(`⇒ 𓇼 𝙳𝙰𝚁𝙺𝙻𝟷𝙶𝙷𝚃 #𝚉𝚄𝙻𝙰  \ ${oldState.member.user}  \`${oldState.channel.name}\` Sesli Kanaldan **çıkış yaptı.**`)
    if(oldState.channel && newState.channel && oldState.channel !== newState.channel) seslog.send(`${newState.member.user}\  \`${oldState.channel.name}\` Sesli Kanaldan \ ${newState.channel}\` Kanala Geçiş Yaptı.**`)
    if(oldState.serverMute === false && newState.serverMute === true) seslog.send(`\ ${oldState.member.user} \`  **Yetkili tarafından susturuldu.**`)
    if(oldState.serverMute === true && newState.serverMute === true) seslog.send(`\ ${oldState.member.user} \`  **Yetkili tarafından susturulması kaldırıldı.**`)
    if(oldState.serverDeaf === true && newState.serverDeaf === true) seslog.send(`\ ${oldState.member.user} \`  **Yetkili tarafından **sağırlaştırıldı.**`)
    if(oldState.serverDeaf === true && newState.serverDeaf === true) seslog.send(`\ ${oldState.member.user} \`  **Yetkili tarafından **sağırlaştırılması kaldırıldı.**`)
    if(oldState.selfVideo === false && newState.selfVideo === true) seslog.send(`\ ${oldState.member.user} \`  **Kamera yayını açtı.**`)

    })
  //-------------------------------------Hoş Geldin-------------------------------------------------\\
  // Roven Code - Roven
  client.on('guildMemberAdd', member => {
      if(member.bot) return;
      client.channels.cache.get('990537693685501962').send(`<:gamers:1005162716530491492> Değerli  ${member}   Hoş Geldin    Sunucumuza Kanallara Tıklamalısın  
  \n<:gamers:1005162716530491492>  <#905630996152586351>
  \n<:gamers:1005162716530491492>  <#939593667751051337>`).then(a => a.delete({timeout: 90000}));
  });

//-------------------------------------Hoş Geldin-------------------------------------------------\\
client.on("guildMemberAdd", member => {
    require("moment-duration-format")
      var üyesayısı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
      var üs = üyesayısı.match(/([0-999])/g)
      üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
      if(üs) {
        üyesayısı = üyesayısı.replace(/([0-9999])/g, d => {
          return {
            '0': `0`, // SAYI EMOJİ ID
            '1': `1`, // SAYI EMOJİ ID
            '2': `2`, // SAYI EMOJİ ID
            '3': `3`, // SAYI EMOJİ ID
            '4': `4`, // SAYI EMOJİ ID
            '5': `5`, // SAYI EMOJİ ID
            '6': `6`, // SAYI EMOJİ ID
            '7': `7`, // SAYI EMOJİ ID
            '8': `8`, // SAYI EMOJİ ID
            '9': `9`}[d];})}
    Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
    }  
    let seskanal = [
    ``,
]; 
  const kanal = member.guild.channels.cache.find(r => r.id === `939216882161057823`);
    let user = client.users.cache.get(member.id);
    let userinfo = {};
    require("moment-duration-format");
         const kurulu2 =  moment(member.user.createdTimestamp).fromNow()    
      const kurulus = new Date().getTime() - user.createdAt.getTime();  
     const gecen = moment.duration(kurulus).format(` YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`)
    var kontrol;
  if (kurulus < 2592000000) kontrol = ''
  const kurulma = new Date().getTime() - user.createdAt.getTime();
    moment.locale("tr");
    kanal.send(`
    **<:gamers:1005162716530491492>  〔🎮〕・ Oyun & Sohbet Sunucusuna Hoş Geldiniz**
    
    **<:gamers:1005162716530491492>    〔🎮〕・ ${member} Kayıt Olmak İçin İsmini Yaşını Vermelisin**
    
    **<:gamers:1005162716530491492>    〔🎮〕・ Hesabın **`+ moment(member.user.createdTimestamp).format("LLL") +`** Tarihinde Kurulmuştur `+kontrol+`**
    
    **<:gamers:1005162716530491492>    〔🎮〕・ Yetkili Seninle İlgilenecektir <@&905630791118233602>**`)});
//--------------------------------------TAG------------------------------------------------\\
client.on("userUpdate", async (oldUser, newUser) => {
  const tag = '♛ 𝙳𝙰𝚁𝙺𝙻𝙸𝙶𝙷𝚃・'
  const sunucu = '901554012795568138'
  const kanal = '1005169063875584001'
  const rol = '946051677079879681'

  try {
  if (newUser.username.includes(tag) && !client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
  await client.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor("GREEN").setDescription(`${newUser} ♛ 𝙳𝙰𝚁𝙺𝙻𝙸𝙶𝙷𝚃・ Tagımızı Aldığı İçin <@&${rol}> Rolünü Verdim`));
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.add(rol);
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).send(`Selam ${newUser} Tagımızı    Aldığın          İçin          ♛ 𝙳𝙰𝚁𝙺𝙻𝙸𝙶𝙷𝚃・      Rolünü      Sana      Verdim`)
  }
  if (!newUser.username.includes(tag) && client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
  await client.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor("RED").setDescription(`${newUser} ♛ 𝙳𝙰𝚁𝙺𝙻𝙸𝙶𝙷𝚃・ Tagımızı Çıkardığı İçin <@&${rol}> Rolünü Aldım`));
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.remove(rol);
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).send(`Selam ${newUser} Tagımızı    Çıkardığın       İçin          ♛ 𝙳𝙰𝚁𝙺𝙻𝙸𝙶𝙷𝚃・      Rolünü      Senden     Aldım`)
  }
} catch (e) {
console.log(`Bir hata oluştu! ${e}`)
 }
}
);

client.on(`guildMemberAdd`, async member => {
var maze = new Discord.RichEmbed()
.setColor("GREEN")
.setTitle(":inbox_tray: Sunucuya yeni bir üye katıldı!")
.setThumbnail(member.user.avatarURL)
.setDescription("Hoşgeldin "+ member +" sunucuya hoşgeldin, seninle beraber "+ member.guild.memberCount+" kişiye ulaştık.")
.addField(`:id: Üye ID:`, `${member.id}`, true)
.addField(`:octagonal_sign: Üye Adı`, `${member}`, true)
client.channels.get("939216882161057821").send(maze) //Maze yaptı çalanı lucifer yakar, sağlığınız zarar görebilir ^^
});

//-------------------------------------------------------------------------------------------\\
//------------------Değişen Oynuyor---------------------------\\

const bot = new Discord.Client();

var oyun = [
`✨ AFK | v!afk`,
`✨ CİHAZ | v!cihaz`,
`✨ ŞİKAYET | v!şikayet`,
`🌟 Prefix | v!`
]
  
client.on("ready", () => {
setInterval(function() {

         var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
         client.user.setActivity(oyun[random], {"type": "PLAYING"});

        }, 1 * 5000);
});
//-------------------------------------------------------------------------------------------\\
client.on("ready", () => {
  console.log(`Hey ${client.user.tag} Consoleye Giriş Yaptım`);
  client.user.setPresence({
    activity : {
      name: "", 
      
      type: "PLAYING"
    },
 
   
    status : 'dnd'
  })
})
//----------------------------------------Dm Görme------------------------------------------\\
client.on("message", msg => {
  var dm = client.channels.cache.get("997482128784769024"); //mesajın geleceği kanal idsi//
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) return;
    const botdm = new Discord.MessageEmbed()
      .setTitle(`${client.user.username} Dm`)
      .setTimestamp()
      .setColor("BLUE")
      .setThumbnail(`${msg.author.avatarURL()}`)
      .addField("Gönderen", msg.author)
      .addField("Mesaj", msg.content);
    

    dm.send(botdm);
  }
  if (msg.channel.bot) return;
});
//--------------------------------------AFK----------------------------------------------------------\\
client.on("message" , async msg => {
  
  if(!msg.guild) return;
  if(msg.content.startsWith(ayarlar.prefix+"afk")) return; 
  
  let afk = msg.mentions.users.first()
  
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
  
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){

       msg.reply(`<:gamers:1005162716530491492> Etiketlediğin Kişi {AFK} <:gamers:1005162716530491492> Sebep : ${sebep}`)
   }
 }
  if(msg.author.id === kisi){

       msg.reply(`<:gamers:1005162716530491492> Etiketlediğiniz Kişi {AFK}'lıktan Çıktı`)
   db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
    msg.member.setNickname(isim)
    
  }
  
});
  ;
;