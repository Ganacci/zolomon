/**
 * 
 * @project Zolomon
 * @author Ganacci
 * @license None
 * @class main (app.js)
 * 
 */

const { Client, Collection, RichEmbed } = require('discord.js');
const { readdirSync } = require('fs');
const { owners } = require('./settings.json');

const { fetch } = require('quick.db');

const imageCheck = require("file-type");
const client = new Client();
const request = require('request');

client.commands = new Collection();
client.aliases = new Collection();
client.owners = owners;

const load = dirs => {
  const commands = readdirSync(`./src/commands/${dirs}/`).filter(d => d.endsWith('.js'));
  for (const file of commands) {
    const pull = require(`./src/commands/${dirs}/${file}`);
    client.commands.set(pull.help.name, pull);
    if (pull.help.aliases) pull.help.aliases.forEach(a => client.aliases.set(a, pull.help.name));
  }
};
const commandsDir = readdirSync('./src/commands/');
commandsDir.forEach(x => load(x));

client.on('ready', async () => {
    console.log('I am readyyy');
    client.user.setActivity(`the prefix z? (${client.guilds.size})`, { type: 'WATCHING' });
});

client.on('guildCreate', (guild) => {
    client.user.setActivity(`the prefix z? (${client.guilds.size})`, { type: 'WATCHING' });

    let channel = client.channels.get("589489597117890583");
    let embed = new RichEmbed().setColor('BLACK').setFooter(`${guild.owner.user.tag} (${guild.owner.user.id})`, guild.owner.user.displayAvatarURL).setAuthor(client.user.username, client.user.displayAvatarURL).setDescription(':wave:, joined a new discord server now in '+client.guilds.size+' servers, with '+client.users.size+' users and '+client.channels.size+' channels').setThumbnail(guild.iconURL);
    channel.send(embed);
});

client.on('guildDelete', (guild) => {
    client.user.setActivity(`the prefix z? (${client.guilds.size})`, { type: 'WATCHING' });

    let channel = client.channels.get("589489597117890583");
    let embed = new RichEmbed().setColor('BLACK').setFooter(`${guild.owner.user.tag} (${guild.owner.user.id})`, guild.owner.user.displayAvatarURL).setAuthor(client.user.username, client.user.displayAvatarURL).setDescription(':wave:, left a discord server now in '+client.guilds.size+' servers, with '+client.users.size+' users and '+client.channels.size+' channels').setThumbnail(guild.iconURL);
    channel.send(embed);
});

client.on('message', async message => {
    if(message.author.bot || message.channel.type !== 'text') return;

    let prefix = "z?";
    
    // Prefix Things, they are cool tho correct?
  
    let fetched = fetch(`prefix_${message.guild.id}`);
    if(fetched == null) prefix = "z?"
    else prefix == fetched;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(!message.content.startsWith(prefix)) return;
    const file = client.commands.get(cmd) || client.aliases.get(client.commands.get(cmd));
    if(file) file.run(client, message, args, prefix);
});

client.login(process.env.TOKEN).catch(err => console.log(err));
