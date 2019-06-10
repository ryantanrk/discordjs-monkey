const Discord = require("discord.js");
var fs = require('fs');
var { prefix } = JSON.parse(fs.readFileSync('botconfig.json', 'utf8'));

module.exports.run = async(bot, message, args) => {
  var args = message.content.slice(prefix.length).split(" ");
  var saymessage = args.slice(1).join(" ");
  
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
};

module.exports.help = {
  name: "upsidedown"
};
