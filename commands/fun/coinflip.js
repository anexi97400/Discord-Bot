module.exports = {
    name: 'coinflip',
    description: 'flips a coin!',
    category: 'fun',
    run: async (client, message, args) => {
        const choices = ['heads', 'tails'];

        message.channel.send({
            embed: {
                title: 'Coinflip!',
                description: 'You flipped a **' + choices[Math.floor(Math.random() * choices.length)] + '**!'
            }
        });
    }
};
