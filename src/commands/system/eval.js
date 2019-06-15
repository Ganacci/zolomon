/**
 * 
 * @project Zolomon
 * @author Ganacci
 * @license None
 * @class command (eval.js)
 * 
 */

const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (client, message, args) => {

    if(!client.owners.includes(message.author.id)) return;

    try {
        const code = args.join(" ");
        let evaled = eval(code);
        
        let embed = new Discord.RichEmbed().setColor('BLACK').setFooter(message.author.username, message.author.displayAvatarURL).setThumbnail(client.user.displayAvatarURL).addField('Input', code).addField('Output', evaled);

        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
   
        message.channel.send(embed).then(msg1 => msg1.delete(15000));
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``).then(msg1 => msg1.delete(15000));
    }
  

};

module.exports.help = {
  name: 'invite',
  description: 'Invite zolomon',
  usage: 'invite',
  category: 'system',
  accessableby: 'members'
};
