const { Random } = require('something-random-on-discord')

module.exports = {
  name: 'advice',
  category: 'fun',
  description: 'Get Fresh Advice :D',
  run: async (client, message, args) => {

    const data = await Random.getAdvice()
    message.channel.send(data)

  }
};
