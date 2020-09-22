const Discord = require('discord.js');
module.exports.run = async (bot, message, args, guild, user) => {
    let sahip = message.member
   let jsrolu = message.guild.roles.find('id', '752829992622227496')
  if(message.guild.id !== '730777160029175899') return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komudu sadece Kod Paylaşım sunucusunda kullanabilirsin.').setColor('RED'));
    if(!jsrolu) return message.channel.send('Bu sunucuda **JavaScript** isminde bir rol bulunmamakta.')
      if(message.member.roles.has(jsrolu.id)) return message.channel.send(':x: | **js Rolün Var !**')

  try {
      await (sahip.addRole(jsrolu.id));
      message.channel.sendMessage('**Başarılı !**\n**js Rolü Verildi.**')
    } catch (error) {
      return message.channel.send(':x: | **js Rolün Zaten Var !**')
      
};
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
};

exports.help = {
  name: "js",
  description: "js rolü verir.",
  usage: "js"
}