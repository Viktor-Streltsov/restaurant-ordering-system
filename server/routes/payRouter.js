const Router = require('express')
const router = new Router()
const payController = require('../controllers/payController')

router.post('/', payController.create)
router.get('/', payController.getAll)
router.get('/:id', payController.getOne)
router.get('/user/:userId', payController.getUserId)

module.exports = router