exports.run = async bot => {
    console.log("The bot is now up and running!")
    bot.user.setActivity("hello there!", { type: "LISTENING" })
}