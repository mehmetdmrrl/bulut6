const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    if(message.guild.id !== '604088643342303242') return message.channel.send('Bu komut sadece \`Bulutun\` sunucusunda çalışmaktadır.')
  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.channel.send(
    );
  let member = message.mentions.members.first();
  let isim = args.slice(1).join(" ");
  let yas = args.slice(1).join(" ");
  if (!member) return message.channel.send(":x: Bir Üye Etiketlemelisin!");
  member.addRole('723225521357324392')
return message.channel.send()(new Discord.RichEmbed()).setColor("BLUE").setDescription(`<a:onay:751551544347983952> Üyeye Başarıyla Uyarı 2 Rolü Verilmiştir! ${member} Dikkatli Ol 3. Defa Uyarı Alma <a:onay:751551544347983952>`);
const embed = new Discord.RichEmbed()
.setColor("BLUE")
.setDescription(`<a:onay:751551544347983952> Üyeye Başarıyla Uyarı 2 Rolü Verilmiştir! ${member} Dikkatli Ol 3. Defa Uyarı Alma <a:onay:751551544347983952>`);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['uyarı2' , 'uyarıver2'],
  permlevel: 0
};

exports.help = {
  name: 'uyar2',
  description: 'Belirtilen kullanıcıyı özel mesajlarında gözükecek şekilde uyarır.',
  usage: 'uyarı'
};