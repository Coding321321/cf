const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let uicon = message.author.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setThumbnail(uicon)
        .setTitle(`${message.author.username} Info`)
        .setColor("#15f153")
        .addField("Username", message.author.username, true)
        .addField("User Id", message.author.id, true)
        .addField("Joined discord", message.author.createdAt)
        .addField("Roles", message.member.roles.array(), true)
        .addField('Status', message.author.presence.status, true)
        .setFooter("Server Bot. By: cf#6969");
        message.channel.send(botembed);

}

module.exports.help = {
    name: "userinfo"
}
