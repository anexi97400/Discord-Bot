const Discord = require('discord.js');
module.exports = {
	name: 'members',
	description: 'Show the number of members',
	category: "info",
	run: async(client, message, args) => {

	const membersEmbed = new Discord.MessageEmbed()

	.setTitle('Number of members')
	.setDescription(`Total members: ${message.guild.memberCount}`);

		message.channel.send(membersEmbed);
	},
};


