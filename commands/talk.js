const Discord = require('discord.js')
exports.run = async  (message, client, args, cmd) => {
  var i;
  for (i = 0; i<=10; i++) {
  message.channel.send((args.toString()).replace(/,/g, " "))
  }
}