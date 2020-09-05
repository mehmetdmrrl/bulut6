const Discord = require('discord.js');
exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('BLUE')
.setTitle('Server ip')
.setTimestamp()
.addField('Bulut Freeroam Server İP:', 'mtasa://94.23.171.15:22050')
.setFooter('BULUT Gaming -Server- Bilgi', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};
exports.help = {
  name: 'ip',
  description: '.',
  usage: 'ip'
};