const Discord = require("discord.js");
const youtube = require("simple-youtube-api");

var fs = require('fs');
var { prefix } = JSON.parse(fs.readFileSync('botconfig.json', 'utf8'));

module.exports.run = async(bot, message, args) => {
  var yt = new youtube("AIzaSyBWNsnpGwlhVBMAn0_ndT8WmVplYWB4avI")
  var index = 0;
  var results = await yt.searchChannels(args[0], 5);
  var searchResults = new Discord.RichEmbed()
  .setColor('#ff0000')
  .setTitle("Search Results")
  .addField("Channels", `${results.map(channel => `**${++index}.** [${channel.raw.snippet.title}](https://youtube.com/channel/${channel.raw.id.channelId}) \n${channel.raw.snippet.description}`).join('\n')}`);
  
  message.channel.send(searchResults);
  try {var response = await message.channel.awaitMessages(saymessage => saymessage.content > 0 && saymessage.content < 11, {time: 5000, maxMatches: 1, errors: ['time']});}
  catch (err) { 
    console.error(err);
    return message.channel.send("No or invalid value entered, cancelling.");
  }
  const choice = parseInt(response.first().content);
  var channel = await yt.getChannelByID(results[choice - 1].raw.id.channelId);
  
  console.log(channel);
  return message.channel.send(channel.title);
};

module.exports.help = {
  name: "ytchannel"
};
