const Discord = require("discord.js");
const fs = require("fs");
const { Client } = require('discord.js');
const { prefix, token } = require("./botconfig.json");

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
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
  response.sendStatus(200);
  response.render('index.html')
});

app.get("/commands", (request, response) => { // Gets https://monkey-js.glitch.me/commands
  console.log(Date.now() + " Ping Received");
  response.render('cmds.html')
});

bot.on('ready', () => {
  console.log(`Successfully loaded! Logged in as ${bot.user.tag}!`);
  bot.user.setPresence({
    game: {
      name: 'your every move (m?)',
      type: "WATCHING",
      url: "https://www.twitch.tv/fwwwosty"
    }
  })
});

//Separator lol
console.log("-------------------------------------------------------");

//file system for command handler
fs.readdir("./commands/", (err, file) => {
  if (err) console.log(err);
  
  let jsfile = file.filter(f => f.split(".").pop() === "js");
  
  if (jsfile.length <= 0) {
    console.log("Command not found");
    return;
  }
  
  jsfile.forEach((f) => {
    let props = require(`./commands/${f}`);
    
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on('message', async message => {
    if (message.author.bot) return;
  
// initialize variables
  var args = message.content.slice(prefix.length).split(" ");
  const cmd = args.shift().toLowerCase();

// Logging
  if (message.content.startsWith(prefix) || message.channel.type === 'dm')
  console.log("[" + message.createdAt + "]" + "[" + message.channel.id + "]" + message.author.tag + ': ' + message.content);
  
// Check for prefix at the start of message
  if (!message.content.startsWith(prefix)) return;
  
  //if command file is available then run the command file in ./commands
  let cmdFile = bot.commands.get(cmd);
  if (cmdFile) 
    cmdFile.run(bot, message, args);
  else
    return message.channel.send("Invalid command!");
});

bot.login(token);