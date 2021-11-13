module.exports = {
  /**
   * @type {keyof import('discord.js').ClientEvents}
   */
  name: 'interactionCreate',
  once: false,

  /**
   * @param {import('../../struct/Client')} client 
   * @param {import('discord.js').Interaction} interaction
   */
  do: async (client, interaction) => {
    if (interaction.isCommand()) {
      if (interaction.channel.type == 'DM') return

      const command = client.commands.get(interaction.commandName)

      if (!command) return interaction.reply({
        content: 'Comando desconocido :o',
        ephemeral: true
      })

      if (command.settings) {
        if (command.settings.dev)
          if (!client.config.developers.includes(interaction.user.id))
            return interaction.reply({
              content: '❌ No puedes usar este comando.'
            })
      }

      command.do(client, interaction)
        .catch(err => {
          interaction.replied
            ? interaction.editReply({ content: 'Ha ocurrido un error' })
            : interaction.reply({ content: 'Ha ocurrido un error', ephemeral: true })

          console.log(err)
        })
    }
  }
}