const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`EvoBot Yardım Menüsü`, client.user.avatarURL)
.setColor('#ffd100')
.setDescription(`<a:mumluck:755746645878112308> EvoBot botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Genel Komutlar__`,`<a:mumluck:755746645878112308> \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`<a:mumluck:755746645878112308> \`${prefix}moderasyon\` `,true)
.addField(`__Guard Komutları__`,`<a:mumluck:755746645878112308> \`${prefix}guard\`  `,true)
.addField(`__Sunucu Komutları__`,`<a:mumluck:755746645878112308> \`${prefix}sunucu\` `,true)
.addField(`__Eklenti Komutları__`,`<a:mumluck:755746645878112308> \`${prefix}eklenti\`  `,true)
.addField(`__Prefix Değiştir__`,`<a:mumluck:755746645878112308> \`${prefix}prefix\` `,true)
.addField(`__Bilgilendirme__`,`<a:mumluck:755746645878112308> \`${prefix}davet\` | EvoBot'yi Sunucunuza Davet Edersiniz\n<a:mumluck:755746645878112308> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(`https://i.hizliresim.com/uWdIiT.png`)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["yardım","help"], 
    permLevel: 0
  };
  exports.help = {
    name: 'yardım'
  }; 
  