const Discord = require("discord.js");
const { Client, Attachment } = require('discord.js');
const { prefix, token } = require("./botconfig.json");
var { count } = require("./database.json");
const superagent = require ("superagent");

const bot = new Discord.Client({disableEveryone: true});
const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));  
var nunjucks = require('nunjucks');
nunjucks.configure('views', { autoescape: true, express: app });

app.get("/", (request, response) => { // This gets the default url (https://monkey-js.glitch.me)
  console.log(Date.now() + " Ping Received");
  response.render('index.html')
});

app.get("/commands", (request, response) => { // Gets https://monkey-js.glitch.me/commands
  console.log(Date.now() + " Ping Received");
  response.render('cmds.html')
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
    .addField("Available Commands", "Visit this website for the list of commands: https://monkey-js.glitch.me/commands");

    return message.channel.send(helpEmbed);
  }
  else if (cmd === `about`) {
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
  }
  else if (cmd === `subdifference`) {
    if (!args.length)
     return message.channel.send("**USAGE:** " + `${prefix}subdifference` + " <channel 1> <channel 2>");
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
  else if (cmd === `server`)
  {
    if (message.channel.type === 'dm' || !message.guild.available)
      return message.channel.send("An error occurred. Either you did this command in the DMs or the server does not allow it.");
    else
    {
      let server = new Discord.RichEmbed()
      .setTitle(message.guild.name)
      .setDescription(message.guild.id)
      .setThumbnail(message.guild.iconURL)
      .addField("Server Region", message.guild.region)
      .addField("Member Count", message.guild.memberCount)
      .addField("Owner", message.guild.owner)
      .addField("General Channel", message.guild.defaultChannel)
      .addField("Created", message.guild.createdAt);
      return message.channel.send(server);
    }
  }
});


bot.login(token);