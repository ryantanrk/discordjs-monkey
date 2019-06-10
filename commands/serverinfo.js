const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  if (message.channel.type === 'dm' || !message.guild.available)
    return message.channel.send("An error occurred. Either you did this command in the DMs or the server does not allow it.");
  else
  {
    let server = new Discord.RichEmbed()
    .setTitle(message.guild.name)
    .setDescription("Server ID: " + message.guild.id)
    .setThumbnail(message.guild.iconURL)
    .addField("Server Region", message.guild.region)
    .addField("Member Count", message.guild.memberCount)
    .addField("Owner", message.guild.owner)
    .addField("Created", message.guild.createdAt);
    return message.channel.send(server);
  }
};

module.exports.help = {
  name: "serverinfo"
};
