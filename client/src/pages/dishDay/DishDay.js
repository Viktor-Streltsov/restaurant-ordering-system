import React from 'react'
import classes from "./dishDay.module.css"
import {useSelector} from "react-redux"
import DishItem from "../../components/dishItem/DishItem"

function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function DishDay() {

    const {dishes} = useSelector(state => state.allReducer)

    const checkDishes = isObjectEmpty(dishes)

    return (
        <section className={classes.dish_day}>
            <div className={classes.dish_head}>
                <h2 className={classes.about_head_dish}>
                    DISHES
                </h2>
                <h2 className={classes.text_head_dish}>
                    Dish Of The Day
                </h2>
            </div>
            <div className={classes.line_dish}></div>
            <ul className={classes.blocks_dish}>
                {
                    !checkDishes
                        ?
                        dishes.map(dish => <DishItem dish={dish}/>  )
                        :
                        <h1 className={classes.text_head_dish}>нету блюд</h1>

                }
            </ul>
        </section>
    )
}

export default DishDay