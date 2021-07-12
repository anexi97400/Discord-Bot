const Discord = require('discord.js');
const answersList = require('../../config.json')
module.exports ={
    name: "8ball",
    description: "Ask something to the magic 8ball.",
    category: "fun",
    run: async(client, message, args) => {


 let question = args.slice(1).join(" ");
        
        if (!question){
          message.channel.send("You need to ask the magic 8ball something, dude.");
          return;
        }       
      



        const ballEmbed = new Discord.MessageEmbed()
	.setTitle('Ask the magic 8ball')
	.setDescription(`**You shake your 8ball and think hard, yet simple.**\n:8ball: You look into your 8ball and see ` + random(answersList) + ".");




       message.channel.send(ballEmbed)
    }
}

function random(answers){
  const chooseanswer = answers[Math.floor(Math.random() * answers.length)];
  return chooseanswer;
}
