const Discord = require('discord.js');
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(`Bu komutu kullanabilmek için "\`İsimleri Yönet\`" yetkisine sahip olmalısın.`);
const embed = new Discord.RichEmbed()
.setColor('BLUE')
.setTitle('Discord Rolleri Ne İşe Yarar Nasıl Alınır')
.setTimestamp()
.addField('1 - Bulut Gaming Emektar Rolü :', 'Özel Durumunuza **Bulut Gaming Server Discord : (Davet Linkiniz) Mta İp: mtasa://94.23.171.15:22050 ** yazarak Bulut Gaming Emektar Rolünü Alabilirsiniz(Durumunuz Şu Şekil Olmalıdır)')
.addField('2 - Bulut Gaming Warrior Rolü :', 'İsminizin Başına **! ๖ۜ𝔅𝔲𝔩𝔲𝔱** yazarak Bulut Gaming Warrior Rolünü Alabilirsiniz (Tag Rolüdür)')
.addField('3 - Bulut Gaming RANK I Rolü :', 'Chate Yazı Yazarak **Level 10** Olursanız **RANK I** Rolüne Sahip Olabilirsiniz')
.addField('4 - Bulut Gaming RANK II Rolü :', 'Chate Yazı Yazarak **Level 20** Olursanız **RANK II** Rolüne Sahip Olabilirsiniz')
.addField('5 - Bulut Gaming RANK III Rolü :', 'Chate Yazı Yazarak **Level 30** Olursanız **RANK III** Rolüne Sahip Olabilirsiniz')
.addField('6 - Bulut Gaming Nitro Booster Rolü :', 'Eğer Nitro Alıp Sunucumuza **BOOST** Basarsanız Bu Rolü Alabilirsiniz')
.setFooter('', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['inform'], 
  permLevel: 0 
};
exports.help = {
  name: 'dcrolleri',
  description: '.',
  usage: ''
};