const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
**
السلام عليكم
:earth_asia:بعض الاشخاص يبحثون عن مكان جميل :heart: ,   https://discord.gg/vAEjYFb
 والبعض يجعل المكان جميلا:black_heart: . 
Ꮃelcome Ꭲo Ꮪerver Royal Server
حلمنه نوصل 500 عضو**



 ${member} .... الدعوه خاصه لك يا قلبي .
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
**
السلام عليكم
:earth_asia:بعض الاشخاص يبحثون عن مكان جميل :heart: ,   https://discord.gg/vAEjYFb
 والبعض يجعل المكان جميلا:black_heart: . 
Ꮃelcome Ꭲo Ꮪerver Royal Server
حلمنه نوصل 500 عضو**


 ${member} .... الدعوه خاصه لك يا قلبي .
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
