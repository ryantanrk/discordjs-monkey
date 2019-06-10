const Discord = require("discord.js");
const { Attachment } = require("discord.js");
const monkeys = [
    "https://media.giphy.com/media/WMrNBVGsE4io8/giphy.gif",
    "https://media.giphy.com/media/3o85xAYQLOhSrmINHO/giphy.gif",
    "https://media.giphy.com/media/SiMcadhDEZDm93GmTL/giphy.gif",
    "https://media.giphy.com/media/QeIemzJ8zzakE/giphy.gif",
    "https://media.giphy.com/media/73vsXqHC22yuA/giphy.gif"
];
const monkey = new Attachment(monkeys[Math.floor(Math.random()*monkeys.length)]);

module.exports.run = async(bot, message, args) => {
  
  message.channel.send(monkey);
};

module.exports.help = {
  name: "monkey"
};
