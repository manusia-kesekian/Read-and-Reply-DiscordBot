const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
});

client.once('ready', () => {
	console.log(`${client.user.tag} is online boys!`);
});

// baca tulisan yang di baca
client.on("messageCreate", message => {
    if (message.content === `sepi`){
        message.reply('hehe')
    }
});

client.login(token);