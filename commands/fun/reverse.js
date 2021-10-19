module.exports = {
    name: 'reverse',
    description: 'Reverses the given text',
    category: 'fun',
    run: async (client, message, args) => {
        if (!args.length) return message.reply('Please give something to reverse!');

        message.channel.send(args.join(' ').split(' ').reverse().join(''));
    }
};

/*
sample string - hello
array - ['h','e','l','l','o']
reversed - ['o','l','l','e','h']
result - olleh
*/
