const { Client, Collection } = require('discord.js')
const bot = require('../bot')
const handler = require('../functions/handler')

module.exports = class ExtendedClient extends Client {
  constructor(settings = bot) {
    super(settings.client)

    this.commands = new Collection()
    this.config = bot

    handler(this)
  }
}