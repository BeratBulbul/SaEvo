const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`EvoBot Eklenti Menüsü`, client.user.avatarURL)
.setColor('#ffd100')
.setDescription(`<a:711391100321136710:711391100321136710> EvoBot botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Kayıt Sistemi__`,`<a:mumluck:755746645878112308> \`${prefix}yardımkayıt\` Gelişmiş Yardım Menüsü`,true)
.addField(`__Özel Oda Sistemi__`,`<a:mumluck:755746645878112308> \`${prefix}özeloda\` Özel Oda Sistemi`,true)
.addField(`__Sunucu Panel__`,`<a:mumluck:755746645878112308> \`${prefix}panel-kur\` Sunucunuzun İstatistiklerini Görürsünüz`,true)
.addField(`__İnvite Sistemi__`,`<a:mumluck:755746645878112308> \`${prefix}invite\` Gelişmiş Davet Sistemi`,true)
.addField(`__Bilgilendirme__`,`<a:mumluck:755746645878112308> \`${prefix}davet\` | EvoBot'yi Sunucunuza Davet Edersiniz\n<a:mumluck:755746645878112308> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(`https://i.hizliresim.com/uWdIiT.png`)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["eklenti"], 
    permLevel: 0
  };
  exports.help = {
    name: 'eklenti'
  }; 
  