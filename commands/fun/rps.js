module.exports = {
	name: 'rps',
	description: 'play a game of rock, paper and scissors',
	category: 'fun',
	run: async (client, message, args) => {
		const msg = await message.channel.send({
			embed: {
				title: 'RPS GAME',
				description: 'React to play!',
				timestamp: new Date()
			}
		});
		await msg.react('🗻');
		await msg.react('✂');
		await msg.react('📰');

		const filter = (reaction, user) => ['🗻', '✂', '📰'].includes(reaction.emoji.name) && user.id === message.author.id;

      const choices = ['🗻', '✂', '📰'];
    const me = choices[Math.floor(Math.random() * choices.length)];
    msg.awaitReactions(filter, { max:1, time: 60000, error: ['time'] }).then(async collected => {
   const reaction = collected.first();
			await msg.edit({
				embed: {
					title: 'RESULT',
					fields: [
						{ name: 'Your choise', value: reaction.emoji.name },
						{ name: 'My choice', value: me }
					]
				}
			});

  if ((me === '🗻' && reaction.emoji.name === '✂') || (me === '📰' && reaction.emoji.name === '🗻') || (me === '✂' && reaction.emoji.name === '📰')) {
 message.reply('You lost!');
} else if (me === reaction.emoji.name) {
return message.reply('It\'s a tie!');
	} else {
	return message.reply('You won!');
	}
    }).catch(collected => {
                message.reply('Process has been cancelled since you did not respond in time!');
            });
	}
};
