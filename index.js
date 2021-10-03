const { Client, Intents } = require('discord.js');
const { token, token2 } = require('./config.json');

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
});

client.once('ready', () => {
	console.log(`${client.user.tag} is online boys!`);
    client.user.setActivity(`sepi`, { type: "WATCHING" });
});
// baca tulisan yang di baca
client.on("messageCreate", message => {
    var text = message.content.toLowerCase();
    var textarr = ReduceText(kasar, text);
    var key = selectionText(kasar, text);
    var key2 = selectionTextMabar(moba, text);
    var count = 0;
    if (text === `sepi`){
        message.reply('hehe');
        console.log('masuk ke sepi')
    } else if (text === key){
        message.reply(textarr[0].toLocaleUpperCase());
        setTimeout(function(){ 
            message.reply('Dan juga '+textarr[1]);
            message.reply('Itu hanyalah nama nama binatang. :grinning: ');
        }, 500);
        console.log('Bahasa Kasar')
    } else if (text === key2){
        message.reply(kalimat[Math.floor(Math.random() * 3)]);
    }
});

var kasar = ['anjing', 'babi', 'monyet'];
var moba = ['lol?','dota?','wr?'];
var kalimat = [
    'Gak dulu gan',
    'Hayu aja sih, gimana dah yang lain? @everyone',
    'LETS GOOOOOOOOOOOOOOOOOOOO!!!!',
    'Skip dah gua kan bot'
];

function selectionText(kasar, text){
    for (let i=0; i < kasar.length;i++){
        if (kasar[i] === text){
            var key = kasar[i];
        }
    }
    return key;
}

function selectionTextMabar(moba, text){
    for (let i=0; i < kasar.length;i++){
        if (moba[i] === text){
            var key = moba[i];
        }
    }
    return key;
}

function ReduceText(kasar, kunci){
    var text = [];
    let j = 0;
    for (let i=0; i < kasar.length;i++){
        if (kasar[i] !== kunci){

            text[j] = kasar[i]+'.';
            j = j + 1;
        }
    }
    return text;
}



client.login(token);