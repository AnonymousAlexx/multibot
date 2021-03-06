# Discord Bot API
This is a plugin based, self-hosted and configurable Discord bot. You can use plugins to play music, do a raffle or other things. You can even create your own ones!

## Need help?
Join my Discord server: https://discord.gg/0jV29zKlvdJbDx3f  

## Installation
1. Install [Docker](https://docker.com) and make sure it's available in your [PATH](https://en.wikipedia.org/wiki/Environment_variable) variable
2. Download the latest version of the bot here: https://github.com/simonknittel/discord-bot-api/archive/master.zip
3. Extract the download
4. Duplicate the [config-sample.cson](./config-sample.cson) and rename it to `config.cson`
5. Edit the new `config.cson` to your needs
    * Visit the full [documentation](./documentation/config.cson_explained.md) for more information
6. Invite the bot to your server https://finitereality.github.io/permissions/?v=103926784
7. Open a terminal in that extracted directory
8. Run `docker build -t my-bot .` to build the Docker image
9. Run `docker run my-bot` to start it (run `docker run -d my-bot` to run it in the background)

## Enable a plugin
1. Add the name of the plugin to the `plugins` array of the `config.cson` (see [config.cson explained](./documentation/config.cson_explained.md) for an example)

<!--
## Add plugins
1. Follow the install instructions of the plugin

_OR_

1. Copy the plugin to the [plugins](./plugins) directory
2. Start your bot and enable the plugin with `!enable <plugin>`
    * Example: `!enable dice`
 -->

## Update your bot
The bot will notify the owner if there is a new release available. It will check the version on the start and every 60 minutes after that.

1. Download the latest release here: https://github.com/simonknittel/discord-bot-api/archive/master.zip
2. Do the same steps as listed under [Installation](#installation) but keep your old `config.cson`
    * Make sure to read the changelog for possible changes of the configuration

## Develop your own plugin
Visit the [full documentation](./documentation/develop_your_own_plugin.md)

## Available plugins
Contact me to get your plugins listed here.

* [Music](./plugins/music)
    + Visit the [README.md](./plugins/music/README.md) of the plugin for the commands, install instructions and more.
* [Dice](./plugins/dice)
    + Visit the [dice.js](./plugins/dice.js) of the plugin for the commands, install instructions and more.

## General commands
* `!commands` - Shows all available commands
    + Synonyms: `!help`
* `!about` - Shows a short description of the bot
* `!kill` - Stops the bot
    + Synonyms: `!stop`
* `!me` - Shows the ID of the user
    + Synonyms: `!userid`
* `!enable <plugin>` - Enables a plugin
    + Example: `!enable dice`
* `!op <user id or mention> <permission>` - Gives an user a permission
* `!deop <user id or mention> <permission>` - Removes a permission from an user
* `!prefix <new prefix>` - Changes the global command prefix
    + Example: `!prefix $`
* `!owner <user id or mention>` - Changes the owner of the bot
* `!rename <new name>` - Renames the bot
* `!reload` - Reloads the config
    + Synonyms: `!refresh`
* `!avatar <url or relative path>` - Gives the bot an avatar
    + Setting it to `null` will remove the avatar.

## Planned features
Visit https://github.com/simonknittel/discord-bot-api/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement

## Thanks
Thanks to everyone who reports me bugs, gives me feedback or tries to figure out the cause of an issues. Without them the Discord Bot API wouldn't be so awesome.

## License
Copyright (C) 2017 Simon Knittel (<hallo@simonknittel.de>)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
