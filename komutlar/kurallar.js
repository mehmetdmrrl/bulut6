const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(`Bu komutu kullanabilmek için "\`İsimleri Yönet\`" yetkisine sahip olmalısın.`);

    const rules = new Discord.RichEmbed()
     .setTitle('          Bulut Gaming Kuralları')
      .setColor('GREEN')
      .addField(`         Kurallar`, [`
      
- Küfür, argo ve reklam kesinlikle **yasaktır**!

- Spam ve flood **yasaktır**!

- Rahatsız eden veya bu kurallara uymayan birilerini görürseniz video veya görüntü kaydı alıp yetkililere **iletebilirsiniz**!

- Din, ırk ve siyaset konuşmak **yasaktır**!

- Herkes birbirine saygılı olmak **zorundadır**!

- Yetkililere Küfür Etmek Ve Karşı Gelmek **Yasaktır**!

- Buna aq - amk - randoma saklı küfür - silkerim  vb. buna benzemese de Küfür amaçlı her türlü yazı.(Orman çocuğu - soxam vb.) dahil **yasaktır**!

- Insanları korkutmak,ifşalamak,trollemek,rencide etmek gibi yaklaşımlar ban sebebidir.Ve **yasaktır**!

- Rahatsızlık vermek **yasaktır**!

- Reklam yapmak **yasaktır**!

- Sunucumuzda Ahmet Akgül  (oyun içindeki nick #Joe) harici hiç kimseden parayla birşey almayın.**Dolandırılırsanız Bu durumdan sunucumuz sorumlu değildir**!  
 

 Kuralları okuduysanız  emojiye  tıklayın! 
 Biz Bir Aileyiz Bu Aileyi Kimse Bozamayacaktır!

      `])

       message.delete();
       //message.react("661096217077481482");

    return message.channel.send(rules).then(keleS => keleS.react("661096217077481482"));
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kurallar'],
    permLevel: 0
}

exports.help = {
    name : 'kurallar',
    description: 'Hazır kuralları kanalınıza atar.',
    usage: '<prefix>kurallar/rules'
}