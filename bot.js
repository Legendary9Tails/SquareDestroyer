require('dotenv').config();
const tmi = require('tmi.js');

console.log(process.env.TWITCH_BOT_USERNAME);
console.log(process.env.TWITCH_OAUTH_TOKEN);


const opts = {
    options: { debug: true},
    connection: {
        secure: true,
        reconnect: true
    },
    identity: {
        username: process.env.TWITCH_BOT_USERNAME,
        password: process.env.TWITCH_OAUTH_TOKEN
    },
    channels: ['Legendary9Tails']
};


const client = new tmi.Client(opts);

client.on('message',(channel, user, message, self) => {
    if (self) return; //ignore own messages
    console.log('[${channel}] ${user.username}: ${message}');
    
    console.log(client.identity);
    client.say(channel,message);
});

client.connect().catch(console.error);