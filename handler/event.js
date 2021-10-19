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

module.exports = (client) => {
        const events = readdirSync('./events/').filter(file =>
            file.endsWith('.js')
        );
        for (const file of events) {
            try {
                const pull = require(`../events/${file}`);
                if (pull.event && typeof pull.event !== 'string') {
                    table.addRow(file, '❌-> Property event should be a string!');
                    continue;
                }
                pull.event = pull.event || file.replace('.js', '');
                table.addRow(file, 'Loaded!');
            } catch (err) {
                console.log('');
                console.log(err);
                table.addRow(file, '❌-> This has an error!');
            }
        }
        console.log(table.toString().cyan);
    };