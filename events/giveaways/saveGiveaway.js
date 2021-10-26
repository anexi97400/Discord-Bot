const db = require('quick.db');
module.exports = {
    // This function is called when a giveaway needs to be saved in the database (when a giveaway is created or when a giveaway is edited).
    async saveGiveaway(messageID, giveawayData) {
        // Add the new one
        db.push('giveaways', giveawayData);
        // Don't forget to return something!
        return true;
    } };