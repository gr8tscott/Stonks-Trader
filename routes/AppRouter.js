const Router = require('express').Router()

const WatchlistRouter = require('./WatchlistRouter.js')
const StockRouter = require('./StockRouter.js')
const UserRouter = require('./UserRouter.js')
const PortfolioRouter = require('./PortfolioRouter.js')

Router.use('/user', UserRouter)
Router.use('/watchlist', WatchlistRouter)
Router.use('/stock', StockRouter)
Router.use('/portfolio', PortfolioRouter)

module.exports = Router
//
