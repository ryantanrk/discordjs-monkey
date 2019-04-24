const Discord = require("discord.js");
const { Client, Attachment } = require('discord.js');
const { prefix, token } = require("./botconfig.json");
var { count } = require("./database.json");
const superagent = require ("superagent");

const bot = new Discord.Client({disableEveryone: true});

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

bot.on('ready', () => {
  console.log(`Successfully loaded! Logged in as ${bot.user.tag}!`);
  bot.user.setPresence({
    game: {
      name: 'your every move',
      type: "WATCHING",
      url: "https://www.twitch.tv/fwwwosty"
    }
  })
});

bot.on('message', async message => {
// initialize variables
  var args = message.content.slice(prefix.length).split(" ");
  var saymessage = args.slice(1).join(" ");
  const cmd = args.shift().toLowerCase();
  const monkeys = [
    "https://media.giphy.com/media/WMrNBVGsE4io8/giphy.gif",
    "https://media.giphy.com/media/3o85xAYQLOhSrmINHO/giphy.gif",
    "https://media.giphy.com/media/SiMcadhDEZDm93GmTL/giphy.gif",
    "https://media.giphy.com/media/QeIemzJ8zzakE/giphy.gif",
    "https://media.giphy.com/media/73vsXqHC22yuA/giphy.gif"
  ];
  var decision = ["yes", "no", "maybe"];

// Logging
  if (message.author.bot) return;
  
  if (message.content.startsWith(prefix) || message.channel.type === 'dm')
  console.log("[" + message.createdAt + "]" + "[" + message.channel.id + "]" + message.author.tag + ': ' + message.content);
  
// Check for prefix at the start of message
  if (!message.content.startsWith(prefix)) return;
  
// Commands
  if (cmd === `help`) {
    let helpEmbed = new Discord.RichEmbed()
    .setColor("#795138")
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("Available Commands", "Visit this website for the list of commands: https://monkeybotjs.glitch.me/cmds.html");

    return message.channel.send(helpEmbed);
  }
  else if (cmd === `about`) {
    var uptime = (bot.uptime/1000);
    
    let about = new Discord.RichEmbed()
    .setColor("#F0FF00")
    .setThumbnail(bot.user.displayAvatarURL)
    .setTitle("Website")
    .setURL("https://monkey-js-web.glitch.me/")
    .setFooter(message.createdAt)
    .addField("About", 'I am a monkey running on discord.js' + '\nMade by Ryan' + '\nBot Uptime (this session): ' + uptime + ' seconds' + '\nHosted on https://glitch.com/');

    return message.channel.send(about);
  }
  else if (cmd === `ping`) {
    return message.channel.send("pong");
  }
  else if (cmd === `avatar`) {
    return message.channel.send(message.author.avatarURL);
  }
  else if (cmd === `say`) {
    if (!args.length)
    return message.channel.send("**USAGE:** " + `${prefix}say` + " <arguments>")
    else
    return (message.channel.send(`${saymessage}`));
  }
  else if (cmd === `monkey`) {
    const monkey = new Attachment(monkeys[Math.floor(Math.random()*monkeys.length)]);
    message.channel.send(monkey);
  }
  else if (cmd === `yesno`) {
    if (!args.length)
    return message.channel.send("**USAGE:** " + `${prefix}yesno` + " <arguments>");
    else {
    let yesno = new Discord.RichEmbed()
    .setDescription(saymessage)
    .setColor("#795138")
    .addField("The monkey says: ", decision[Math.floor(Math.random()*decision.length)]);

    return message.channel.send(yesno);
  }
  }
  else if (cmd === `person`) {
     const person = new Attachment('https://thispersondoesnotexist.com/image');
     return message.channel.send("Taken from thispersondoesnotexist.com" + "\nsave as jpg", person);
   }
  else if (cmd === `count`) {
     count++
     return message.channel.send("This command has been done " + count + " time(s)");
   }
   else if (cmd === `subcount`) {
     let edgykids = await superagent
     .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCTQeRzZ6WNipajDTT0YI2lw&key=AIzaSyBWNsnpGwlhVBMAn0_ndT8WmVplYWB4avI`);
     let ryan = await superagent
     .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCMruWnoMUAx2iay-qjpAWPQ&key=AIzaSyBWNsnpGwlhVBMAn0_ndT8WmVplYWB4avI`);
     let vis = await superagent
     .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCQevvBNk_sdBVsvpXbF-j4A&key=AIzaSyBWNsnpGwlhVBMAn0_ndT8WmVplYWB4avI`);
     let sillybunny = await superagent
     .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCoI_Yxs0LiNbRUBUg_EIEVA&key=AIzaSyBWNsnpGwlhVBMAn0_ndT8WmVplYWB4avI`);
     let tay = await superagent
     .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCMCLKe6dXWbzA0JOFHjufew&key=AIzaSyBWNsnpGwlhVBMAn0_ndT8WmVplYWB4avI`);
     let justname = await superagent
     .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCCKGxJRBWA5G3_CBxy9EMMQ&key=AIzaSyBWNsnpGwlhVBMAn0_ndT8WmVplYWB4avI`);
     let tomo = await superagent
     .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC7RmWwr7NZqioHTADipnw1Q&key=AIzaSyBWNsnpGwlhVBMAn0_ndT8WmVplYWB4avI`);
     let bod = await superagent
     .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCYYYHRLaPWiKKVGbwRmXMPg&key=AIzaSyBWNsnpGwlhVBMAn0_ndT8WmVplYWB4avI`);
     let farel = await superagent
     .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCbOiDYlmXk1d5Jv4BQx_N8w&key=AIzaSyBWNsnpGwlhVBMAn0_ndT8WmVplYWB4avI`);
     let omrooshi = await superagent
     .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCivx-96jV0cwV3xBj4EOB3A&key=AIzaSyBWNsnpGwlhVBMAn0_ndT8WmVplYWB4avI`);
     let decode = await superagent
     .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCWPlp-o_d_165wFy6oHbvig&key=AIzaSyBWNsnpGwlhVBMAn0_ndT8WmVplYWB4avI`);

     let subEmbed = new Discord.RichEmbed()
     .setThumbnail("https://yt3.ggpht.com/a-/AAuE7mAdFJWO-YpHaqN_eO7kV3uJ4ATw4-k5-3Mo6g=s88-mo-c-c0xffffffff-rj-k-no")
     .setColor("#FF0000")
     .setFooter("As of " + message.createdAt)
     .addField("Edgy Kids Sub Count",
     "**Edgy Kids:** " + edgykids.body.items[0].statistics.subscriberCount + " subscribers" +
     "\nRyan: " + ryan.body.items[0].statistics.subscriberCount + " subscribers" +
     "\nVisualError: " + vis.body.items[0].statistics.subscriberCount + " subscribers" +
     "\nSillyBunny: " + sillybunny.body.items[0].statistics.subscriberCount + " subscribers" +
     "\nTayercx: " + tay.body.items[0].statistics.subscriberCount + " subscribers" +
     "\nJustname8 G: " + justname.body.items[0].statistics.subscriberCount + " subscribers" +
     "\nno0b kitten: " + tomo.body.items[0].statistics.subscriberCount + " subscribers" +
     "\n3bod1000000: " + bod.body.items[0].statistics.subscriberCount + " subscribers" +
     "\nFar3l: " + farel.body.items[0].statistics.subscriberCount + " subscribers" +
     "\nOmrooshi: " + omrooshi.body.items[0].statistics.subscriberCount + " subscribers" +
     "\nDecodxr: " + decode.body.items[0].statistics.subscriberCount + " subscribers"
     );
     message.channel.send(subEmbed);
   }
   else if (cmd === `subbattle`) {
     let pdp = await superagent
     .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC-lHJZR3Gqxm24_Vd_AJ5Yw&key=AIzaSyBWNsnpGwlhVBMAn0_ndT8WmVplYWB4avI`);
     let tseries = await superagent
     .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCq-Fj5jknLsUf-MWSy4_brA&key=AIzaSyBWNsnpGwlhVBMAn0_ndT8WmVplYWB4avI`);

     var difference;
     if (pdp.body.items[0].statistics.subscriberCount > tseries.body.items[0].statistics.subscriberCount)
     {
       difference = "PewDiePie is in the lead by " + `${pdp.body.items[0].statistics.subscriberCount - tseries.body.items[0].statistics.subscriberCount}` + " more subscribers";
     }
     else {
       difference = "T-Series is in the lead by " + `${tseries.body.items[0].statistics.subscriberCount - pdp.body.items[0].statistics.subscriberCount}` + " more subscribers";
     }

     let subBattle = new Discord.RichEmbed()
     .setColor("#FF0000")
     .setFooter("As of " + message.createdAt)
     .setThumbnail("https://i.ytimg.com/vi/Yqz8jHlANW0/maxresdefault.jpg")
     .addField("🏁**PEWDIEPIE VS T-SERIES**🏁",
     "PewDiePie: " + pdp.body.items[0].statistics.subscriberCount + " subscribers" +
     "\nT-Series: " + tseries.body.items[0].statistics.subscriberCount + " subscribers" + "\n" +
     `${difference}`)
     .addField("**How close to 100M?**",
     "PewDiePie: " + `${100000000 - pdp.body.items[0].statistics.subscriberCount}` + " subscribers" +
     "\nT-Series: " + `${100000000 - tseries.body.items[0].statistics.subscriberCount}` + " subscribers");

     message.channel.send(subBattle);
   }
   else if (cmd === `math`) {
     if (!args.length)
     return message.channel.send("**USAGE:** " + `${prefix}math` + " <first number> <operand> <second number>" + "\n(Make sure to add spaces in between)");
     else {
        var operand = args[1];
        var num1 = parseFloat(args[0]);
        var num2 = parseFloat(args[2]);
        var result;
        switch (operand) {
          case "+": result = num1 + num2;
            message.channel.send("The result is " + `${num1 + num2}`);
            break;
          case "-": result = num1 - num2;
            message.channel.send("The result is " + `${result}`);
            break;
          case "*": result = num1 * num2;
            message.channel.send("The result is " + `${result}`);
            break;
          case "/": result = num1 / num2;
            message.channel.send("The result is " + `${result}`);
            break;
          default: message.channel.send("Invalid operand!");
            break;
      }
    }
  }
  else if (cmd === `upsidedown`)
  {
    if (!args.length)
      return message.channel.send("**USAGE:** " + `${prefix}upsidedown` + " <args>")
    saymessage = saymessage.split("").reverse().join("");
    
    var characters = {
      a:"ɐ", b:"q", c:"ɔ", d:"p", e:"ǝ", f:"ɟ", g:"ƃ", h:"ɥ", i:"ᴉ", j:"ɾ", k:"ʞ", m:"ɯ", n:"u", p:"d", q:"b", r:"ɹ", t:"ʇ",
      u:"n", v:"ʌ", w:"ʍ", y:"ʎ", '!':"¡", '"':",,", '?':"¿", "'":",", '.':"˙", ',':"'", '&':'⅋', '`':",", 
      '9':"6", '7':"ㄥ", '6':"9", '5':"ϛ", '4':"ㄣ", '3':"Ɛ", '2':"ᄅ"
    }    
    var upsidesymbols = saymessage.replace(/[&!"?'.,`]/gi, function(matched){
      return characters[matched]});
    var upsideletters = upsidesymbols.replace(/a|b|c|d|e|f|g|h|i|j|k|m|n|p|q|r|t|u|v|w|y|2|3|4|5|6|7|9/gi, function(matched){
      return characters[matched]});
    
    message.channel.send("```" + upsideletters + "```");
  }
  else if (cmd === `bubble`)
  {
    if (!args.length)
      return message.channel.send("**USAGE:** " + `${prefix}bubble` + " <args>");
    
    var bubble = {
      a:"ⓐ", b:"ⓑ", c:"ⓒ", d:"ⓓ", e:"ⓔ", f:"ⓕ", g:"ⓖ", h:"ⓗ", i:"ⓘ", j:"ⓙ", k:"ⓚ", l:"ⓛ", m:"ⓜ",
      n:"ⓝ", o:"ⓞ", p:"ⓟ", q:"ⓠ", r:"ⓡ", s:"ⓢ", t:"ⓣ", u:"ⓤ", v:"ⓥ", w:"ⓦ", x:"ⓧ", y:"ⓨ", z:"ⓩ",
      A:"Ⓐ", B:"Ⓑ", C:"Ⓒ", D:"Ⓓ", E:"Ⓔ", F:"Ⓕ", G:"Ⓖ", H:"Ⓗ", I:"Ⓘ", J:"Ⓙ", K:"Ⓚ", L:"Ⓛ", M:"Ⓜ",
      N:"Ⓝ", O:"Ⓞ", P:"Ⓟ", Q:"Ⓠ", R:"Ⓡ", S:"Ⓢ", T:"Ⓣ", U:"Ⓤ", V:"Ⓥ", W:"Ⓦ", X:"Ⓧ", Y:"Ⓨ", Z:"Ⓩ",
      '1':"➀", '2':"➁", '3':"➂", '4':"➃", '5':"➄", '6':"➅", '7':"➆", '8':"➇", '9':"➈"
    }
    
    var bubbletext = saymessage.replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z|1|2|3|4|5|6|7|8|9/g, 
                                        function(matched){return bubble[matched]});
    
    message.channel.send("```" + bubbletext + "```");
  }
});


bot.login(token);
