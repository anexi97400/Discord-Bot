const { Client, CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    ownerOnly: false,
    description: 'show Bot Latency',
    userperm: [],
    botperm: [],


    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      //  interaction.editReply({content : `Ping : ${client.ws.ping}`})
      const circles = {
        green: '✔️',
        yellow: '🟠',
        red: '❌'
    };
    const pingEmbed = new MessageEmbed()

        .setDescription(
            `${client.ws.ping <= 200 ? circles.green : client.ws.ping <= 400 ? circles.yellow : circles.red} ${client.ws.ping}ms`
        );
    interaction.followUp({ embeds: [pingEmbed] });

    }
};
