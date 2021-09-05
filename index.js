require("dotenv").config()
const { Client, Intents, Collection } = require("discord.js");

const intents = new Intents(32767);
const bot = new Client({ intents });

bot.commands = new Collection();
bot.aliases = new Collection();

["event", "command"].forEach(file => {
    require(`./handlers/${file}.js`)(bot);
})

bot.login(process.env.TOKEN)