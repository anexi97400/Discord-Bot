const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: 'setwelcome',
  category: 'moderation',
  usage: 'setwelcome <#channel>',
  description: 'Set the welcome channel',
  run: (client, message, args) => {

    const channel = message.mentions.channels.first();

    if(!channel) {
      return message.channel.send('Please Mention the channel first');
    }

    db.set(`welchannel_${message.guild.id}`, channel.id);

    message.channel.send(`Welcome Channel is seted as ${channel}`);
  }
};