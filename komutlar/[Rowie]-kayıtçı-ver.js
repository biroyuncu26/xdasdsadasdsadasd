const Discord = require('discord.js');
const rdb = require('quick.db');
const moment = require('moment');
exports.run = async (client, message, args) => {
let kayıtcı = '887271716244557831' //verilicek vip rolü
if(!["887271716278136843"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
  return message.channel.send(`Bu komutu kullanabilmek için ayarlanan kayıt yetkisine sahip olmalısınız!`).then(x => x.delete({timeout: 5000}));
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if (!member) return message.channel.send('Bir üye etiketlemelisin.').then(x => x.delete({timeout: 5000}));
 member.roles.add(kayıtcı)
  let embed = new Discord.MessageEmbed()
   .setColor("2d3136")
  .setDescription(`${member} kişisi'ye artık <@&887271716244557831> Rolü Verildi .`)
  .setTimestamp()
  message.react('✅')
//message.react(client.emojiler.onay).catch();
message.channel.send(embed).then(x => x.delete({timeout: 5000}));
} 

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kayıtçı-ver'],
  permLevel: 0
}
exports.help = {
  name: 'kayıtçı-ver',
  description: "Belirtilen üyeye kayıtsız rolü verir",
  usage: 'vip @kişi'
}