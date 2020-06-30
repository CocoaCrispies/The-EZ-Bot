const Discord = require('discord.js');
const client = new Discord.Client();

client.on("message", async message => {
  
  let prefix = "e" 
  
  let args = message.content.slice(prefix.length).trim().split(" ")
  let cmd = args.shift().toLowerCase()
  
  if(message.author.bot) return
  
  if(message.content == `<@${client.id}>` || message.content == `<@!${client.id}>`) {
    message.reply("My prefix for this server is ``" + prefix + "``") 
  }
  if(message.content.includes("ez") {
    let commandFile = require(`./commands/ez.js`)
    commandFile.run(message, client, args, cmd)
  }
  if(!message.content.startsWith(prefix)) return
  try {
    let commandFile = require(`./commands/${cmd}.js`)
    commandFile.run(message, client, args, cmd)
    
  } catch(e) {
   console.log(e.stack) 
  }
  
})

client.login("NzI3MzA4NzgwMDY4NTM2Mzgw.Xvp9Kg.o0tD7PPXY-_K1dszglwczNrDT7k")
