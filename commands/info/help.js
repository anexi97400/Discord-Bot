const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const { default_prefix } = require('../../config/config.json');
const Discord = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Get list of all command and even get to know every command detials',
  usage: 'help <cmd>',
  category: 'info',
  run: async (client, message, args) => {
    if (args[0]) {
      const command = await client.commands.get(args[0]);

      if (!command) {
        return message.reply('There is no command in the bot with name **' + args[0] + '**.');
      }

      const embed = new MessageEmbed()
        .setTitle(command.name[0].toUpperCase() + command.name.slice(1) + ' Command')
        .setDescription(command.description || 'Not Provided :C')
        .addField('Command usage', command.usage ? '```js\n' + default_prefix + command.usage + '```' : 'Not Provided')
        .setColor('#0099ff');


      if(command.aliases && command.aliases.length) embed.addField('Aliases', command.aliases.map(x => '`' + x + '`').join(', '));
      if(command.botPermission && command.botPermission.length) embed.addField('Bot Permissions', command.botPermission.map(x => '`' + x + '`').join(', '), true);
      if(command.authorPermission && command.authorPermission.length) embed.addField('Author Permissions', command.authorPermission.map(x => '`' + x + '`').join(', '), true);

      return message.channel.send(embed);
    } else {
      const commands = await client.commands;

      const emx = new MessageEmbed()
        .setDescription('Use `help <cmd>` to know the usage of the command')
        .setColor('#0099ff')
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL());

      const com = {};
      for (const comm of commands.array()) {
        const category = comm.category || 'Unknown';
        const name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }

      for (const [key, value] of Object.entries(com)) {
        const category = key;

        const desc = '`' + value.join('`, `') + '`';

        emx.addField(`${category.toUpperCase()}[${value.length}]`, desc);
      }

      const database = db.get(`cmd_${message.guild.id}`);

      if (database && database.length) {
        const array = [];
        database.forEach(m => {
          array.push('`' + m.name + '`');
        });

        emx.addField('Custom Commands', array.join(', '));
      }

const inviteEmbed = new Discord.MessageEmbed()
.setTitle('Invite links')
.setDescription('[Invite link (recommended)](https://bit.ly/kiyoshii-r)\n[Invite link (admin)](https://bit.ly/kiyoshii-admin)')
.setColor('#0099ff');

    }}
  };