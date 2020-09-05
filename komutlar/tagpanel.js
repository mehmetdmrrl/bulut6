const Discord = require('discord.js');
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(`Bu komutu kullanabilmek için "\`İsimleri Yönet\`" yetkisine sahip olmalısın.`);
const embed = new Discord.RichEmbed()
.setColor('BLUE')
.setTitle('Oyun İçi TAG PANEL')
.setTimestamp()
.addField('Bulut Freeroam Tag Paneli:', '\n➢UstaÖldürücü \n➢DropKralı \n➢KrallarınKralı \n➢DriftKralı \n➢ModifiyeUstası \n➢GS \n➢FB \n➢BJK \n➢YOUTUBER(ŞARTLI) \n➢MAFYA \n➢ServerKatili \n➢Terminatör \n➢ZalimKatil \n➢SeriKatil \n➢UstaKatil \n➢Tetikci \n➢Katre-i-Matem (KLAN TAGI) \n➢RufNeck (KLAN TAGI) \n➢Nova (KLAN TAGI) \n➢Emekli P*rnocu \n➢TurfKralı \n➢KelleAvcısı\ n➢ÖlümMakinesi \n➢BordoBereli \n➢Fotoğrafçı')
.setFooter('BULUT Gaming Tag Bilgi', client.user.avatarURL)
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
  name: 'tagpanel',
  description: '.',
  usage: 'tagpanel'
};