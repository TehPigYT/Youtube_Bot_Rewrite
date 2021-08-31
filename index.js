require("dotenv").config()
const { Client, Intents } = require("discord.js");

const intents = new Intents(32767);
const bot = new Client({ intents });

bot.on("ready", async () => {
    console.log("The bot is now up and running!")
    bot.user.setActivity("hello there!", { type: "LISTENING" })
})

bot.on("messageCreate", async message => {
    if(message.author.bot) return;
    if(message.channel.type !== "GUILD_TEXT") return;

    if(message.content == "hi"){
        message.reply({ content: "hello there!" });
    } else if(message.content.toLowerCase() == "ping"){
        message.reply({ content: "pong!" });
    } else if(message.content.toLowerCase().startsWith("say")){
        message.reply({ content: `you said: ${message.content}` });
    }
})

bot.login(process.env.TOKEN)