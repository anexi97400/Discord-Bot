const client = require('../index');
const mongoose = require('mongoose');
const chalk = require('chalk');
const { cyan } = require('chalk');
const { mongoUrl } = require('../config/config.json');

client.on('ready', () => {


// / connecting mongo db
    mongoose
    .connect(mongoUrl, {
        useUnifiedTopology : true,
        useNewUrlParser : true,
    }).then(
        console.log((
            `[DATABASE] ${client.user.username} connected to Mongo DB `.cyan
          )
        )
      )
      .catch((err) =>
        console.log(
          chalk.bgRedBright.black(
            `[DB ERROR] ${client.user.username} could not connect to mongo DB `
          )
        )
      );
      const allMembers = new Set();
      client.guilds.cache.forEach((guild) => {
        guild.members.cache.forEach((member) => {
          allMembers.add(member.user.id);
        });
      });

      const allChannels = new Set();
      client.guilds.cache.forEach((guild) => {
        guild.channels.cache.forEach((channel) => {
          allChannels.add(channel.id);
        });
      });

      console.log('[STATS]'.cyan +
        (` ${client.guilds.cache.size} servers `.cyan),
        (` ${client.channels.cache.size} channels `.cyan),
        (` ${allMembers.size} members `.cyan)
      );

// / loading bot
console.log(`[BOT] ${client.user.tag} is Online!`.cyan);
client.user.setActivity('dsc.gg/franxx');
});