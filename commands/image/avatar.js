const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'avatar',
    description: 'Displays someone\'s avatar!',
    category: 'image',
    usage: 'avatar <member_mention>',
    run: async (client, message, args) => {
        const user = message.mentions.users.first() || message.author || client.users.cache.get(u => u.id === args[0]);
        const avatar = user.displayAvatarURL({ size: 4096, dynamic: true });
        const embed = new MessageEmbed()
        .setTitle('Avatar')
        .setImage(avatar)
        .setTimestamp();
        message.channel.send(embed);
    }
};