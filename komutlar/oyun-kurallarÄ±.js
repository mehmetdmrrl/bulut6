const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(`Bu komutu kullanabilmek için "\`İsimleri Yönet\`" yetkisine sahip olmalısın.`);


    const rules = new Discord.RichEmbed()
      .setTitle('          Bulut Gaming Oyun Kuralları')
      .setColor('GREEN')
      .addField(`          Kurallar`,[`
      
 - Freeroam diye oyuncuları uzun süre rahatsız etmek **yasaktır**!

 - Oyuncuların FPS'ini düşürücek bindlerin kullanımı **yasaktır**!

 - Oyuncuları başka haritaya ışınlayıp öldürmek **yasaktır**!

 - Oyun içi buglardan faydalanmak **ban sebebidir**!

 - 1v1,Drop vsleri engellemek/bozmak **yasaktır**!

 - Yetkililerden saat,kill dolmadan tag istemek **yasaktır**!

 - Ses sistemi ile saçma sesler açmak **yasaktır**!

 - Reklam yapmak **yasaktır**!

 - Roleplay yapan oyuncuları rahatsız etmek **yasaktır**!

 - Küfür kullanımı **yasaktır**!

 - Hesap paylaşımı yasaktır.**Sonra kill gitti saat gitti demeyin.**

 - Irkçılık yapan kişilere 1 saat uyarısız ban **atılacaktır**!
 
 - Kuralları okuduysanız  emojiye  tıklayın

      `])

       message.delete();
       //message.react("661096217077481482");

    return message.channel.send(rules).then(keleS => keleS.react("661096217077481482"));
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['oyunkuralları'],
    permLevel: 0
}

exports.help = {
    name : 'oyunkuralları',
    description: 'Hazır kuralları kanalınıza atar.',
    usage: '<prefix>kurallar/rules'
}