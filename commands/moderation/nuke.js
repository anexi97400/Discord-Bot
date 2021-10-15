const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'nuke',
    description: 'Nukes a given channel',
    category: 'moderation',
    usage: 'nuke <reason>',
    authorPermission: ['ADMINISTRATOR'],
    run: async (client, message, args) => {
        const reason = args.join(' ') || 'No Reason';
        if(!message.channel.deletable) {
            return message.reply('This channel cannot be nuked!');
        }
        const newchannel = await message.channel.clone();
        await message.channel.delete();
        const embed = new MessageEmbed()
        .setTitle('Channel Nuked')
        .setDescription(reason)
        .setImage('https://media0.giphy.com/media/oe33xf3B50fsc/200.gif');
        await newchannel.send(embed);
    }
};
