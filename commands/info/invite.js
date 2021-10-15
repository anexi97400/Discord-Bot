const Discord = require('discord.js');
const { MessageButton, MessageActionRow } = require('discord-buttons');


module.exports = {
	name: 'invite',
	description: 'Invite the bot!',
	category: 'info',
	usage: 'invite',
	run: async (client, message, args) => {

const inviteEmbed = new Discord.MessageEmbed()
.setTitle('Invite links')
.setDescription('[Invite link (recommended)](https://bit.ly/kiyoshii-r)\n[Invite link (admin)](https://bit.ly/kiyoshii-admin)');

const button = new MessageButton()
  .setStyle('url')
  .setURL('https://bit.ly/kiyoshii-r')
  .setLabel('Recommended');

const button2 = new MessageButton()
  .setStyle('url')
  .setURL('https://bit.ly/kiyoshii-admin')
  .setLabel('Admin');


const row = new MessageActionRow()
  .addComponents(button, button2);

message.channel.send(inviteEmbed, row);} };