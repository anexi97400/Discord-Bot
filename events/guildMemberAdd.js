/**
 * Required Stuff
 */

 const db = require("quick.db")
 const { CanvasSenpai } = require("canvas-senpai")
 const canva = new CanvasSenpai();
 const discord = require("discord.js")
 
 
 /**
  * @param {Object} [client]
  * @param {Object} [member]
  */
 
 module.exports.run = async (client, member) => {
   const ChannelID = db.get(`welchannel_${member.guild.id}`); 
   if(!ChannelID) return;
   let data = await canva.welcome(member, { link: "https://i.pinimg.com/originals/f3/1c/39/f31c39d56512dc8fbf30f9d0fb3ee9d3.jpg" })
   client.channels.cache.get(ChannelID).send(`Welcome To Our Server ${member.user}. We are happy to have you! You are member number ${member.guild.memberCount}!`, new discord.MessageAttachment(data, "welcome-image.png"));
 }