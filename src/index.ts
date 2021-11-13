import { Client, Message } from 'discord.js';

const client = Client()

client.on('ready', () => {console.log(`Logged in as ${client.user.tag}`)})
client.on('message', (message: Message) => {if (message.content === 'ping') {message.reply('pong')}})
client.login(process.env.TOKEN)
