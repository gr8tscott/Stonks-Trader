const { User } = require('../models')

const createUser = async (req, res) => {
  let create = await User.create({
    ...req.body,
    userId: req.query.username,
    userId: req.query.password
  })
  res.send(create)
}

const getUser = async (req, res) => {
  try {
    let users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const updateUser = async (req, res) => {
  try {
    let update = await User.update(
      { ...req.body },
      { where: { id: req.params.user_id }, returning: true }
    )

    res.send(update)
  } catch (error) {
    throw error
  }
}

const deleteUser = async (req, res) => {
  try {
    let del = parseInt(req.params.user_id)
    await User.destroy({
      where: { id: req.params.user_id }
    })
    res.send(del)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser
}
