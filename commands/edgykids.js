const Discord = require("discord.js");
const superagent = require ("superagent");

module.exports.run = async(bot, message, args) => {
  let edgykids = await superagent
  .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics, snippet&id=UCTQeRzZ6WNipajDTT0YI2lw&key=AIzaSyBWNsnpGwlhVBMAn0_ndT8WmVplYWB4avI`);
  let ryan = await superagent
  .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics, snippet&id=UCMruWnoMUAx2iay-qjpAWPQ&key=AIzaSyBWNsnpGwlhVBMAn0_ndT8WmVplYWB4avI`);
  let vis = await superagent
  .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics, snippet&id=UCQevvBNk_sdBVsvpXbF-j4A&key=AIzaSyBWNsnpGwlhVBMAn0_ndT8WmVplYWB4avI`);
  let sillybunny = await superagent
  .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics, snippet&id=UCoI_Yxs0LiNbRUBUg_EIEVA&key=AIzaSyBWNsnpGwlhVBMAn0_ndT8WmVplYWB4avI`);
  let tay = await superagent
  .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics, snippet&id=UCMCLKe6dXWbzA0JOFHjufew&key=AIzaSyBWNsnpGwlhVBMAn0_ndT8WmVplYWB4avI`);
  let justname = await superagent
  .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics, snippet&id=UCCKGxJRBWA5G3_CBxy9EMMQ&key=AIzaSyBWNsnpGwlhVBMAn0_ndT8WmVplYWB4avI`);
  let tomo = await superagent
  .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics, snippet&id=UC7RmWwr7NZqioHTADipnw1Q&key=AIzaSyBWNsnpGwlhVBMAn0_ndT8WmVplYWB4avI`);
  let bod = await superagent
  .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics, snippet&id=UCYYYHRLaPWiKKVGbwRmXMPg&key=AIzaSyBWNsnpGwlhVBMAn0_ndT8WmVplYWB4avI`);
  let farel = await superagent
  .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics, snippet&id=UCbOiDYlmXk1d5Jv4BQx_N8w&key=AIzaSyBWNsnpGwlhVBMAn0_ndT8WmVplYWB4avI`);
  let omrooshi = await superagent
  .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics, snippet&id=UCivx-96jV0cwV3xBj4EOB3A&key=AIzaSyBWNsnpGwlhVBMAn0_ndT8WmVplYWB4avI`);
  let decode = await superagent
  .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics, snippet&id=UCWPlp-o_d_165wFy6oHbvig&key=AIzaSyBWNsnpGwlhVBMAn0_ndT8WmVplYWB4avI`);
  
  let subEmbed = new Discord.RichEmbed()
  .setThumbnail("https://yt3.ggpht.com/a-/AAuE7mAdFJWO-YpHaqN_eO7kV3uJ4ATw4-k5-3Mo6g=s88-mo-c-c0xffffffff-rj-k-no")
  .setColor("#FF0000")
  .setFooter("As of " + message.createdAt)
  .addField("Edgy Kids Sub Count",
  "**" + `${edgykids.body.items[0].snippet.title}` + ":** " + edgykids.body.items[0].statistics.subscriberCount + " subscribers" +
  "\n" + `${ryan.body.items[0].snippet.title}` + ": " + ryan.body.items[0].statistics.subscriberCount + " subscribers" +
  "\n" + `${vis.body.items[0].snippet.title}` + ": " + vis.body.items[0].statistics.subscriberCount + " subscribers" +
  "\n" + `${sillybunny.body.items[0].snippet.title}` + ": " + sillybunny.body.items[0].statistics.subscriberCount + " subscribers" +
  "\n" + `${tay.body.items[0].snippet.title}` + ": " + tay.body.items[0].statistics.subscriberCount + " subscribers" +
  "\n" + `${justname.body.items[0].snippet.title}` + ": " + justname.body.items[0].statistics.subscriberCount + " subscribers" +
  "\n" + `${tomo.body.items[0].snippet.title}` + ": " + tomo.body.items[0].statistics.subscriberCount + " subscribers" +
  "\n" + `${bod.body.items[0].snippet.title}` + ": " + bod.body.items[0].statistics.subscriberCount + " subscribers" +
  "\n" + `${farel.body.items[0].snippet.title}` + ": " + farel.body.items[0].statistics.subscriberCount + " subscribers" +
  "\n" + `${omrooshi.body.items[0].snippet.title}` + ": " + omrooshi.body.items[0].statistics.subscriberCount + " subscribers" +
  "\n" + `${decode.body.items[0].snippet.title}` + ": " + decode.body.items[0].statistics.subscriberCount + " subscribers"
  );
  message.channel.send(subEmbed);
};

module.exports.help = {
  name: "edgykids"
};
