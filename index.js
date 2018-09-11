const commando = require('discord.js-commando');
const discord = require('discord.js');
const bot = new commando.Client({
    owner: '196151243507367936'
});
const config = require("./config.json");
const info = require("./info_about_me.js");
bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

/*bot.on("guildCreate", guild => {
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
    message.channel.send(myInfo);
});
*/

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    /*if (command == 'image') 
    {
        number = 0;
        imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        message.channel.send({files: ["./images/" + imageNumber + ".png"]})
    }
    */
    if (command == 'info')
    {           
        console.log(info);
        message.channel.send(info.run);
    }
    if (command == 'help')
    {           
        message.channel.send(myInfo);
    }
    if (command == 'hi')
        message.channel.send('hi');
});

bot.on('ready', function(){
    console.log('System Online');
})
bot.login(config.token);
