const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
**
**
السلام عليكم
:small_blue_diamond: - السلام عليكم ورحمة الله وبركاته ..
نورونا وحياكم الله ف روماتنا الصوتيه :blue_heart::blue_heart:. ,   https://discord.gg/vAEjYFb

حلمنه نوصل500 عضو**


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
:small_blue_diamond: - السلام عليكم ورحمة الله وبركاته ..
نورونا وحياكم الله ف روماتنا الصوتيه :blue_heart::blue_heart:. ,   https://discord.gg/vAEjYFb

حلمنه نوصل500 عضو**


 ${member} .... الدعوه خاصه لك يا قلبي .
**`)
}).catch(console.error)

})
client.login ("NDU1NTU5NzMxODEwMDA5MDk5.Di8bng.Ajgioghj04eszjJn_JCkyHPIhp8")
