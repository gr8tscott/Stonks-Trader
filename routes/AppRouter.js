const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const WatchlistRouter = require('./WatchlistRouter')
const StockRouter = require('./StockRouter')

Router.use('/user', UserRouter)
Router.use('/watchlist', WatchlistRouter)
Router.use('/stock', StockRouter)

module.exports = Router
