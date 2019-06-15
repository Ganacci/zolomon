/**
 * 
 * @project Zolomon
 * @author Ganacci
 * @license None
 * @class command (brazzers.js)
 * 
 */

const Discord = require('discord.js');

const request = require("request");
const gm = require("@tohru/gm").subClass({
  imageMagick: true
});

module.exports.run = async (client, message, args) => {

    const image = await client.getImage(message)
    if(!image) image = client.user.avatarURL;
      if (image !== undefined) {
        message.channel.startTyping();
        const brazzersWatermark = ".../image/brazzers.png";
        gm(request(image)).size((error, size) => {
          if (error) throw new Error(error);
          gm(request(image)).composite(brazzersWatermark).gravity("SouthEast").resize(size.width, null).strip().stream((error, stdout) => {
            if (error) throw new Error(error);
            message.channel.stopTyping();
            message.channel.send({
              files: [{
                attachment: stdout,
                name: "brazzers.png"
              }]
            });
          });
        });
      }

};

module.exports.help = {
  name: 'brazzers',
  description: 'Watermark a image with the brazzers watermark with zolomon',
  usage: 'brazzers [attachment]',
  category: 'images',
  accessableby: 'members'
};
