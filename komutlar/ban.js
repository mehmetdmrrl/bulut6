//!message.member.hasPermission('ADMINISTRATOR')) bu kısım ise yönetici yetkisi olan biri altta belirttiğiniz rolü almadan kullanması için yazılmıştır!
 //if(!message.member.roles.get("675801384439906353") bu kısım komudu kullanabilecek rolün id si
const Discord = require('discord.js')               
const db = require("quick.db")                  
const ms = require('parse-ms');

exports.run = async (bot , message, args) => {

  if(!message.member.roles.get("630744454122176542","627600994988982273","456063994692763648") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Bu Komutu Kullanmaya Yetkin Yok ❌").then(msg => msg.delete(15000))
    
  let kullanıcı = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
   
  let sebep = args.slice(1).join(' ');
   
  let sChannel = bot.channels.get("693793042951438417") //ban log
   
  if(!kullanıcı) return message.reply("Lütfen Banlanacak Bir Kullanıcı Etiketleyiniz.").then(msg => msg.delete(15000))
   
  if(kullanıcı.hasPermission("ADMINISTRATOR")) return message.reply("Yöneticileri Banlayamazsın!").then(msg => msg.delete(15000))
    
  if(message.author.id === kullanıcı.user.id) return message.reply("Kendini Banlayamazsın!").then(msg => msg.delete(15000))
   
  if(!sebep) return message.reply("Lütfen Neden Banladığınızı Belirtiniz.").then(msg => msg.delete(15000))
   
  db.add(`BanSayısı_${message.author.id}`,1)        
   
  let sayı = await db.fetch(`BanSayısı_${message.author.id}`)
   
let banlimiti = 2

let banaralıgı = 6000000

  var tarih = Date.now() 

  if(sayı === 1){
    
   db.set(`Banmatarihi_${message.author.id}`,tarih)   
    
  }
  
   let ilkbantarihi =  await db.fetch(`Banmatarihi_${message.author.id}`)
   
if(sayı>banlimiti && tarih-ilkbantarihi <=banaralıgı) {

var süre = ms((ilkbantarihi+banaralıgı)-tarih)

 if(süre.minutes !== 0){
   
     message.channel.send(kullanıcı.user+ " Kullanıcısını **"+süre.minutes+" Dakika** Sonra Yasaklayabilirsin.").then(m => m.delete(5000));
   return
   }
   if(süre.seconds !== 0){
     message.channel.send(kullanıcı.user+" Kullanıcısını **"+süre.seconds+" Saniye** Sonra Yasaklayabilirsin.").then(m => m.delete(5000));
     return
   }
  return
}
  if(tarih-ilkbantarihi >=banaralıgı){
  
    db.set(`BanSayısı_${message.author.id}`,0)
 
    db.set(`Banmatarihi_${message.author.id}`,0) 
    
      let embed1 = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription(kullanıcı.user+" Kullanıcısı "+message.guild.name+" Sunucusundan **"+sebep+"** Sebebiyle Yasaklandınız.")
   
      kullanıcı.send(embed1)

      message.guild.member(kullanıcı).ban(sebep).catch(err => message.reply("Banlama Yetkim Yok.").then(m => m.delete(5000)))  

      db.add(`BanSayısı_${message.author.id}`,1)        
db.set(`Banmatarihi_${message.author.id}`,tarih)   
    
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(kullanıcı.user+ " Kullanıcısı **"+sebep+"** Sebebiyle Yasaklanmıştır.")
    .setFooter(`${message.author.tag}` , `${message.author.displayAvatarURL}`)
    .setTimestamp()  
     if(!sChannel || sChannel === null) return
    sChannel.send(embed)
 
    return
 }
  
   let embed1 = new Discord.RichEmbed()
   .setColor('RANDOM')
  .setDescription(kullanıcı.user+" Kullanıcısı "+message.guild.name+" Sunucusundan **"+sebep+"** Sebebiyle Yasaklandınız.")
   kullanıcı.send(embed1)
  
  message.guild.member(kullanıcı).ban(sebep).catch(err => message.reply("Banlama Yetkim Yok.").then(m => m.delete(5000)))  

          
   let embed = new Discord.RichEmbed()
   .setColor('RANDOM')
   .setDescription(kullanıcı.user+ " Kullanıcısı **"+sebep+"** Sebebiyle Yasaklanmıştır.")
   .setFooter(`${message.author.tag}` , `${message.author.displayAvatarURL}`)
   .setTimestamp()  
   if(!sChannel || sChannel === null) return
  sChannel.send(embed)

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ban',],
  permLevel: 4
  
};

exports.help = {
  name: 'ban',
  description: 'Kullanıcıyı sunucudan yasaklar.',
  usage: 'ban'
};