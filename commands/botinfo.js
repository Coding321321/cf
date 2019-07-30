const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setDescription("Bot Information")
        .setColor("#d9ff00")
        .setThumbnail(bicon)
        .addField("Bot Name", `${bot.user.username}`)
        .addField("Created On", `${bot.user.createdAt}`)
        .addField("Prefix", `${botconfig.prefix}`)
        .addField("Bot Commands:")
        .addField("!Kick @user",)
        .addField("!ban @user")
        .addField("!report @user")
        .addField("!userinfo")
        .addField("!removerole @user role")
        .addField("!addrole @user role")
        .addField("!warn @user reason")
        .addField("!poll")
        .addField("!Doggo")
        .addField("!Verify")
        .addField("!cat")
        .addField("!tempmute", "@user <time>", true)
        .addField("!Pong")
        .addField("!say", "(makes the bot say what you want it to)", true)
        .addField("!clear", "<amount of messages you want to delete>", true)
        .addField("!meme")
        .addField('!kill', '!kill @user', true)
        .addField('!contact', 'Gives you my discord and youtube to contact me', true)
        .addField('!credits', "people who helped with the bot")
        .setFooter("Funk. By: cf#6969");



        const botembed2 = new Discord.RichEmbed()
        .addField('!kms', 'Just kill yourself but on discord')
        .addField('!announce', 'Announce something but you will need a Verified role or it won\'t ping everyone')
        .addField('!8ball', "Do i even need to explain?")
        .addField("!mfo", "Make fun of some text you put")
        .addField("!gif <something you want to search>", "Search for a gif")
        .addField("!cow", "Makes a random cow")
        .addField("!death", "Generates a reason for death")
        .addField("!fortune", "a fortune command")
        .addField("!invite", "Get an invite link to invite the bot to your server")
        .addField("!discord", "Get the link to the testing server for the bot")
        .addField("!fight", "Fights a player you want to fight")
        .setColor(yellow)
        .setFooter("Funk Bt: cf#6969");
    message.channel.send(botembed);
    message.channel.send(botembed2);
}

module.exports.help = {
    name: "help"
}
