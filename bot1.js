/**
 * A ping pong bot, whenever you send "ping", it replies "pong"
 */

// Import the discord.js module
const Discord = require('discord.js');
const config = require('./config.json');
const prefix = config.prefix

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});
