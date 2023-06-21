const {Pay, User, Dish} = require('../models/models')
const ApiError = require('../error/ApiError')

class payController {
    async create(req, res, next) {
        try {
            const {phone, personal_account, price, userId, dishId} = req.body
            const pay = await Pay.create({phone, personal_account, price, userId, dishId})
            return res.json(pay)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const pay = await Pay.findAll({
            include: [
                {
                    model: User,
                    attributes: ["login"]
                },
                {
                    model: Dish,
                    attributes: ["info_head"],
                },
            ],
        })
        return res.json(pay)
    }

    async getOne(req, res) {
        const {id} = req.params
        const pay = await Pay.findAndCountAll(
            {
                where:{id}
            }
        )
        return res.json(pay)
    }
    async getUserId(req, res) {
        const {userId} = req.params
        const pay = await Pay.findAll(
            {
                where:{userId},
                include: [
                    {
                        model: User,
                        attributes: ["login"]
                    },
                    {
                        model: Dish,
                        attributes: ["info_head"],
                    },
            ]
            },

        )
        return res.json(pay)
    }
}

module.exports = new payController()