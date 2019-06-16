/**
 * 
 * @project Zolomon
 * @author Ganacci
 * @license None
 * @class command (statistics.js)
 * 
 */

const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (client, message, args) => {

  let duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

  message.delete();
  let embed = new Discord.RichEmbed().setColor('BLACK').setFooter('Shard #1', client.user.displayAvatarURL).setAuthor(message.author.username, message.author.displayAvatarURL)
  .addField('Guilds', "" + client.guilds.size, true)
  .addField('Users', "" + client.users.size, true)
  .addField('Uptime', "" + duration, true)
  .addField('Memory', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} megabytes`, true)
  .addField('Discord.js', "" + Discord.version, true)
  .addField('Node', "" + process.version, true)
  message.channel.send(embed).then(msg1 => msg1.delete(15000));
  

};

module.exports.help = {
  name: 'statistics',
  description: 'View zolomon statisitics',
  usage: 'statistics',
  category: 'system',
  accessableby: 'members',
  aliases: ['stats']
};
