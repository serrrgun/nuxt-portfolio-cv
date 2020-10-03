const express = require('express')
const {login, createUser} = require('../controllers/auth.controller')
const router = express.Router()
//const listEndpoints = require('express-list-endpoints')

// /api/auth/admin/login
router.post('/admin/login', login)

// /api/auth/admin/create
router.post('/admin/create', createUser)

//console.log(listEndpoints(router))
module.exports = router
