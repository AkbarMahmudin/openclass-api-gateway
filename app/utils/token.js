require('dotenv').config()

const jwt = require('jsonwebtoken')

const verifyAccessToken = (req, res, next) => {
  try {
    const bearerHeader = req.headers.authorization
    if (!bearerHeader) {
      return res.json(403, {
        status: 'fail',
        message: 'Authorization is required'
      })
    }

    // Split key : Bearer
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1]
    const decoded = jwt.verify(bearerToken, process.env.JWT_SECRET_KEY)
    req.user = decoded

    next()
  } catch (err) {
    return res.json(403, {
      status: 'fail',
      message: err.message
    })
  }
}

module.exports = { verifyAccessToken }
