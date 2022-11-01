const router = require('express-promise-router')()
const userController = require('../controllers/user.controllers')

router.get('/user', userController.findAll)
router.get('/user/:id', userController.findByPk)
router.post('/user', userController.create)
router.put('/user/:id', userController.update)
router.delete('/user/:id', userController.delete)

module.exports = router
