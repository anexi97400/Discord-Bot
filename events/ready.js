module.exports.run = async(client, message) => {

  const activities_list = [
    `.invite`,
    `Serving on ${client.guilds.cache.size} servers`,
    `.help`
      ]; 

  console.log(`${client.user.tag} est connecté pour servir dans ${client.channels.cache.size} canaux sur ${client.guilds.cache.size} serveurs, pour un total de ${client.users.cache.size} personnes.`)
  setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
      client.user.setActivity(activities_list[index], { type: 'WATCHING' }); // sets bot's activities to one of the phrases in the arraylist.
  }, 10000); // Runs this every 10 seconds.


};