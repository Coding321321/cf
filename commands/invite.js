const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let iEmbed = new Discord.RichEmbed()
  .setColor('#009dff')
  .setDescription("Oh! you want to invite me to YOUR server? well you can     https://discordapp.com/api/oauth2/authorize?client_id=557968009487056906&permissions=8&scope=bot");
  message.channel.send(iEmbed);
}


module.exports.help = {
  name: 'invite'
}
