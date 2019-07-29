const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let kEmbed = new Discord.RichEmbed()
  .setColor("#ff0004")
  .setDescription(`:knife: I have successfully killed ${message.author}. :knife:`);
  message.channel.send(kEmbed);

}


module.exports.help = {
  name: "kms"
}
