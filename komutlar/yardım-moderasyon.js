const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`EvoBot Moderasyon Komutları`, client.user.avatarURL)
.setColor('#ffd100')
.setDescription(`<a:ayar:756419060824145976> EvoBot botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Reklam Engel__`,`<a:ayar:756419060824145976> \`${prefix}reklam-engel\` Sunucunzuda Reklamları Engeller`,true)
.addField(`__Reklam Kick__`,`<a:ayar:756419060824145976> \`${prefix}reklam-kick\` Sunucunuzda Reklam Yapanları 3 Uyarıda Kickler`,true)
.addField(`__Ban__`,`<a:ayar:756419060824145976>\`${prefix}ban\`  Sunucunuzda Belirtiğiniz Kişiyi Banlar`,true)
.addField(`__Kick__`,`<a:ayar:756419060824145976> \`${prefix}kick\` Sunucunuzda Belirtiğiniz Kişiyi Kickler `,true)
.addField(`__Unban__`,`<a:ayar:756419060824145976> \`${prefix}unban\`  Sunucunuzda Belirtiğiniz İD'nin Banını Açar`,true)
.addField(`__Mod Log__`,`<a:ayar:756419060824145976> \`${prefix}modlog\` Sunucunuzda Moderasyon Kayıtlarını Tuttar`,true)
.addField(`__Sayaç__`,`<a:ayar:756419060824145976> \`${prefix}sayaç\` Sunucunuzda Sayaç Tuttar`,true)
.addField(`__Uyarı__`,`<a:ayar:756419060824145976> \`${prefix}yardımuyarı\` Sunucunuza Gelişmiş Uyarı Sistemi`,true)
.addField(`__Sayaç Kapat__`,`<a:ayar:756419060824145976> \`${prefix}sayaç-kapat\` Sunucunuzun Sayaç Sistemini Kapattır`,true)
.addField(`__Ban Say__`,`<a:ayar:756419060824145976> \`${prefix}bansay \` Sunucunuzdan Kimlerin Banlandığını Görebilirsiniz`,true)
.addField(`__Banaffı__`,`<a:ayar:756419060824145976> \`${prefix}banaffı \` Sunucunuzdan Banlanan Herkesin Banını Açar `,true)
.addField(`__Yavaş Mod__`,`<a:ayar:756419060824145976> \`${prefix}yavaşmod \` Sunucunuzda Berirlenen Sohbete Yazma Delayı Koyabilirsiniz `,true)
.addField(`__Bilgilendirme__`,`<a:ayar:756419060824145976> \`${prefix}davet\` | EvoBot'yi Sunucunuza Davet Edersiniz\n<a:ayar:756419060824145976> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(`https://i.hizliresim.com/uWdIiT.png`)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["moderasyon","ayarlar"], 
    permLevel: 0
  };
  exports.help = {
    name: 'moderasyon'
  }; 
  