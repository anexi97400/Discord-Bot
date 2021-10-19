/* eslint-disable no-empty-function */
/**
 * Required modules
 */

const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
name: 'imdb',
  description: 'Get the information about series and movie',
  category: 'info',
  usage: 'imdb <name>',
  run: async (client, message, args, color) => {

    if(!args.length) {
      return message.channel.send('Please give the name of movie or series');
    }


    const msg = await message.channel.send(
      new Discord.MessageEmbed()
      .setTitle('Wait')
      .setDescription('Getting the information...')
      .setColor('#0099ff'));


    let movie = await axios(`https://www.omdbapi.com/?apikey=5e36f0db&t=${args.join('+')}`).catch(err => {});
    if(!movie || !movie.data || movie.data.Response === 'False') {return msg.edit(new Discord.MessageEmbed()
      .setTitle('error')
      .setDescription('Unable to find Something about `' + args.join(' ') + '`')
      .setColor('#0099ff'));
        }

    movie = movie.data;

    const embed = new Discord.MessageEmbed()
    .setTitle(movie.Title)
    .setColor('#0099ff')
    .setThumbnail(movie.Poster)
    .setDescription(movie.Plot)
    .setFooter(`Ratings: ${movie.imdbRating} | Seasons: ${movie.totalSeasons || '0'}`)
    .addField('Country', movie.Country, true)
    .addField('Languages', movie.Language, true)
    .addField('Type', movie.Type, true);


    msg.edit(embed);
    }


  };
