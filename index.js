// Require the necessary discord.js classes
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');
let date;


// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.commands = new Collection();

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
//	setInterval(() => { console.log(date = new Date); }, 2000);
});

client.on('messageCreate', (message) => {
	if (message.content.startsWith('$ping')) {
		message.channel.send('pong!');
	}
	if (message.content.startsWith('$hello')) {
		message.channel.send('Hi');
	}
	if (message.content.startsWith('$xur')) {
		date = new Date;
		if (date.getDay == 5 || date.getHours == 17 || date.getMinutes == 30) {
			client.users.get('Charlemagne#3214').send('/xur');
		}
		else {
			message.channel.send('Xur is Communing with The Nine.');
		}
	}
	if (message.content.startsWith('$help')) {
		message.channel.send('Here are the available commands. \n $ping - responds with "pong!" \n $hello - resonds with Hi \n $ Xur with respond with information on Xurs location');
	}
});

// Login to Discord with your client's token
client.login(token);