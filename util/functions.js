const createClientVars = async client => {
    const config = require("../config")
    client.color = config.color.startsWith("#") ? config.color : "#3A871F"
    client.owner = {
        name: config.ownerName,
        id: config.ownerID
    }
    client.footer = config.footer.slice(0, 32)
    client.defaultPrefix = config.prefix.slice(0, 4)
    client.defaultLanguage = config.defaultLanguage
    client.log = config.logAll
    client.devMode = {
        enabled: config.devMode,
        serverID: config.devServer
    }
    client.categories = config.categories
    client.links = config.links
};