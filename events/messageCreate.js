exports.run = async (bot, message) => {
    if(message.author.bot) return;
    if(message.channel.type !== "GUILD_TEXT") return;

    if(message.content == "hi"){
        message.reply({ content: "hello there!" });
    } else if(message.content.toLowerCase() == "ping"){
        message.reply({ content: "pong!" });
    } else if(message.content.toLowerCase().startsWith("say")){
        message.reply({ content: `you said: ${message.content}` });
    }

    let prefix = "!";
    if(!message.content.startsWith(prefix)) return;

    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();

    let command = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
    if(!command) return;

    command.run(bot, message, args).catch(err => {
        message.channel.send(`There was an error while running the ${cmd} command.`)
        console.log(err.message)
    })
}