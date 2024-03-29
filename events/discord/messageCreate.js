const { MessageEmbed, Collection } = require('discord.js');
const config = require('../../config/config.js');
const ee = require('../../config/config.js');
const client = require('../..');
const prefix = config.prefix;


client.on('messageCreate', async (message) => {
  const { escapeRegex, onCoolDown } = require('../../utils/function');
  if (!message.guild) return;
  if (message.author.bot) return;
  if (message.channel.partial) await message.channel.fetch();
  if (message.partial) await message.fetch();
  const prefixRegex = new RegExp(
    `^(<@!?${client.user.id}>|${escapeRegex(config.prefix)})\\s*`
  );
  if (!prefixRegex.test(message.content)) return;
  const [, matchedPrefix] = message.content.match(prefixRegex);
  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const cmd = args.shift().toLowerCase();
  // getting mention prefix
  if (cmd.length === 0) {
    if (matchedPrefix.includes(client.user.id)) {
      const mention = new MessageEmbed()
      .setDescription(`*To see all Commands* \ntype: \`${config.prefix}help\``)
      .setFooter('© Slow');
      message.reply({
        embeds: [mention],
        allowedMentions: {
         repliedUser: false
     }
     });
    }
  }

// /starting commands & aliases
  const command = client.commands.get(cmd.toLowerCase()) || client.commands.get(client.aliases.get(cmd));

  if (!command) return;
  if (command) {
    const userperm = new MessageEmbed().setDescription(
      `*<a:wrong:885815677091454986> You Need **${command.userperm}** Permission*`
    );

    if (!message.member.permissions.has(command.userperm || []))
      {return message.channel.send({ embeds: [userperm] });}


    // Check if user is on cooldown with the cmd
    if (onCoolDown(message, command)) {
      const cool = new MessageEmbed()
      .setDescription(`*<a:wrong:885815677091454986> Please wait **${onCoolDown(message, command)}** Second(s) before reusing this ${command.name} command!*`);
      return message.channel.send({ embeds : [cool] });
    }

    const botperm = new MessageEmbed().setDescription(
      `*<a:wrong:885815677091454986> I Need **${command.botperm}** Permission*`
    );
    if (!message.guild.me.permissions.has(command.botperm || []))
    {return message.channel.send({ embeds: [botperm] });}

    // / owner only command handler
    const { owner } = require('../../config/config.js');
if (command) {
 if (command.ownerOnly) {
if (!owner.includes(message.author.id)) {
const ownerOnly = new MessageEmbed()
 .setDescription('*<a:wrong:885815677091454986> Only Bot Developer can use this command!*');
return message.channel.send({ embeds: [ownerOnly] });
}}
}

 if (command) command.run(client, message, args, prefix);


  }

  // new start from here
});