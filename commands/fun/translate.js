const translate = require('@iamtraction/google-translate')

module.exports = {
    name: 'translate',
    category: 'fun',
    description: 'Translate a non-english text in English',
    usage: '.translate <non-english text>',
   /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
    run: async(client, message, args) => {

    if (!args.length) return message.reply('Please specify a text to translate');

    const translated = await translate(args.join(' '), { to : 'en' });
    message.channel.send(translated.text)
        
    } 
};
