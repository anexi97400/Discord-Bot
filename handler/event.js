const { Client } = require('discord.js');
const { glob } = require('glob');
const { promisify } = require('util');
const globPromise = promisify(glob);
const { readdirSync } = require('fs');
const ascii = require('ascii-table');
const table = new ascii('Events');
table.setHeading('Event', 'Load Status');
/**
 * @param {Client} client
 */
// loading events in log
module.exports = async (client) => {
    try {
        readdirSync('./events/').forEach((dir) => {
          const events = readdirSync(`./events/${dir}/`).filter((file) =>
            file.endsWith('.js')
          );
          for (const file of events) {
            const pull = require(`../events/${dir}/${file}`);
            if (pull.name) {
              client.commands.set(pull.name, pull);
              table.addRow(file, '❌-> Property event should be a string!');
            } else {
              table.addRow(
                file,
                'Loaded!'
              );
              continue;
            }
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach((alias) => client.aliases.set(alias, pull.name));
          }
        });
        console.log(table.toString().cyan);
      } catch (e) {
        console.log(String(e.stack).bgRed);
      }};