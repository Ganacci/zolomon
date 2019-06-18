/**
 * 
 * @project Zolomon
 * @author Ganacci
 * @license None
 * @class command (flash.js)
 * 
 */

const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    let embed = new Discord.RichEmbed()
        .setColor('RED')
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setFooter('June 17th 2019', client.user.displayAvatarURL)
        .setDescription(`Barry Allen was 11 years old when his mother was killed in a bizarre, terrifying incident and his father was falsely convicted of murder..`)
        .addField('Species', 'Meta-human')
        .addField('Status', 'Alive')
        .addField('Alter ego', 'The Flash')
        .addField('Code Name', 'The Chemist (henchman)')
        .addField('Family', `Henry Allen as a father (deceased)\nNora Allen as a mother (deceased)\nIris West-Allen (wife)\nNora West-Allen (future daugher)`)
        .addField('Affiliation', 'Central Ciry Police Department\nTeam Flash (secret)\nS.T.A.R Labs\nCult (time remnant; formerly)\nTeam Arrow (altered reality; formerly)\nTrigger Twins (altered reality; formerly)')
        .addField('Actors', 'Grant Gustin\nScott Whyte\nAndre Tricoteux\nTobin Bell\nTom Felton\nNicolas Gonzalez\nVanessa Williams\nAudrey Marie Anderson\nAdam Bergquist\nLogan Williams (young seas 1-2)\nLiam Hughes (young seas 3-pres)')
        .setThumbnail('https://heroichollywood.com/wp-content/uploads/2018/10/Flash_DC_Comics_CW.jpg')
    message.channel.send(embed);

};

module.exports.help = {
  name: 'flash',
  description: 'Get information about the flash',
  usage: 'flash',
  category: 'flash',
  accessableby: 'members',
  aliases: ['barry', 'theflash']
};
