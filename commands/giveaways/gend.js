const ms = require('ms');

module.exports = {
    name : 'gend',
    authorPermission: ['MANAGE_MESSAGES'],
    category: 'moderation',
    usage: 'gend <giveaway_id>',
    run : async (client, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have permissions to use this command');
        if(!args[0]) return message.channel.send('Please specify a message id');

        const giveaway = client.giveawaysManager.giveaways.find((g) => g.messageID === args.join(' '));
        if(!giveaway) return message.channel.send('Giveaway not found');

        client.giveawaysManager.edit(giveaway.messageID, {
            setEndTimestamp: Date.now()
        }).then(() => {
            message.channel.send(`Giveaway will end in less than ${client.giveawaysManager.options.updateCountdownEvery / 1000} seconds`);
        }).catch(err => {
            console.log(err);
            message.channel.send('An error occured');
        });

    }
};