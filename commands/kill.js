const Discord = require('discord.js');
let config = require('../botconfig.json')
let red = config.red;
module.exports.run = async (bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

  let killEmbed = new Discord.RichEmbed()
  .setColor(red)
  .setDescription(`:knife: I just killed ${kUser}. :knife:`);

  message.channel.send(killEmbed);
}


module.exports.help = {
  name: 'kill'
}
