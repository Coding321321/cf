const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {




        let Embed = new Discord.RichEmbed()
        .setTitle("Pong!")
        .setFooter("Funk. By: cf#6969");   
        message.channel.send(Embed);
}


module.exports.help = {
    name: "ping"
}
