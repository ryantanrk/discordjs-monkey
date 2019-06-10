const { Discord, Attachment } = require("discord.js");

module.exports.run = async(bot, message, args) => {
  const person = new Attachment('https://thispersondoesnotexist.com/image');
  return message.channel.send("Taken from thispersondoesnotexist.com" + "\nsave as jpg", person);
};

module.exports.help = {
  name: "person"
};
