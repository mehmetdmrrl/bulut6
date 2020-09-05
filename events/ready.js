const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
              " MTA Server Açtırmak İçin Ahmet Akgül#2861 İsimli Kurucumuza Ulaşınız! ",
      
      	      " Yetki Satın Alımları İçin Ahmet Akgül#2861 İsimli Kurucumuza Ulaşınız! ",
              
              " Ahmet Akgül#2861 'DIŞINDA' Başka Birine Para Verirseniz Dolandırma Durumundan Sunucumuz Bu Konudan Sorumlu Değildir İyi Günler İYİ OYUNLAR! :) ",
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], " " );
        }, 2 * 2500);
    
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  client.user.setActivity(`${prefix}yardım + ${client.guilds.size} sunucu + ${client.users.size} kullanıcı`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
};