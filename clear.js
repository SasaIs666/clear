const Discord = require("discord.js");
const client = new Discord.Client();
client.on("message", message => {
    var prefix = "-";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **لا يوجد لديك صلاحية لمسح الشات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم مسح الشات",
        color: 0x06DF00,
        description: "تم مسح الرسائل ",
        footer: {
          text: "©KBOOSHDev"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
     client.login('Mzk2NDY3OTA2MDU5MTczODg4.XLJpSQ.j0Bz96-8xtP2Dpwq25Yel76dKlw')

     
