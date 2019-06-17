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
        .setDescription(`Barry Allen was 11 years old when his mother was killed in a bizarre, terrifying incident and his father was falsely convicted of murder. With his life changed forever by the tragedy, Barry was taken in and raised by Detective Joe West, the father of Barry’s best friend, Iris. Now, Barry has become a brilliant, driven, and endearing CSI assistant, whose determination to uncover the truth about his mother’s strange death leads him to follow up on every unexplained urban legend and scientific advancement that comes along. Barry's latest obsession is a cutting edge particle accelerator, created by visionary physicist Harrison Wells and his S.T.A.R. Labs team, who claim that this invention will bring about unimaginable advancements in power and medicine. However, something goes horribly wrong during the public unveiling, and when the devastating explosion causes a freak storm, many lives are lost and Barry is struck by lightning. After nine months in a coma, Barry awakens to find his life has changed once again - the accident has given him the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only "meta-human" who was created in the wake of the accelerator explosion - and not everyone is using their new powers for good. In the months since the accident, the city has seen a sharp increase in missing people, unexplained deaths, and other strange phenomena. Barry now has a renewed purpose - using his gift of speed to protect the innocent, while never giving up on his quest to solve his mother’s murder and clear his father’s name. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won’t be long before the world learns that Barry Allen has become The Flash.`)
        .addField('Species', 'Meta-human')
        .addField('Status', 'Alive')
        .addField('Alter ego', 'The Flash')
        .addField('Code Name', 'The Chemist (henchman)')
        .addField('Family', `Henry Allen as a father (deceased)\nNora Allen as a mother (deceased)\nIris West-Allen (wife)\nNora West-Allen (future daugher)`)
        .addField('Affiliation', 'Central Ciry Police Department\nTeam Flash (secret)\nS.T.A.R Labs\nCult (time remnant; formerly)\nTeam Arrow (altered reality; formerly)\nTrigger Twins (altered reality; formerly)')
        .addFIeld('Grant Gustin\nScott Whyte\nAndre Tricoteux\nTobin Bell\nTom Felton\nNicolas Gonzalez\nVanessa Williams\nAudrey Marie Anderson\nAdam Bergquist\nLogan Williams (young seas 1-2)\nLiam Hughes (young seas 3-pres)')
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
