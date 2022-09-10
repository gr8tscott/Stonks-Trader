const { Portfolio } = require('../models')

const createPortfolio = async (req, res) => {
  let create = await Portfolio.create({
    ...req.body,
    portfolioId: req.query.name,
    portfolioId: req.query.userId
  })
  res.send(create)
}

const getPortfolio = async (req, res) => {
  try {
    let portfolio = await Portfolio.findAll()
    res.send(portfolio)
  } catch (error) {
    throw error
  }
}

const updatePortfolio = async (req, res) => {
  try {
    let update = await Portfolio.update(
      { ...req.body },
      { where: { id: req.params.portfolio_id }, returning: true }
    )

    res.send(update)
  } catch (error) {
    throw error
  }
}

const deletePortfolio = async (req, res) => {
  try {
    let del = parseInt(req.params.portfolio_id)
    await Portfolio.destroy({
      where: { id: req.params.portfolio_id }
    })
    res.send({ message: `Deleted portfolio with an id of ${del}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getPortfolio,
  createPortfolio,
  updatePortfolio,
  deletePortfolio
}
