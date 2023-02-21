  const Discord = require('discord.js');
const data = require('quick.db');


exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setThumbnail('https://cdn.discordapp.com/avatars/686185592899633200/6499d2f1c46b106eed1e25892568aa55.webp?size=512')
.setFooter(`Ping: ${client.ws.ping.toFixed(0)}`, client.user.avatarURL({dynamic: true}))
.setDescription(`${message.author} **Sunucunun** kurulmasını onaylıyor musun? 😇

**Dipnot:** Bazı kanllar silinmemiş gibi görünebilir. Discord dan çıkıp girin düzelir.`)).then(resulter => {
resulter.react('✅').then(() => resulter.react('❌'));

const yesFilter = (reaction, user) => { return reaction.emoji.name === '✅' && user.id === message.guild.owner.user.id; };
const yes = resulter.createReactionCollector(yesFilter, { time: 0 });
const noFilter = (reaction, user) => { return reaction.emoji.name === '❌' && user.id === message.guild.owner.user.id; };
const no = resulter.createReactionCollector(noFilter, { time: 0 });

yes.on('collect', async reaction => {
message.guild.roles.cache.filter(a => !a.managed && a.name !== '@everyone' && a.position < message.guild.members.cache.get(client.user.id).roles.highest.position).forEach(role => role.delete('ok boomer') && console.log(role.name+' silindi sqrt'));
message.guild.channels.cache.forEach(a => a.delete());
});
message.guild.roles.create({ data: { name: '🎂 ・ İyiki Doğdun' }, reason: 'ayn' }).then(roles => {
roles.setPermissions(['SEND_MESSAGES']);
roles.setColor('#070719');
});
  
message.guild.roles.create({ data: { name: '𓇼・Owner' }, reason: 'ayn' }).then(role => {
role.setPermissions(['ADMINISTRATOR']);
role.setColor('#070719');

message.guild.roles.create({ data: { name: '𓇼・Daiby' }, reason: 'ayn' }).then(role => {
role.setPermissions(['ADMINISTRATOR']);
role.setColor('#070719');
});
  
message.guild.roles.create({ data: { name: '𓇼・King' }, reason: 'ayn' }).then(role => {
role.setPermissions(['ADMINISTRATOR']);
role.setColor('#070719');
});
  
message.guild.roles.create({ data: { name: '𓇼・Lord' }, reason: 'ayn' }).then(role => {
role.setPermissions(['ADMINISTRATOR']);
role.setColor('#070719');
});
  
message.guild.roles.create({ data: { name: '𓇼・Strong' }, reason: 'ayn' }).then(role => {
role.setPermissions(['ADMINISTRATOR']);
role.setColor('#070719');
});
message.guild.roles.create({ data: { name: '・・・・・・・・・' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
message.guild.roles.create({ data: { name: '𓇼・Heiba' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
message.guild.roles.create({ data: { name: '𓇼・Smart' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))  
message.guild.roles.create({ data: { name: '𓇼・Strong' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
message.guild.roles.create({ data: { name: '𓇼・Cosmos' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
message.guild.roles.create({ data: { name: '𓇼・Shadow' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
message.guild.roles.create({ data: { name: '𓇼・Demon' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
message.guild.roles.create({ data: { name: '・・・Renk・・・' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
message.guild.roles.create({ data: { name: '𓇼・Red' }, reason: 'ayn' }).then(s => s.setColor('#fa0b0b'))
message.guild.roles.create({ data: { name: '𓇼・Green' }, reason: 'ayn' }).then(s => s.setColor('#00FF00'))
message.guild.roles.create({ data: { name: '𓇼・Blue' }, reason: 'ayn' }).then(s => s.setColor('#0b00fe'))
message.guild.roles.create({ data: { name: '𓇼・Purple' }, reason: 'ayn' }).then(s => s.setColor('#39144a'))
message.guild.roles.create({ data: { name: '𓇼・Orange' }, reason: 'ayn' }).then(s => s.setColor('#f59812'))
message.guild.roles.create({ data: { name: '𓇼・Yellow' }, reason: 'ayn' }).then(s => s.setColor('#ffdf00'))
message.guild.roles.create({ data: { name: '𓇼・Pink' }, reason: 'ayn' }).then(s => s.setColor('#ff0adb'))
message.guild.roles.create({ data: { name: '𓇼・Black' }, reason: 'ayn' }).then(s => s.setColor('#000005'))
message.guild.roles.create({ data: { name: '𓇼・Grey' }, reason: 'ayn' }).then(s => s.setColor('#2e2e2e'))
message.guild.roles.create({ data: { name: '・・・Üye・・・' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
message.guild.roles.create({ data: { name: '・Vip' }, reason: 'ayn' }).then(s => s.setColor('#f4fa58'))
message.guild.roles.create({ data: { name: '・Partner' }, reason: 'ayn' }).then(s => s.setColor('#e77e2e'))
message.guild.roles.create({ data: { name: '・Erkek' }, reason: 'ayn' }).then(s => s.setColor('#1217ee'))
message.guild.roles.create({ data: { name: '・Kız' }, reason: 'ayn' }).then(s => s.setColor('#fe15aa'))
message.guild.roles.create({ data: { name: '・Botlar' }, reason: 'ayn' }).then(s => s.setColor('#3c2f2f'))
message.guild.roles.create({ data: { name: '・Özel Üye' }, reason: 'ayn' }).then(s => s.setColor('#391680'))
message.guild.roles.create({ data: { name: '・・・Oyun・・・' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
message.guild.roles.create({ data: { name: '🎮 | Mta' }, reason: 'ayn' }).then(s => s.setColor('#ffbf00'))
message.guild.roles.create({ data: { name: '🎮 | Zula' }, reason: 'ayn' }).then(s => s.setColor('#e77e2e'))
message.guild.roles.create({ data: { name: '🎮 | Pubg' }, reason: 'ayn' }).then(s => s.setColor('#29cb79'))
message.guild.roles.create({ data: { name: '🎮 | Gta 5' }, reason: 'ayn' }).then(s => s.setColor('#955aab'))
message.guild.roles.create({ data: { name: '🎮 | Lol' }, reason: 'ayn' }).then(s => s.setColor('#2efec8'))
message.guild.roles.create({ data: { name: '・・・Oyun2・・・' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
message.guild.roles.create({ data: { name: '🎮 | Roblox' }, reason: 'ayn' }).then(s => s.setColor('#3299d8'))
message.guild.roles.create({ data: { name: '🎮 | MiceCraft' }, reason: 'ayn' }).then(s => s.setColor('#ffbf00'))
message.guild.roles.create({ data: { name: '🎮 | Valorant' }, reason: 'ayn' }).then(s => s.setColor('#81f79f'))
message.guild.roles.create({ data: { name: '🎮 | BrawlStars' }, reason: 'ayn' }).then(s => s.setColor('#5882fa'))
message.guild.roles.create({ data: { name: '🎮 | MobilLegends' }, reason: 'ayn' }).then(s => s.setColor('#5882fa'))
message.guild.roles.create({ data: { name: '・・・Oyun3・・・' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
message.guild.roles.create({ data: { name: '🎮 | AmoungUs' }, reason: 'ayn' }).then(s => s.setColor('#5882fa'))
message.guild.roles.create({ data: { name: '🎮 | ZulaMobil' }, reason: 'ayn' }).then(s => s.setColor('#5882fa'))
message.guild.roles.create({ data: { name: '🎮 | Call Of Duty' }, reason: 'ayn' }).then(s => s.setColor('#5882fa'))
message.guild.roles.create({ data: { name: '🎮 | Fortnite' }, reason: 'ayn' }).then(s => s.setColor('#5882fa'))
message.guild.roles.create({ data: { name: '🎮 | Rocket League' }, reason: 'ayn' }).then(s => s.setColor('#5882fa'))
message.guild.roles.create({ data: { name: '🎮 | Metin2' }, reason: 'ayn' }).then(s => s.setColor('#5882fa'))
message.guild.roles.create({ data: { name: '🎮 | Clash of Clans' }, reason: 'ayn' }).then(s => s.setColor('#5882fa'))
message.guild.roles.create({ data: { name: '🎮 | Pubg Lite' }, reason: 'ayn' }).then(s => s.setColor('#5882fa'))
message.guild.roles.create({ data: { name: '🎮 | Fifa' }, reason: 'ayn' }).then(s => s.setColor('#5882fa'))
message.guild.roles.create({ data: { name: '・・・İlişki・・・' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
message.guild.roles.create({ data: { name: '💔 | Sevgilim yapmıyorum' }, reason: 'ayn' }).then(s => s.setColor('#ff0080'))
message.guild.roles.create({ data: { name: '💔 | Sevgilim var' }, reason: 'ayn' }).then(s => s.setColor('#ff0080'))
message.guild.roles.create({ data: { name: '💔 | Sevgilim yok' }, reason: 'ayn' }).then(s => s.setColor('#9f81f7'))
message.guild.roles.create({ data: { name: '・・・Takım・・・' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
message.guild.roles.create({ data: { name: '♥️ | Fenerbahçe' }, reason: 'ayn' }).then(s => s.setColor('#ffdf00'))
message.guild.roles.create({ data: { name: '♥️ | Galatasaray' }, reason: 'ayn' }).then(s => s.setColor('#fa0b0b'))
message.guild.roles.create({ data: { name: '♥️ | Beşiktaş' }, reason: 'ayn' }).then(s => s.setColor('#000005'))
message.guild.roles.create({ data: { name: '♥️ | Trabzonspor' }, reason: 'ayn' }).then(s => s.setColor('#39144a'))
message.guild.roles.create({ data: { name: '♥️ | Takım tutmuyorum' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
message.guild.roles.create({ data: { name: '・・・Burç・・・' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
message.guild.roles.create({ data: { name: '♏ ・ Akrep' }, reason: 'ayn' }).then(s => s.setColor('#39144a'))
message.guild.roles.create({ data: { name: '♏ ・ Başak' }, reason: 'ayn' }).then(s => s.setColor('#39144a'))  
message.guild.roles.create({ data: { name: '♊ ・ İkizler' }, reason: 'ayn' }).then(s => s.setColor('#39144a'))  
message.guild.roles.create({ data: { name: '♋ ・ Yengeç' }, reason: 'ayn' }).then(s => s.setColor('#39144a'))  
message.guild.roles.create({ data: { name: '♌ ・ Aslan' }, reason: 'ayn' }).then(s => s.setColor('#39144a'))  
message.guild.roles.create({ data: { name: '♐ ・ Yay' }, reason: 'ayn' }).then(s => s.setColor('#39144a'))
message.guild.roles.create({ data: { name: '・・・・・・・・・' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
message.guild.roles.create({ data: { name: '♑ ・ Oğlak' }, reason: 'ayn' }).then(s => s.setColor('#39144a')) 
message.guild.roles.create({ data: { name: '♈ ・ Koç' }, reason: 'ayn' }).then(s => s.setColor('#39144a'))  
message.guild.roles.create({ data: { name: '♉ ・ Boğa' }, reason: 'ayn' }).then(s => s.setColor('#39144a'))  
message.guild.roles.create({ data: { name: '♒ ・ Kova' }, reason: 'ayn' }).then(s => s.setColor('#39144a'))  
message.guild.roles.create({ data: { name: '♓ ・ Balık' }, reason: 'ayn' }).then(s => s.setColor('#39144a'))  
message.guild.roles.create({ data: { name: '♎ ・ Terazi' }, reason: 'ayn' }).then(s => s.setColor('#39144a'))
message.guild.roles.create({ data: { name: '⛎ ・ Yılancı' }, reason: 'ayn' }).then(s => s.setColor('#39144a'))
message.guild.roles.create({ data: { name: '・・・・・・・・・' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
  
message.guild.channels.create('●▬▬๑「Kayıt Alanı」๑▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('・kayıt-chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎤 | Teyit ¹', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
message.guild.channels.create('🎤 | Teyit ²', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
message.guild.channels.create('🎤 | Teyit ³', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
});  

message.guild.channels.create('📌  ╔══╗ ╚╗#GENEL╔╝ ╔══╗', {type: 'category'}).then(parent => {
message.guild.channels.create('╠・𓇼・roller', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('╠・𓇼・chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('╠・𓇼・bot-komut', {type: 'text'}).then(c => c.setParent(parent.id));
});  
  
message.guild.channels.create('📌  ╔═╗ ╚╗#DUYURU╔╝ ╔═╗', {type: 'category'}).then(parent => {
message.guild.channels.create('╠・𓇼・kurallar', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('╠・𓇼・seviye', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('╠・𓇼・duyuru', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('╠・𓇼・davetler', {type: 'text'}).then(c => c.setParent(parent.id));
});
  
message.guild.channels.create('📌  ╔═╗ ╚╗#DUYURU 2╔╝ ╔═╗', {type: 'category'}).then(parent => {
message.guild.channels.create('╠・𓇼・boost', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('╠・𓇼・tag', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('╠・𓇼・şikayet', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('╠・𓇼・öneri', {type: 'text'}).then(c => c.setParent(parent.id));
});  
  
message.guild.channels.create('📌  ╔═╗ ╚╗#EĞLENCE╔╝ ╔═╗', {type: 'category'}).then(parent => {
message.guild.channels.create('╠・𓇼・doğum-günü', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('╠・𓇼・owo', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('╠・𓇼・sayı-sayma', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('╠・𓇼・kelime-türet', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('╠・𓇼・tuttu-tutmadı', {type: 'text'}).then(c => c.setParent(parent.id));
});
  
message.guild.channels.create('📌  ╔═╗ ╚╗#EĞLENCE 2╔╝ ╔═╗', {type: 'category'}).then(parent => {
message.guild.channels.create('╠・𓇼・söz-bırak', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('╠・𓇼・bom-oyunu', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('╠・𓇼・itiraf-et', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('╠・𓇼・espiri', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('╠・𓇼・anı-anlat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('╠・𓇼・öneriler', {type: 'text'}).then(c => c.setParent(parent.id));  
message.guild.channels.create('╠・𓇼・şarkı-söyle', {type: 'text'}).then(c => c.setParent(parent.id));  
});
  
message.guild.channels.create('📌  ╔═╗ ╚╗#AVANTAJ╔╝ ╔═╗', {type: 'category'}).then(parent => {
message.guild.channels.create('╠・𓇼・boost', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('╠・𓇼・tag', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('╠・𓇼・invite', {type: 'text'}).then(c => c.setParent(parent.id));
});      
  
message.guild.channels.create('§▬▬▬「Foto Gif」▬▬▬§', {type: 'category'}).then(parent => {
message.guild.channels.create('📸・oyun-chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📸・gif-chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📸・photo-chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📸・caps-chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📸・mizah-chat', {type: 'text'}).then(c => c.setParent(parent.id));  
});
  
message.guild.channels.create('§▬▬▬「Partner」▬▬▬§', {type: 'category'}).then(parent => {
message.guild.channels.create('⭐・partner・text', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('⭐・partner', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('⭐・partner-bilgi', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('⭐ Partner ', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit());
});      
  
message.guild.channels.create('♢▬▬▬「Yönetim」▬▬▬♢', {type: 'category'}).then(parent => {
message.guild.channels.create('📌・yetkili-şikayet', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🏆・Owner Odası', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🏆・Daiby Odası', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🏆・King Odası', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🏆・Lord Odası', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🏆・Strong Odası', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
});
  
message.guild.channels.create('♢▬▬▬「Yönetim」▬▬▬♢', {type: 'category'}).then(parent => {
message.guild.channels.create('🏆・Heiba', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🏆・Smart Odası', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🏆・Cosmos Odası', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🏆・Shadow Odası', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🏆・Demon Odası', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
});  
  
message.guild.channels.create('♢▬▬▬「Yönetim 2」▬▬▬♢', {type: 'category'}).then(parent => {
message.guild.channels.create('👥・yetkili-duyuru', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('👥・yetkili-alım', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('👥・yetkili-komutlar', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('👥・yetkili-sohbet', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10)); 
});  

message.guild.channels.create('●▬▬▬๑「Genel Ses」๑▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('🔥 ・ Genel Ses ', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
message.guild.channels.create('🔥 ・ Genel Ses', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🔥 ・ Genel Ses', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('🔥 ・ Genel Ses', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit());  
});
  
message.guild.channels.create('●▬▬▬๑「Özel Oda」๑▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('🔥 ・ Özel Oda ', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(2));  
});
  
message.guild.channels.create('●▬▬▬▬๑「🎵」๑▬▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('🎵 ・ Music Room', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(2));  
message.guild.channels.create('🎵 ・ Music Room', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
});

message.guild.channels.create('●▬▬▬▬๑「🎰」๑▬▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('👥・oyuncu-arama', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎮・LOL', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎮・ZULA', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('🎮・CSGO', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎮・PUBG', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎮・FORTNİTE', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎮・MİNECRAFT', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('🎮・ROBLOX', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎮・APEX', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎮・VALORANT', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));  
message.guild.channels.create('🎮・MOBİL LEGENDS', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎮・GTA 5', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
  
});  
message.guild.channels.create('●▬▬▬▬๑「💎」๑▬▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('💎 ・ [AFK] Room', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit());  
});
});

no.on('collect', async reaction => {
resulter.delete();
});

})  


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-kur'
};