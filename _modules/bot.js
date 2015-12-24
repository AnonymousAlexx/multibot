import config from '../config';
import packageJSON from '../package';
import DiscordClient from 'discord.io';

let bot = new DiscordClient({
    email: config.credentials.email,
    password: config.credentials.password,
    autorun: true,
});

function setName(bot, name) {
    bot.editUserInfo({
        password: config.credentials.password,
        username: name,
    });
}

let commands = {};

function handleMessage(user, userID, channelID, message, rawEvent) {
    if (message.indexOf(config.commandPrefix) !== 0) {
        return false;
    }

    const requestedCommand = message.split(' ')[0].substring(config.commandPrefix.length);
    if (requestedCommand.length < 1) {
        return false;
    }

    // if (userID !== config.ownerID) {
    //     return false;
    // }

    if (!commands[requestedCommand]) {
        return false;
    }

    commands[requestedCommand].fn(user, userID, channelID, message.substring(message.split(' ')[0].length).trim(), rawEvent);
}

function addGeneralCommands() {
    bot.addCommand('about', (user, userID, channelID) => {
        bot.sendMessage({
            to: channelID,
            message: 'Hey there, I\'m a bot made by Simon Knittel (<hallo@simonknittel.de>). My functionality based on the Node.js library called discord.io (<https://github.com/izy521/discord.io>). My main feature is to offer a API for plugins that can be used with me. Visit <' + packageJSON.homepage + '> for more information. If you find bugs or have other issues please report them here <' + packageJSON.bugs.url + '>',
        });
    }, 'Shows a short description of the bot');

    bot.addCommand('commands', (user, userID, channelID) => {
        let string = '';
        Object.keys(commands).forEach(command => {
            string += '`' + config.commandPrefix + command + '`' + (commands[command].description.length > 0 ? ' - ' + commands[command].description : '') + '\n';
        });

        bot.sendMessage({
            to: channelID,
            message: string,
        });
    }, 'Shows all available commands');

    bot.addCommand('rename', (user, userID) => {
        if (userID !== config.ownerID) {
            return false;
        }

        setName(bot, message);
    }, 'Renames the bot');

    bot.addCommand('kill', (user, userID) => {
        if (userID !== config.ownerID) {
            return false;
        }

        console.log('The Discord Bot got stopped through the kill command.');
        process.exit();
    }, 'Stops the bot');

    bot.addCommand('userid', (user, userID, channelID) => {
        bot.sendMessage({
            to: channelID,
            message: 'Your ID:' + userID,
        });
    }, 'Displays the ID of the user');
}

bot.addCommand = (command, fn, description = '') => {
    commands[command] = {
        description,
        fn,
    };
};

bot.on('ready', () => {
    console.log('Discord Bot started.');
    setName(bot, config.credentials.name);
});

bot.on('message', handleMessage);

addGeneralCommands();

export default bot;
