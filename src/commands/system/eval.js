/**
 * 
 * @project Zolomon
 * @author Ganacci
 * @license None
 * @class command (eval.js)
 * 
 */

const Discord = require('discord.js');

function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}


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
  name: 'eval',
  description: 'Run javascript code in zolomon',
  usage: 'eval [code]',
  category: 'system',
  accessableby: 'owners'
};
