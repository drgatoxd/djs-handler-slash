module.exports = {
  /**
   * @type {keyof import('discord.js').ClientEvents}
   */
  name: 'ready',
  once: true,

  /**
   * @param {import('../../struct/Client')} client 
   */
  do: async client => {
    console.log(client.user.tag)
  }
}