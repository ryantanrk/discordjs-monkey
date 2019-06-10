const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let helpEmbed = new Discord.RichEmbed()
  .setColor("#795138")
  .setThumbnail(bot.user.displayAvatarURL)
  .addField("Available Commands", "Visit this website for the list of commands: https://monkey-js.glitch.me/commands");
  
  return message.channel.send(helpEmbed);
};

module.exports.help = {
  name: "help"
};
