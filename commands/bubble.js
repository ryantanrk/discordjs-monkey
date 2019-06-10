const Discord = require("discord.js");
var fs = require('fs');
var { prefix } = JSON.parse(fs.readFileSync('botconfig.json', 'utf8'));

module.exports.run = async(bot, message, args) => {
  var args = message.content.slice(prefix.length).split(" ");
  var saymessage = args.slice(1).join(" ");
  
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
};

module.exports.help = {
  name: "bubble"
};
