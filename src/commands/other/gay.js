let random = Math.floor(Math.random()*101);

/**
 * 
 * @project Zolomon
 * @author Ganacci
 * @license None
 * @class command (gay.js)
 * 
 */


module.exports.run = async (client, message, args) => {

    let user = message.mentions.members.first();
    if(!user) user = message.member;

    let embed = new Discord.RichEmbed().setColor('BLACK').setFooter(message.author.username, message.author.displayAvatarURL).setThumbnail('https://images-na.ssl-images-amazon.com/images/I/21gW5WwfavL.jpg').setDescription(`<@${user.id}> is ${random} percent, gay`);
  
    message.channel.send(embed);

};

module.exports.help = {
  name: 'encode',
  description: 'Encode text to base64 via zolomon',
  usage: 'encode [text]',
  category: 'other',
  accessableby: 'members'
};
