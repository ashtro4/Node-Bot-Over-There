const discord = require('discord.js')
const bot = new discord.Client();
const config = require("./config.json");
const prefix = config.prefix;
const fs = require('fs');
function randint(minimum, maximum){
    return Math.round( Math.random() * (maximum - minimum) + minimum);
}
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}
bot.on('ready', () => {
    console.log("Logged in as")
    console.log(bot.user.name)
    console.log(bot.user)
    console.log('https://discordapp.com/oauth2/authorize?client_id=453741512409350154&scope=bot')
    bot.user.setGame("'-commands'")
});
bot.on('message', message => {
    var args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase();
    if (message.content.startsWith('-')) {
        if (command === 'hello') {
            message.channel.send("Hi!"); 
        }
        if (command === 'commands') {
            message.channel.send("```Description : Hey dude you see that Node Bot Over There? \nPrefix : '-' \n-hello : Hi! \n-random (int1) (int2) : shows a random number in specified range. \n-commands : brings up this message \nInvite : https://discordapp.com/oauth2/authorize?client_id=453741512409350154&scope=bot```")
        }
        if (command === 'random') {
            let low_num = args[0];
            let high_num = args[1];
            var low = parseInt(low_num)
            var high = parseInt(high_num)
            var number = Math.round(Math.random()*(high - low))
            var number = number + low
            message.channel.send(number)
        }
        if (command === 'car') {
            var car = randint(1,12)
            var arr = ["cars1.jpeg","cars2.jpeg","cars3.jpg","cars4.webp","cars5.jpg","cars1.webp","cars7.jpeg","cars8.jpg","cars9.jpg","cars10.jpg","cars11.jpg","cards12.jpeg"
            if (car === 1) {
                message.channel.send({
                files: [
                   arr[car]
                ]
                })
            

        }
    }
});
bot.login(config.token);
