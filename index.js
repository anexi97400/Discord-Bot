const { Collection } = require("discord.js");
const { DiscordBot } = require('./base/DiscordBot')

const client = new DiscordBot({
    fetchAllMembers: !0,
    autoReconnect: !0,
    messageCacheMaxSize: 20,
    partials: ["MESSAGE", "CHANNEL", "GUILD_MEMBER", "REACTION", "GUILD_VOICE_STATES"],
    intents: [
        "GUILD_MEMBERS",
        "GUILDS",
        "GUILD_VOICE_STATES",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_BANS",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES",
        "DIRECT_MESSAGES",
        "GUILD_INTEGRATIONS",
        "GUILD_WEBHOOKS",
        "GUILD_MESSAGE_TYPING",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING",
        "GUILD_MESSAGE_REACTIONS",
    ],
    allowedMentions: {
        parse: ["users", "roles"]
    },
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./base")(client);

client.login(client.config.token);