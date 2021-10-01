const { Client, Intents } = require('discord.js');
const { token, token2 } = require('./config.json');

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
});

client.once('ready', () => {
	console.log(`${client.user.tag} is online boys!`);
    client.user.setActivity(`sepi`, { type: "WATCHING" });
});

const kasar = ["anjing", "babi", "monyet"];

// baca tulisan yang di baca
client.on("messageCreate", message => {
    var text = [];
        let j = 0;
        for (let i=0; i < kasar.length;i++){
            if (message.content.toLowerCase() === kasar[i]){
                var key = kasar[i];
            }
            if (kasar[i] !== key){
                text[j] = kasar[i]+'.';
                j = j + 1;
            }
        }
    if (message.content.toLowerCase() === `sepi`){
        message.reply('hehe');
        console.log('masuk ke sepi')
    } else if (message.content.toLowerCase() === key){
        message.reply(text[0].toLocaleUpperCase());
        setTimeout(function(){ 
            message.reply('Dan juga '+text[1]);
            message.reply('Itu hanyalah nama nama binatang. :grinning: ');
        }, 500);
        
        console.log('Bahasa Kasar')
    }
});

client.login(token);