const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let token = new Discord.RichEmbed()  
.setAuthor(`EvoBot`, client.user.avatarURL)
.setColor('#ffd100')
.setDescription(`<a:hypesquad1:750076071721828452> EvoBot botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`Buyur Kardeşim Tokenin 👊`,)
.setImage("https://tenor.com/view/funny-gif-%c3%b6d%c3%bcl-e%c4%9flenceli-prize-gif-14490631")
 message.channel.send(token) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["token"], 
    permLevel: 0
  };
  exports.help = {
    name: 'token'
  }; 
  