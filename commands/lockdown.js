const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = (bot, message, args) => {
    console.log("Broken command don\'t even try using it")
    message.channel.send("Broken command don\'t use it")
 if (message.member.hasPermission("ADMINISTRATOR")) {
     if (!bot.lockit) bot.lockit = [];
     let time = args.join(' ');
     let validUnlocks = ['release', 'unlock'];
     if (!time) return message.reply('You must set a duration for the lockdown in either hours, minutes or seconds');
     if (validUnlocks.includes(time)) {
         message.channel.overwritePermissions(message.guild.id, {
             SEND_MESSAGES: null
         }).then(() => {
             message.channel.send('Lockdown lifted.');
             clearTimeout(bot.lockit[message.channel.id]);
             delete bot.lockit[message.channel.id];
         }).catch(error => {
             console.log(error);
         });
     } else {
         message.channel.overwritePermissions(message.guild.id, {
             SEND_MESSAGES: false
         }).then(() => {
             message.channel.send(`Channel locked down for ${ms(ms(time), { long:true })}`).then(() => {

                 bot.lockit[message.channel.id] = setTimeout(() => {
                     message.channel.overwritePermissions(message.guild.id, {
                         SEND_MESSAGES: null
                     }).then(message.channel.send('Lockdown lifted.')).catch(console.error);
                     delete bot.lockit[message.channel.id];
                 }, ms(time));

             }).catch(error => {
                 console.log(error);
             });
         });
     }
 }
 }
module.exports.help = {
    name: "lockdown",
    description: "Broken command don\'t use it",
    usage: "lockdown <time> example: lockdown 1d(1 day)"
};