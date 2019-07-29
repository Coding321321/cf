const Discord = require("discord.js");
const fs = require("file-system");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
    //!pay @user amount

    if(!coins[message.author.id]){
        let pay1Embed = new Discord.RichEmbed()
        .addField("You don't have any coins!");
        return message.reply(pay1Embed);
    }
    let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

    if(!coins[pUser.id]){
        coins[pUser.id] = {
            coins: 0
        };
    }

    let pCoins = coins[pUser.id].coins;
    let sCoins = coins[message.author.id].coins;
    let pay2Embed = new Discord.RichEmbed()
    .addField("Not enough coins there!");
    if(sCoins < args[0]) return message.reply(pay2Embed);

    coins[message.author.id] = {
        coins: sCoins - parseInt(args[1])
    };

    coins[pUser.id] = {
        coins: pCoins + parseInt(args[1])
    };

    message.channel.send(`${message.author} has given ${pUser} ${args[1]} coins.`);

    fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
        if(err) console.log(err)
});



}


module.exports.help = {
    name: "pay"
}
