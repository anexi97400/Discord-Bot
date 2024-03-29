const weather = require('weather-js');
const Discord = require('discord.js');


module.exports = {
  name: 'weather',
  description: 'Get the weather of anywhere',
  category: 'info',
  usage: 'weathet <>',
  run: (client, message, args) => {


    if (!args.length) {
      return message.channel.send('Please give the weather location');
    }


  /**
   * SOCIAL DISTANICING yk
   *
   * Stay Safe
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   */


    weather.find({ search: args.join(' '), degreeType: 'C' }, function(err, result) {
      try {

        const embed = new Discord.MessageEmbed()
          .setTitle(`Weather - ${result[0].location.name}`)
          .setColor('#0099ff')
          .setDescription('Temperature units can may be differ some time')
          .addField('Temperature', `${result[0].current.temperature} Celcius`, true)
          .addField('Sky Text', result[0].current.skytext, true)
          .addField('Humidity', result[0].current.humidity, true)
          .addField('Wind Speed', result[0].current.windspeed, true)
          // What about image
          .addField('Observation Time', result[0].current.observationtime, true)
          .addField('Wind Display', result[0].current.winddisplay, true)
          .setThumbnail(result[0].current.imageUrl);
        message.channel.send(embed);
      } catch (err) {
        return message.channel.send('Unable To Get the data of Given location');
      }
    });
    // LETS CHECK OUT PKG

  }
};