const { answers } = require('../../data/answers.json');
const { MessageEmbed } = require('discord.js');
const { embedcolor } = require('../..');

module.exports = {
    name: '8ball',
    description: 'Ask something to the magic 8ball.',
    category: 'fun',
    run: async (client, message, args) => {
	if (!args.length) return message.channel.send('You need to ask the magic 8ball something, dude.');

	message.reply('**You shake your 8ball and think hard, yet simple.**\n:8ball: You look into your 8ball and see ' + answers[Math.floor(Math.random() * answers.length)] + '.');}

};