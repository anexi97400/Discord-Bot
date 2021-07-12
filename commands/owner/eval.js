module.exports = {
    name: "eval",
    description: "Evaluates a given code",
    ownerOnly: true,
    category: "owner",
    usage: "eval <code>",
    run: async(client, message, args) => {

        let result = eval(args.join(" "))
        message.channel.send(result)
    }
}