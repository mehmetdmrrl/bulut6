const Discord = require("discord.js");
const fla = require('quick.db')
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
                          if (talkedRecently.has(message.author.id)) {
           return message.channel.send("`10` dakika da Bir Kullanabilirsin - " + message.author);
    } else {

           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 600000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    } 

    let mesaj = args.join(" ");
if (!mesaj) return message.channel.send('Lütfen duyuru\'ya atılıcak yazıyı giriniz.')
  
  let kanalid = await fla.fetch(`duyuru-kanal_${message.guild.id}`)
  let kanal = client.channels.get(kanalid)
      message.delete();
  const embed = new Discord.RichEmbed()
  .setTitle('Klan Duyuru Sistemi - Bulut Gaming BOT')
  .setDescription(mesaj)
  .setColor('RANDOM')
  kanal.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["klan-duyuru"],
  permLevel: 0,
};

exports.help = {
  name: 'klanduyuru',
  description: 'Duyuru sistemi',
  usage: 'duyuru'
};