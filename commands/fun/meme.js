const { Random } = require('something-random-on-discord');

module.exports = {
  name: 'meme',
  category: 'fun',
  description: 'Get Fresh meme :D',
  run: async (client, message, args) => {
    const data = await Random.getMeme();

    message.channel.send(data);
  }
};
