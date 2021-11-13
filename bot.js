module.exports = {
  /**
   * @type {import('discord.js').ClientOptions}
   */
  client: {
    intents: 3839,
    failIfNotExists: false
  },

  /**
   * Especifica si el bot esta en etapa de prueba
   * @true = El bot subirá los comandos a un servidor. Se actualiza al instante
   * @false = El bot subirá los comandos globalmente. Demora al menos 30 minutos dependiendo de la cantidad de comandos
   * 
   * @type {boolean}
   */
  testing: true,

  /**
   * Escribe la ID de un servidor para subir los comandos
   * Recuerda activar el scope applications.commands al invitar al bot
   * @type {string}
   */
  guildId: '904011545896431627',

  /**
   * Escribe la(s) ID(s) de los desarrolladores dentro de este array. Se usará para los comandos de desarrollador (eval por ejemplo)
   * 
   * @example ['817778158337916959', '853768838519717898']
   * @type {string[]}
   */
  developers: []
}