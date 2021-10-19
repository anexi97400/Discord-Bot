const figlet = require('figlet');

module.exports = {
    name: 'ascii',
    description: 'Converts text to ascii',
    category: 'fun',
    run: async (client, message, args) => {
        if(!args.length) return message.channel.send('Please provide some text');

        figlet.text(args.join(' '), function(err, data) {
            if (err) {
                console.log('Something went wrong');
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('Please provide text shorter than 2000 characters');

            message.channel.send('```' + data + '```');
        });
    }
};
