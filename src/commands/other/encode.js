/**
 * 
 * @project Zolomon
 * @author Ganacci
 * @license None
 * @class command (encode.js)
 * 
 */

const Discord = require('discord.js');
const base64 = require("js-base64").Base64;

module.exports.run = async (client, message, args) => {

    if(!client.owners.includes(message.author.id)) return;

    const input = args.join(" ");
    const encoded = base64.encode(input);    

    let embed = new Discord.RichEmbed().setColor('BLACK').setFooter(message.author.username, message.author.displayAvatarURL).setThumbnail(client.user.displayAvatarURL).addField('Input', input).addField('Output', encoded);
  
    message.channel.send(embed);

};

module.exports.help = {
  name: 'eval',
  description: 'Run javascript code in zolomon',
  usage: 'eval [code]',
  category: 'system',
  accessableby: 'owners'
};
