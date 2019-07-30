const Discord = require('discord.js');
let config = require('../botconfig.json');
let cyan = config.cyan;



module.exports.run = async (bot, message, args) => {
  let cEmbed = new Discord.RichEmbed()
  .setColor(cyan)
  .setTitle("Credits:")
  .setDescription("Creator: cf#6969")
  .addField("Logo Maker:", "FridayBlox#4386");


  message.channel.send(cEmbed);
}



module.exports.help = {
  name: 'credits'
}
