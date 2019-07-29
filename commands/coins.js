const Discord = require("discord.js");
const fs = require('file-system');
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
    //!coins
    if(!coins[message.author.id]){
        coins[message.author.id] = {
            coins: 0
        };
    }

    let uCoins = coins[message.author.id].coins;

    let uicon = message.author.displayAvatarURL;
    let coinEmbed = new Discord.RichEmbed()
    .setThumbnail(uicon)
    .setAuthor(message.author.username)
    .setColor("#00FF00")
    .addField("💸", uCoins)
    .setFooter("Server Bot. By: cf#6969");
    message.channel.send(coinEmbed)

}
module.exports.help = {
    name: "coins"
}
