const Discord = require("discord.js");
const superagent = require ("superagent");

var fs = require('fs');
var { prefix } = JSON.parse(fs.readFileSync('botconfig.json', 'utf8'));

module.exports.run = async(bot, message, args) => {
  if (!args.length)
  return message.channel.send("**USAGE:** " + `${prefix}subdifference` + " <channel 1> <channel 2> (IDS ONLY)");
  else {
  let c1 = await superagent
  .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics, snippet&id=` + `${args[0]}` + `&key=AIzaSyBWNsnpGwlhVBMAn0_ndT8WmVplYWB4avI`);
  let c2 = await superagent
  .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics, snippet&id=` + `${args[1]}` + `&key=AIzaSyBWNsnpGwlhVBMAn0_ndT8WmVplYWB4avI`);
  
  if (c1.body.pageInfo.totalResults != 1 && c2.body.pageInfo.totalResults != 1)
    return message.channel.send("Both channels not found! Did you type in the ID correctly?");
  else if (c1.body.pageInfo.totalResults != 1)
    return message.channel.send("Channel 1 not found! Did you type in the ID correctly?");
  else if (c2.body.pageInfo.totalResults != 1)
    return message.channel.send("Channel 2 not found! Did you type in the ID correctly?");
    
  var difference;
  if (parseInt(c1.body.items[0].statistics.subscriberCount) > parseInt(c2.body.items[0].statistics.subscriberCount))
  {
    difference = c1.body.items[0].snippet.title + " is in the lead by " + `${c1.body.items[0].statistics.subscriberCount - c2.body.items[0].statistics.subscriberCount}` + " more subscribers";
  }
  else {
    difference = c2.body.items[0].snippet.title + " is in the lead by " + `${c2.body.items[0].statistics.subscriberCount - c1.body.items[0].statistics.subscriberCount}` + " more subscribers";
  }
  
  let subBattle = new Discord.RichEmbed()
  .setColor("#FF0000")
  .setFooter("As of " + message.createdAt)
  .addField(`${c1.body.items[0].snippet.title}` + " vs " + `${c2.body.items[0].snippet.title}`,
  "[" + `${c1.body.items[0].snippet.title}` + "](https://www.youtube.com/channel/" + `${c1.body.items[0].id}` + ")" + ": " + c1.body.items[0].statistics.subscriberCount + " subscribers" +
  "\n" + "[" + `${c2.body.items[0].snippet.title}` + "](https://www.youtube.com/channel/" + `${c2.body.items[0].id}` + ")" + ": " + c2.body.items[0].statistics.subscriberCount + " subscribers" + "\n" +
  `${difference}`)
  
  return message.channel.send(subBattle);
  }
};

module.exports.help = {
  name: "subdifference"
};
