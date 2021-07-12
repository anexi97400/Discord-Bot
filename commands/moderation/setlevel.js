const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setlevel",
  category: "moderation",
  usage: "setlevel <#channel>",
  description: "Set the level channel",
  run: (client, message, args) => {
    
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("Please Mention the channel first")
    }
    
    db.set(`lvlchannel_${message.guild.id}`, channel.id)
    
    message.channel.send(`Level Channel is seted as ${channel}`)
  }
}