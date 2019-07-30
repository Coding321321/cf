const Discord = require('discord.js');
const config = require('../botconfig');
const blue = config.blue;


module.exports.run = async (bot, message, args) => {
  const cEmbed = new Discord.RichEmbed()
  .setColor(blue)
  .setDescription("Contact the owner with discord/youtube - Youtube: https://www.youtube.com/channel/UCaiWtcYJfcQIk3SpmLBVMvA?view_as=subscriber, Discord: cf#6969");
  message.channel.send(cEmbed);
}


module.exports.help = {
  name: 'contact'
}
