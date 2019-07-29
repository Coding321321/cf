const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let pollEmbed = new Discord.RichEmbed()
        .setTitle("Poll")
        .setDescription(args.join(" "));

     message.react("👍")
     message.react("👎")



}



module.exports.help = {
    name: "poll",
    usage: "poll <poll text>"
}
