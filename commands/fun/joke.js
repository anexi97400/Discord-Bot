const { Random } = require('something-random-on-discord');

module.exports = {
  name: 'joke',
  category: 'fun',
  description: 'Get Fresh Joke :D',
  run: async (client, message, args) => {
    const data = await Random.getJoke();

    message.channel.send(data);
  }
};
