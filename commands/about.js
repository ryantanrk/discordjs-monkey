const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  var uptime = (bot.uptime/1000);
  
  let about = new Discord.RichEmbed()
  .setColor("#F0FF00")
  .setThumbnail(bot.user.displayAvatarURL)
  .setFooter(message.createdAt)
  .addField("About", 'I am a monkey running on discord.js' + '\nMade by Ryan <:verified:577498769160142848>' + '\nBot Uptime (this session): ' + uptime + ' seconds' + '\nHosted on [Glitch](https://glitch.com/)'
          + '\n[My Website!](https://monkey-js.glitch.me/)')
  .addField("Created Date", "20-4-2019")
  .addField("Number of Servers", bot.guilds.size);
  
  return message.channel.send(about);
};

module.exports.help = {
  name: "about"
};
