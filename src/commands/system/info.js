/**
 * 
 * @project Zolomon
 * @author Ganacci
 * @license None
 * @class command (info.js)
 * 
 */

const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    let embed = new Discord.RichEmbed()
        .setColor('BLACK')
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL)
        .setDescription('A discord bot created in discord.js based off of a television and comic book series character [Hunter Zolomon]() or also know as Zoom, '+Client.user.username+' has a lot to offer, as in custom image commands, base64 commands, system commands and much more')
        .addField('Developer', 'Ganacci <@566692683838521364>')
        .addField('Discord', 'You must verify yourself, go inside of the roles channel and type `zolomon` in the channel to receive access to the Zolomon support centre\nhttps://discord.gg/JEYTmEt')
        .addField('Version', version)
        .setThumbnail(message.guild.iconURL)
        .addField('Found an issue or a bug?', 'Please report either errors, issues and bugs to the bot developer, you might be rewarded in doing so');
    message.channel.send(embed);

};

module.exports.help = {
  name: 'eval',
  description: 'Run javascript code in zolomon',
  usage: 'eval [code]',
  category: 'system',
  accessableby: 'owners'
};
