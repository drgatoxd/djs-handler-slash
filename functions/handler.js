const { readdirSync } = require('fs')

/**
 * @param {import('../struct/Client')} client 
 */
module.exports = client => {
  /**----------------Command handler-------------*/
  const categories = readdirSync('./commands/')
  const array = []

  categories.forEach(cat => {
    const files = readdirSync(`./commands/${cat}`).filter(f => f.endsWith('.js'))

    files.forEach(file => {
      const cmd = require(`../commands/${cat}/${file}`)

      if (['MESSAGE', 'USER'].includes(cmd.data.type)) {
        if (cmd.data.description) delete cmd.data.description
        if (cmd.data.options) delete cmd.data.options
      }

      client.commands.set(cmd.data.name, cmd)
      array.push(cmd.data)
    })
  })

  client.on('ready', async () => {
    const guild = array => client.guilds.cache.get(client.config.guildId).commands.set(array)

    const global = array => client.application.commands.set(array)

    if (client.config.testing) guild(array)
    else global(array)
  })

  /**----------------Event handler-------------*/
  const events = readdirSync('./events/')

  events.forEach(cat => {
    const files = readdirSync(`./events/${cat}`).filter(f => f.endsWith('.js'))

    files.forEach(file => {
      const event = require(`../events/${cat}/${file}`)

      if (event.once) client.once(event.name, (...args) => event.do(client, ...args))
      else client.on(event.name, (...args) => event.do(client, ...args))
    })
  })
}
