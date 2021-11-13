require('dotenv').config()
new (require('./struct/Client'))().login()

process.on('unhandledRejection', err => console.log(err))
process.on('uncaughtException', err => console.log(err))