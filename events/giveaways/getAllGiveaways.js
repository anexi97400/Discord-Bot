const db = require('quick.db');
module.exports = {
    async getAllGiveaways() {
        // Get all the giveaway in the database
        return db.get('giveaways');
    }
};