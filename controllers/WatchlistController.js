const { Watchlist } = require('../models')

const createWatchlist = async (req, res) => {
  let create = await Watchlist.create({
    ...req.body,
    watchlistId: req.query.name
  })
  res.send(create)
}

const getWatchlist = async (req, res) => {
  try {
    let watchlists = await Watchlist.findAll()
    res.send(watchlists)
  } catch (error) {
    throw error
  }
}

const updateWatchlist = async (req, res) => {
  try {
    let update = await Watchlist.update(
      { ...req.body },
      { where: { id: req.params.watchlist_id }, returning: true }
    )

    res.send(update)
  } catch (error) {
    throw error
  }
}

const deleteWatchlist = async (req, res) => {
  try {
    let del = parseInt(req.params.watchlist_id)
    await Watchlist.destroy({
      where: { id: req.params.watchlist_id }
    })
    res.send(del)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getWatchlist,
  createWatchlist,
  updateWatchlist,
  deleteWatchlist
}
