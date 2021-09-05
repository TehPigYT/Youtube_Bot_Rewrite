module.exports = {
    name: "ping",
    aliases: [],
    run: async (bot, message, args) => {
        message.reply({ content: "hello!" })
    }
}