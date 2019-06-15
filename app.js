/**
 * 
 * @project Zolomon
 * @author Ganacci
 * @license None
 * @class main (app.js)
 * 
 */

const { Client, Collection } = require('discord.js');
const { readdirSync } = require('fs');
const { owners } = require('./settings.json');

const { fetch } = require('quick.db');

const client = new Client();
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

client.on('guildCreate', () => {
    client.user.setActivity(`the prefix z? (${client.guilds.size})`, { type: 'WATCHING' });
});

client.on('guildDelete', () => {
    client.user.setActivity(`the prefix z? (${client.guilds.size})`, { type: 'WATCHING' });
});

client.on('message', async message => {
    if(message.author.bot || message.channel.type !== 'text') return;

    let prefix = "z?";
    
    let fetched = fetch(`prefix_${message.guild.id}`);
    if(fetched == null) prefix = "z?"
    else prefix == fetched;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(!message.content.startsWith(prefix)) return;
    const file = client.commands.get(cmd) || client.aliases.get(client.commands.get(cmd));
    if(file) file.run(client, message, args);
});

client.login(process.env.TOKEN).catch(err => console.log(err));
