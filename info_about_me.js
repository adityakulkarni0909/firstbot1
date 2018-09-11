const commando = require('discord.js-commando');
const discord = require('discord.js');

class InfoAboutMeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description: ''
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
            .addField("Bot Owner", "Hi! I was made by AK.", true)
            .addField("Want More From the Bot?", "If you would like me to add another feature, message me! I'm open to all suggestions.", true)
            .setColor(0x915BFF)  
            .setFooter("Thanks for reading.")  
        message.channel.send(myInfo); 
    }
}

module.exports = InfoAboutMeCommand;