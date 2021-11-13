module.exports = {
  /**
   * @type {import('discord.js').ApplicationCommand}
   */
  data: {
    name: 'ping',
    description: '¡Pong! 🏓',
    type: 'CHAT_INPUT',
    options: []
  },

  settings: {
    dev: false
  },

  /**
   * @param {import('../../struct/Client')} client 
   * @param {import('discord.js').CommandInteraction} interaction 
   */
  do: async (client, interaction) => {
    interaction.reply({
      content: `🏓 ¡Pong! \`${client.ws.ping}ms\``
    })
  }
}