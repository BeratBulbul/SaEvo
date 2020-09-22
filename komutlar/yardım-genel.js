
const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`EvoBot Genel Komutlar`, client.user.avatarURL)
.setColor('#ffd100')
.setDescription(`<a:mumluck:755746645878112308> EvoBot botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Davet__`,`<a:mumluck:755746645878112308> \`${prefix}davet\` Botumuzun Davet Linkini Alıp Davet Edebilirsiniz`,true)
.addField(`__Hata Bildir__`,`<a:mumluck:755746645878112308> \`${prefix}hata-bildir\` Botumuzun Hatalarını Bildirebilirsiniz`,true)
.addField(`__Profil__`,`<a:mumluck:755746645878112308> \`${prefix}hata-bildir\` Kullanıcı Profilinizi Görebilirsiniz`,true)
.addField(`__Bot Bilgi__`,`<a:mumluck:755746645878112308> \`${prefix}botbilgi\` Botumuzun İstatistiksel Bilgileri`,true)
.addField(`__Korona Bilgi__`,`<a:mumluck:755746645878112308> \`${prefix}korona\` Korona İstatistiklerini Görebilirsiniz`,true)
.addField(`__Avatar__`,`<a:mumluck:755746645878112308> \`${prefix}avatar\` Profil Fotoğrafınızı Görebilirsiniz`,true)
.addField(`__Yapımcım__`,`<a:mumluck:755746645878112308> \`${prefix}yapımcım\` Beni Yapan Kişiyi Görebilirsiniz`,true)
.addField(`__Pixel__`,`<a:mumluck:755746645878112308> \`${prefix}pixel\` Profil Fotoğrafınızı Pixel Yaparsınız`,true)
.addField(`__Zıt Renk__`,`<a:mumluck:755746645878112308> \`${prefix}zıtrenk\` Profil Fotoğrafınızı Zıt Renk Yaparsınız`,true)
.addField(`__Rip Efekt__`,`<a:mumluck:755746645878112308> \`${prefix}rip\` Profil Fotoğrafınızı Rip Efekti Yaparsınız`,true)
.addField(`__Wasted__`,`<a:mumluck:755746645878112308> \`${prefix}rip\` Profil Fotoğrafınızı Wasted Efekti Yaparsınız`,true)
.addField(`__Taş Kağıt Makas__`,`<a:mumluck:755746645878112308> \`${prefix}tkm\` Taş Kağıt Makas Oynarsınız`,true)
.addField(`__Bilgilendirme__`,`<a:mumluck:755746645878112308> \`${prefix}davet\` | EvoBot'yi Sunucunuza Davet Edersiniz\n<a:mumluck:755746645878112308> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(`https://i.hizliresim.com/uWdIiT.png`)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["genel"], 
    permLevel: 0
  };
  exports.help = {
    name: 'genel'
  }; 
  