const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', async() => {
var server = "515476681511927808"; 
var channel = "515477199168471048";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما جابت اندومي ماما  ماما جابت اندومي ماما جابت اندومي  **')
    },305);
})








client.login(process.env.BOT_TOKEN);
