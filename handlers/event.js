const { readdir } = require("fs");

module.exports = bot => {
    readdir("./events/", (err, files) => {
        if(err) console.log(`[Event Loader] Detected an error: ${err.message}`);

        files.forEach(file => {
            let event = require(`../events/${file}`);
            let name = file.split(".")[0];
            bot.on(name, (...args) => event.run(bot, ...args));

            console.log(`[Event Loader] Loaded the ${name} event.`)
        })
    })
}