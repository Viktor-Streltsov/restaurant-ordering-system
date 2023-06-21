const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const payRouter = require('./payRouter')
const dishRouter = require('./dishRouter')

router.use('/user', userRouter)
router.use('/pay', payRouter)
router.use('/dish', dishRouter)


module.exports = router