const { readdirSync } = require("fs");

module.exports = bot => {
    readdirSync("./commands/").forEach(directory => {
        let commands = readdirSync(`./commands/${directory}/`).filter(file => file.endsWith(".js"));

        for(file of commands){
            let cmd = require(`../commands/${directory}/${file}`);

            if(cmd.name){
                bot.commands.set(cmd.name, cmd);
                console.log(`[Command Loader] Loaded the ${cmd.name} command.`)
            } else {
                console.log(`[Command Loader] ${file} has not been set up.`)
                continue;
            }

            if(cmd.aliases && Array.isArray(cmd.aliases)) cmd.aliases.forEach(alias => bot.aliases.set(alias, cmd.name))
        }
    })
}