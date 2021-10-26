const db = require('quick.db');
module.exports = {

  // This function is called when a giveaway needs to be deleted from the database.
  async deleteGiveaway(messageID) {
    // Remove the giveaway from the array
    const newGiveawaysArray = db.get('giveaways').filter((giveaway) => giveaway.messageID !== messageID);
    // Save the updated array
    db.set('giveaways', newGiveawaysArray);
    // Don't forget to return something!
    return true;
}
};