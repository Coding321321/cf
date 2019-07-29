const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {




        let Embed = new Discord.RichEmbed()
        .setTitle("Ping!")
        .setFooter("Server Bot. By: cf#6969");   
        message.channel.send(Embed);
}


module.exports.help = {
    name: "pong"
}
