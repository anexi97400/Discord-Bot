const db = require('quick.db');

module.exports = {
  name: 'addcmd',
  description: 'add guild custom commands',
  category: 'moderation',
  usage: 'addcmd <cmd_name> <cmd_responce>',
  run: (client, message, args) => {


    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(':x: You need `MANAGE_MESSAGES` perms to use this command');

    const cmdname = args[0];

    if(!cmdname) return message.channel.send(':x: You have to give command name, `addcmd <cmd_name> <cmd_responce>`');

    const cmdresponce = args.slice(1).join(' ');

    if(!cmdresponce) return message.channel.send(':x: You have to give command cmd responce, `addcmd <cmd_name> <cmd_responce>`');

    const database = db.get(`cmd_${message.guild.id}`);

    if(database && database.find(x => x.name === cmdname.toLowerCase())) return message.channel.send(':x: This command name is already added in guild custom commands.');

    const data = {
      name: cmdname.toLowerCase(),
      responce: cmdresponce
    };

    db.push(`cmd_${message.guild.id}`, data);

    return message.channel.send('Added **' + cmdname.toLowerCase() + '** as a custom command in guild.');


  }
};