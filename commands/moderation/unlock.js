const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'unlock',
    description: 'Unlocks a given channel for a particular role!',
    category: 'moderation',
    usage: 'unlock <channel_mention>',
    run: async (client, message, args) => {
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('You do not have enough perms to use this cmd!');
        const channel = message.mentions.channels.first();
        if(!channel) return message.reply('Please mention a valid channel!');
        const roletofind = args.slice(1).join(' ');
        const role = message.guild.roles.cache.find(r => r.id === roletofind);
        if(!role) return message.reply('Please give a valid role id!');
        const embed = new MessageEmbed()
        .setTitle('channel unlocked!')
        .setDescription(`This channel has been unlocked by ${message.author.tag}`)
        .setTimestamp();
        channel.updateOverwrite(role, {
            SEND_MESSAGES: true
        });
        await channel.send(embed);
    }
};