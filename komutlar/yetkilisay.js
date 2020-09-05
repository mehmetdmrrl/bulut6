const codare = require('discord.js'); 

exports.run = async(client, message) => {

  let yetkili = message.guild.roles.get('723195602854215681');  

   if (message.author.id !== "456063994692763648") {
  message.channel.send(new codare.RichEmbed().setTitle(`Hata`).setDescription(`Bu komutu kullanmaya yetkiniz yok!`).setColor("RED").setTimestamp()) 

  let ses = message.guild.members.filter(kullanici => kullanici.highestRole.position >= yetkili.position && !kullanici.voiceChannel && !kullanici.user.bot && kullanici.presence.status !== "offline"); 
 
  message.channel.send(new codare.RichEmbed().setTitle(`Aktiflik`).addField(`Seste Olmayan Yetkili Sayısı`, `${ses.size}\n\n${ses.map(y => y).join(',')}`).setColor("GREEN").setTimestamp()) 
   }
   };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili-say'],
  permLevel: 0
};

exports.help = { 
  name: 'yetkilisay', 
  description: 'Seste olmayan yetkilileri gösterir.',
  usage: 'yetkilisay',
};
