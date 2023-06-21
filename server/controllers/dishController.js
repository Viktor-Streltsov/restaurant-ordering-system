const {Dish} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class DishController {
    async create(req, res, next) {
        try {
            const {info_head, mini_info_head, text_info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const courses = await Dish.create({info_head, mini_info_head, text_info, img: fileName})
            return res.json(courses)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const dish = await Dish.findAll()
        return res.json(dish)
    }

    async getOne(req, res) {
        const {id} = req.params
        const dish = await Dish.findOne(
            {
                where:{id}
            }
        )
        return res.json(dish)
    }
}

module.exports = new DishController()