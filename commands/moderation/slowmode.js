module.exports = {
    name: "slowmode",
    description: "Set the slowmode of a channel.",
    category: "moderation",
    usage: "slowmode <channel_mention>",
    authorPermission: ["ADMINISTRATOR"],
    run: async(client, message, args) => {

        let duration = args[0]
        if(isNaN(duration)) return message.reply("Please give the time in seconds.")
        let reason = args.slice(1).join(" ")
        if(!reason) return message.reply("Please specify a reason!")
        
        message.channel.setRateLimitPerUser(duration, reason)
        message.reply(`Successfully set the slowmode to ${duration} seconds with Reason - ${reason}`)
    }
}