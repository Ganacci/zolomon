/**
 * 
 * @project Zolomon
 * @author Ganacci
 * @license None
 * @class command (serverinfo.js)
 * 
 */

const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");
const db = require('quick.db');

module.exports.run = async (client, message, args, prefix) => {

  let instanceofbot = client.guilds.size;
  let size = client.users.size - instanceofbot;
  let duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

  message.delete();
  let embed = new Discord.RichEmbed().setColor('BLACK').setFooter('Zolomon', client.user.displayAvatarURL).setAuthor(message.guild.name, message.guild.iconURL)
  .addField('Owner', `<@${message.guild.owner.id}> (${message.guild.owner.id})`, true)
  .addField('Guild Created', message.guild.createdAt)
  .addField('Zolomon joined', message.guild.fetchMember(client.user).joinedAt)
  .addField('Amount of commands executed today', '0 (WiP)')
  .addField('Server Prefix', prefix)
  message.channel.send(embed).then(msg1 => msg1.delete(15000));

};

module.exports.help = {
  name: 'serverinfo',
  description: 'View the current server information with zolomon',
  usage: 'serverinfo',
  category: 'information',
  accessableby: 'members'
};
