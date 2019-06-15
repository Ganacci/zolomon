/**
 * 
 * @project Zolomon
 * @author Ganacci
 * @license None
 * @class command (statistics.js)
 * 
 */

const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  let instanceofbot = client.guilds.size;
  let size = client.users.size - instanceofbot;

  message.delete();
  let embed = new Discord.RichEmbed().setColor('BLACK').setFooter('Shard #1', client.user.displayAvatarURL).setAuthor(message.author.username, message.author.displayAvatarURL)
  .addField('Guilds', "" + client.guilds.size, true)
  .addField('Memory', "memory", true)
  .addField('Users', "" + size, true)
  .addField('Discord.js', "" + Discord.version, true)
  .addField('Uptime', "uptime", true)
  .addField('Node', "" + process.env.version, true)
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
