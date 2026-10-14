const express = require('express')
const authController = require('../controllers/auth.controller')

const router = express.Router()


// This path is mounted under /api/auth in app.js.
router.post('/register', authController.userRegisterController)



module.exports = router
