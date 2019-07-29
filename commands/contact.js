const Discord = require('discord.js');
const config = require('../botconfig');
const blue = config.blue;


module.exports.run = async (bot, message, args) => {
  const cEmbed = new Discord.RichEmbed()
  .setColor(blue)
  .setDescription("Contact the owner with discord/youtube - Youtube: cf, Discord: cf#4693");
  message.channel.send(cEmbed);
}


module.exports.help = {
  name: 'contact'
}
