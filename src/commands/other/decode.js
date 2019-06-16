/**
 * 
 * @project Zolomon
 * @author Ganacci
 * @license None
 * @class command (decode.js)
 * 
 */

const Discord = require('discord.js');
const base64 = require("js-base64").Base64;

module.exports.run = async (client, message, args) => {

    const input = args.join(" ");
    const decoded = base64.decode(input);    

    let embed = new Discord.RichEmbed().setColor('BLACK').setFooter(message.author.username, message.author.displayAvatarURL).setThumbnail(client.user.displayAvatarURL).addField('Input', input).addField('Output', decoded);
  
    message.channel.send(embed);

};

module.exports.help = {
  name: 'decode',
  description: 'Decode base64 to text via zolomon',
  usage: 'decode [text]',
  category: 'other',
  accessableby: 'members'
};
