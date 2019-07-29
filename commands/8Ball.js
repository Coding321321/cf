const Discord = require('discord.js');
let config = require('../botconfig.json');
let cyan = config.cyan;



module.exports.run = async (bot, message, args) => {
  if(!args[3]) return message.reply("Please ask a full question!");
  let replies = [
    "Yes",
    "No",
    "I Don't know...",
    "Ask again later",
    "I don't know and i don't care",
    "Maybe...",
    "Why are you asking me?"
  ];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");

  let ballEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor(cyan)
  .addField("Question", question)
  .addField("Answer", replies[result]);

  message.channel.send(ballEmbed);
}


module.exports.help = {
  name: "8ball"
}
