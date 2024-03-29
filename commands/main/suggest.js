/* eslint-disable no-empty-function */
const { MessageEmbed } = require('discord.js');


module.exports = {
  name: 'suggest',
  usage: 'suggest <message>',
  description: 'Send your Suggestion',
  category: 'main',
  run: (client, message, args) => {

    if(!args.length) {
      return message.channel.send('Please Give the Suggestion');
    }

    const channel = message.guild.channels.cache.find((x) => (x.name === 'suggestion' || x.name === 'suggestions'));


    if(!channel) {
      return message.channel.send('there is no channel with name - suggestions');
    }


    const embed = new MessageEmbed()
    .setAuthor('SUGGESTION: ' + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor('#0099ff')
    .setDescription(args.join(' '))
    .setTimestamp();


    channel.send(embed).then(m => {
      m.react('✅');
      m.react('❌');
    }).catch(err => {});


    message.channel.send('Your suggestion is submitted, so get some coffee and chill out').catch(err => {});

  }
};