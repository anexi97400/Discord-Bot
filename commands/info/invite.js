const Discord = require('discord.js');

module.exports = {
	name: 'invite',
	description: 'Invite the bot!',
	category: 'info',
	usage: 'invite',
	run: async (client, message, args) => {

const inviteEmbed = new Discord.MessageEmbed()
.setTitle('Invite links')
.setDescription('[Invite link (recommended)](https://bit.ly/kiyoshii-r)\n[Invite link (admin)](https://bit.ly/kiyoshii-admin)');
} };