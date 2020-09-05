const Discord = require('discord.js');
const ayarlar = require("./ayarlar.json");



const cortexbot = new Discord.ShardingManager('./bot.js', {
    totalShards: "auto", // shard sayısı ya da auto yazılabilir
    token: ayarlar.token // token
});

cortexbot.spawn(); 
// www.cortex.red
cortexbot.on('launch', shard => {
  console.log(`${shard.id} IDli shard başarıyla başlatıldı.`)
});
// www.cortex.red
setTimeout(() => {
    console.log("Bulut : Yeniden başlatılıyor.")
    cortexbot.broadcastEval("process.exit()");
}, 21600000);