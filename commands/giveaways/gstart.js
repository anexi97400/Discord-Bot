const { MessageEmbed } = require('discord.js');
const ms = require('ms');
const config = require("../../config.json")

module.exports = {
        name: "gstart",
        description: "Starts a giveaway.",
        authorPermission: ["MANAGE_MESSAGES"],
        aliases: [],
        category: "moderation",
        usage: "gstart <channel_mention> <giveaway_time> <number of winners> <prize>",

    run: async (client, message, args) => {

        
        
const yay = client.emojis.cache.get("885978385514385429");

    // Giveaway channel
    let giveawayChannel = message.mentions.channels.first();
    // If no channel is mentionned
    if(!giveawayChannel){
        return message.channel.send(':x: You have to mention a valid channel!');
    }

    // Giveaway duration
    let giveawayDuration = args[1];
    // If the duration isn't valid
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send(':x: You have to specify a valid duration!');
    }

    // Number of winners
    let giveawayNumberWinners = args[2];
    // If the specified number of winners is not a number
    if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)){
        return message.channel.send(':x: You have to specify a valid number of winners!');
    }

    // Giveaway prize
    let giveawayPrize = args.slice(3).join(' ');
    // If no prize is specified
    if(!giveawayPrize){
        return message.channel.send(':x: You have to specify a valid prize!');
    }

    // Start the giveaway
    client.giveawaysManager.start(giveawayChannel, {
        // The giveaway duration
        time: ms(giveawayDuration),
        // The giveaway prize
        prize: giveawayPrize,
        // Last Chance
        lastChance: {
            enabled: true,
            content: '⚠️ **LAST CHANCE TO ENTER !** ⚠️',
            threshold: 5000,
            embedColor: '#2C2F33'
        },
        // The giveaway winner count
        winnerCount: parseInt(giveawayNumberWinners),
        // Who hosts this giveaway
        hostedBy: config.hostedBy ? message.author : null,
        // Messages
        messages: {
            giveaway: (config.everyoneMention ? "@everyone\n" : "")+`${yay}  **GIVEAWAY**  ${yay}`,
            giveawayEnded: (config.everyoneMention ? "@everyone\n\n" : "")+`${yay}  **GIVEAWAY ENDED**  ${yay}`,
            timeRemaining: "Time remaining: **{duration}**!",
            inviteToParticipate: "React with 🎉 to enter!",
            winMessage: "Congratulations, {winners}! You won **{prize}**!",
            embedFooter: "Giveaways",
            noWinner: "Giveaway cancelled, no valid participations.",
            hostedBy: "Hosted by: {user}",
            winners: "winner(s)",
            endedAt: "Ended at",
            units: {
                seconds: "seconds",
                minutes: "minutes",
                hours: "hours",
                days: "days",
                pluralS: false // Not needed, because units end with a S so it will automatically removed if the unit value is lower than 2
            }
        }
    });

    message.channel.send(`Giveaway started in ${giveawayChannel}!`);

}
}