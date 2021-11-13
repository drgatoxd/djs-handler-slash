# Discord.js Command Handler

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

_Veo que todos ponen esas tarjetitas, así que yo tambien las pongo xd_

## ✨ Características

-   Un command handler para Slash Commands
-   Usa Discord.js v13
-   Lo hice yo p quien más xd

## 🚧 Requisitos

-   [Node.js v16.6+](https://nodejs.org/es/download/)
-   [discord.js v13](https://discord.js.org)
-   [Un bot en Discord Developer Portal](https://discord.com/developers/applications)


---

## Estructuras

### Slash commands

```js
module.exports = {
	/**
	 * @type {import('discord.js').ApplicationCommand}
	 */
	data: { // aquí va la información del slash command
    /**
     * El nombre del comando
     * De 1-32 caracteres
     * @type {string}
     */
		name: 'ping',

    /**
     * La descripción del comando
     * No se muestra en los context-menu
     * De 1-100 caracteres
     * @type {string}
     */
		description: '¡Pong! 🏓',
		
    /**
     * El tipo del comando | https://bit.ly/3wFTqUp Las docs
     * 
     * CHAT_INPUT: Slash commands
     * USER: Context-menu al hacer clic derecho a un usuario
     * MESSAGE: Context-menu al hacer clic derecho a un mensaje
     * 
     * @type {import('discord.js').ApplicationCommandType}
     */
    type: 'CHAT_INPUT',

    /**
     * Define los argumentos del comando. 
     * Dejar vacío para comandos context-menu
     * @type {import('discord.js').ApplicationCommandOption[]}
     */
	  options: []
	},

	settings: {
    /**
     * Especifíca si el comando es solo para desarrolladores 
     * @type {boolean}
     */
		dev: false
	},

	/**
   * Esto es JSdoc, dejalo si usas algun editor con intellisense
	 * @param {import('../../struct/Client')} client
	 * @param {import('discord.js').CommandInteraction} interaction
	 */
	do: async (client, interaction) => {
		interaction.reply({
			content: `🏓 ¡Pong! \`${client.ws.ping}ms\``
		})
	}
}
```

### Eventos

```js
module.exports = {
  /**
   * El nombre del evento
   * @type {keyof import('discord.js').ClientEvents}
   */
  name: 'ready',

  /**
   * Indica si el evento solo se recibirá una vez (true)
   * @type {boolean}
   */
  once: true,

  /**
   * Agrega más argumentos según el tipo de evento
   * DEJA EL ARGUMENTO CLIENT XD
   * @param {import('../../struct/Client')} client 
   */
  do: async (client) => {
    console.log(client.user.tag)
  }
}
```

*Revisa https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandOption para saber sobre las opciones de los slash commands.*

### Agregar propiedades al cliente

Para agregar más propiedades al Client, dirígete a `struct/Client.js`

Esto es lo que verás
```js
const { Client, Collection } = require('discord.js')
const bot = require('../bot')
const handler = require('../functions/handler')
const DisTube = require("distube") // distube no incluído

module.exports = class ExtendedClient extends Client {
  constructor(settings = bot) {
    super(settings.client)

    this.commands = new Collection()
    this.config = bot

    // Para agregar más propiedades
    // escribe "this.nombre_de_la_propiedad"
    this.example = 'Hola'

    // Puedes hacer más cosas como:
    this.distube = new DisTube.default(this)

    handler(this)
  }
}
```
\* Distube no incluído en este proyecto, eso va por tu cuenta

---

## 💨 ¡Inicia el proyecto!

[![Deploy](https://www.herokucdn.com/deploy/button.svg?width=100)](https://heroku.com/deploy?template=https://github.com/SudhanPlayz/Discord-MusicBot)

[![Run on Repl.it](https://repl.it/badge/github/SudhanPlayz/Discord-MusicBot)](https://repl.it/github/SudhanPlayz/Discord-MusicBot)

---

Espero que se haya entendido (no soy buen profe :c)

Si dejas ⭐ eres pro

[![Discord](https://img.shields.io/badge/Pubertland%20City-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/tSaQpUHeWP) entra :)