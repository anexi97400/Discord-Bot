const { Player } = require('discord-player');
const util = require('util');
const GiveawayManagerWithOwnDatabase = require('./GiveawayManager');
const vvoice = require('discord-voice');
const config = require('../config');
const createClientVars = require('../utils/function');
const { Client, Collection } = require('discord.js');

class Bot extends Client {
    constructor(options) {
        super(options);
        createClientVars(this);
        this.player = new Player(this, {
            leaveOnEnd: !1,
            leaveOnStop: !0,
            leaveOnEmpty: !0,
            enableLive: !0,
            ytdlDownloadOptions: {
                quality: 'highest',
                filter: 'audioonly',
            },
            timeout: 0,
            volume: 65,
            quality: 'high'
        });
        this.guildInvites = new Map();
        this.wait = util.promisify(setTimeout);
        this.queue = new Map();
        const e = new vvoice(this, config.database.MongoURL);
        this.discordVoice = e;
        this.commands = new Collection();

        const manager = new GiveawayManagerWithOwnDatabase(this, {
            storage: false,
            updateCountdownEvery: 5000,
            default: {
                botsCanWin: false,
                embedColor: '#2C2F33',
                embedColorEnd: '#2C2F33',
                reaction: '🎉'
            }
        });
        this.manager = manager;
    }
}
module.exports = Bot;