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

  let instanceofbot = client.guilds.size;
  let size = client.users.size - instanceofbot;
  let duration = moment.duration(this.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

  message.delete();
  let embed = new Discord.RichEmbed().setColor('BLACK').setFooter('Shard #1', client.user.displayAvatarURL).setAuthor(message.author.username, message.author.displayAvatarURL)
  .addField('Guilds', "" + client.guilds.size, true)
  .addField('Users', "" + size, true)
  .addField('Uptime', duration, true)
  .addField('Memory', "memory", true)
  .addField('Discord.js', "" + Discord.version, true)
  .addField('Node', "" + process.version, true)
  message.channel.send(embed);
  

};

module.exports.help = {
  name: 'statistics',
  description: 'View zolomon statisitics',
  usage: 'statistics',
  category: 'system',
  accessableby: 'members',
  aliases: ['stats']
};
