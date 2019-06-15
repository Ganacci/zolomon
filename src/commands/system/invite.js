/**
 * 
 * @project Zolomon
 * @author Ganacci
 * @license None
 * @class command (invite.js)
 * 
 */

const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (client, message, args) => {

  let instanceofbot = client.guilds.size;
  let size = client.users.size - instanceofbot;
  let duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

  message.delete();
  let embed = new Discord.RichEmbed().setColor('BLACK').setFooter('Zolomon', client.user.displayAvatarURL).setAuthor(message.author.username, message.author.displayAvatarURL)
  .addField('Invite', "Zolomon [here](https://discordapp.com/oauth2/authorize?client_id=577614877468786699&permissions=8&scope=bot)", true)
  .addField('Support Server', "Our support server is over development company's server, you can join it [here](https://google.com)", true)
  message.channel.send(embed).then(msg1 => msg1.delete(15000));
  

};

module.exports.help = {
  name: 'invite',
  description: 'Invite zolomon',
  usage: 'invite',
  category: 'system',
  accessableby: 'members'
};
