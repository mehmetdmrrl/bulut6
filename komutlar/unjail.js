const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    if(message.guild.id !== '604088643342303242') return message.channel.send('Bu komut sadece \`Bulutun\` sunucusunda çalışmaktadır.')
  if (!message.member.hasPermission("MANAGE_NICKNAMES"))
    return message.channel.send(
    );
  let member = message.mentions.members.first();
  let isim = args.slice(1).join(" ");
  let yas = args.slice(1).join(" ");
  if (!member) return message.channel.send(":x: Bir Üye Etiketlemelisin!");
  member.removeRole('622171968376012822')
  member.addRole('688835332669833289')
  return message.channel.send("Cezalı Üye Verilmiştir!");
const embed = new Discord.RichEmbed()
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["unceza"],
  permLevel: 0
};
exports.help = {
  name: "jail",
  description: "ArdaDemr Kayıt Sistemi",
  usage: "ArdaDemr Kayıt Sistemi"
};