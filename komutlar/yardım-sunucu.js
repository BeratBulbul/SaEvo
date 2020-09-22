const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`EvoBot Sunucu Komutları`, client.user.avatarURL)
.setColor('#ffd100')
.setDescription(`<a:hypesquad1:750076071721828452> EvoBot botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Duyuru__`,`<a:mumluck:755746645878112308> \`${prefix}duyuru\` Sunucunzuda Duyuru Yaparsınız`,true)
.addField(`__Oylama__`,`<a:mumluck:755746645878112308> \`${prefix}oylama\` Sunucunuzda Oylama Yaparsınız`,true)
.addField(`__Sohbet Aç__`,`<a:mumluck:755746645878112308> \`${prefix}aç\`  Sunucunuzda Sohbet Açarsınız`,true)
.addField(`__Sohbet Kapat__`,`<a:mumluck:755746645878112308> \`${prefix}kapat\` Sunucunuzda Sohbet Kapatırsınız `,true)
.addField(`__Sohbet Gizle__`,`<a:mumluck:755746645878112308> \`${prefix}gizle\`  Sunucunuzda Sohbet Gizlerseiniz`,true)
.addField(`__Çekiliş__`,`<a:mumluck:755746645878112308> \`${prefix}çekiliş\` Sunucunuzda Çekiliş Yaparsınız`,true)
.addField(`__Hızlı Çek__`,`<a:mumluck:755746645878112308> \`${prefix}hızlıçek\` Sunucunuzda Hızlı Çekiliş Yaparsınız`,true)
.addField(`__Üye Durum__`,`<a:mumluck:755746645878112308> \`${prefix}üyedurum\` Sunucunuzun Üye Durumu`,true)
.addField(`__Sunucu Bilgi__`,`<a:mumluck:755746645878112308> \`${prefix}scbilgi\` Sunucunuzun Bilgileri`,true)
.addField(`__Sunucu Davet__`,`<a:mumluck:755746645878112308> \`${prefix}sunucudavet \`Sunucunuzun Sınırsız Daveti `,true)
.addField(`__Canlı Destek__`,`<a:mumluck:755746645878112308> \`${prefix}canlı-destek\` Sunucunuzda Canlı Destek `,true)
.addField(`__Odaya Çek__`,`<a:mumluck:755746645878112308> \`${prefix}çek\` Sunucunuzda Berirlenen Kişiyi Ses'e Çekersiniz `,true)
.addField(`__Ban Sorgu__`,`<a:mumluck:755746645878112308> \`${prefix}bansorgu\` Kişinin Neden Banlandığını Görürsünüz`,true)
.addField(`__Reklam Tara__`,`<a:mumluck:755746645878112308> \`${prefix}reklam-tara\` Sunucunuzda Reklamları Tararsınız`,true)
.addField(`__Sesli Sustur__`,`<a:mumluck:755746645878112308> \`${prefix}sesli-sustur\` Sunucunuzda Süreli Susturursunuz`,true)
.addField(`__Bilgilendirme__`,`<a:mumluck:755746645878112308> \`${prefix}davet\` | EvoBot'yi Sunucunuza Davet Edersiniz\n<a:hypesquad1:750076071721828452> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(`https://i.hizliresim.com/uWdIiT.png`)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["sunucu","sunucu"], 
    permLevel: 0
  };
  exports.help = {
    name: 'sunucu'
  }; 
  