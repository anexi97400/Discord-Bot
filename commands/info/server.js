const Discord = require('discord.js');
module.exports = {
	name: 'server',
	description: 'Server informations',
	category: "info",
	usage: "server",
	run: async(client, message, args) => {
    
    const serverEmbed = new Discord.MessageEmbed()

	.setTitle('Informations about the server')
	.setDescription(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);

		message.channel.send(serverEmbed);
	},

}