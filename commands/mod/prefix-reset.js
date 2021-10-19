const Discord = require('discord.js');
const { confirmation } = require('@reconlx/discord.js');
const { default_prefix } = require('../../config/config.json');
const db = require('quick.db');
const confirmationEmbed = new Discord.MessageEmbed()
.setTitle('Prefix Reset')
.setDescription('Are you sure you want to reset the prefix?');

module.exports = {
    name : 'prefix-reset',
    category: 'moderation',
    usage: 'prefix-reset',
    aliases: ['rprefix', 'reset-prefix', 'prefix-reset', 'resetprefix', 'prefixreset'],
    description: 'Reset the guild prefix',
    run : async (client, message, args) => {
        message.channel.send(confirmationEmbed).then(async (msg) => {
            const emoji = await confirmation(msg, message.author, ['✅', '❌'], 10000);
            if(emoji === '✅') {
                msg.delete();
                await db.delete(`prefix_${message.guild.id}`);
                message.channel.send(`Prefix reseted to ${default_prefix} ✅`);
            }
            if(emoji === '❌') {
                msg.delete();
                message.channel.send('reset prefix has been cancelled.');
            }
        });

    }
};
