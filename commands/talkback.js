const Discord = require('discord.js')
exports.run = async  (message, client, args, cmd) => {
  let userMessage = args[0]
  message.channel.send((userMessage.toString()).replace(/,/g, " "))
}