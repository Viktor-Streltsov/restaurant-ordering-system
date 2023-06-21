import React from 'react'
import classes from "./dishItem.module.css"
import share from "../../img/share.png"
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"


function DishItem( {dish} ) {

    const navigate = useNavigate()

    const {isAuth} = useSelector(state => state.userReducer)

    const clickHandler = () => {
        if (!isAuth) {
            return alert("Авторизуйтесь")
        }
        navigate(`/pay/${dish.id}/`)
    }

    return (
        <li className={classes.dish_meal}>
            <div className={classes.img_dish_meal}>
                <img src={process.env.REACT_APP_API_URL + dish.img} alt="img"/>
                <div className={classes.arrow_share}>
                    <img src={share} alt="share"/>
                </div>
            </div>
            <div className={classes.info_dish_meal}>
                <h2 className={classes.info_head}>
                    {dish.info_head}
                </h2>
                <p className={classes.mini_info_head}>
                    {dish.mini_info_head}
                </p>
                <p className={classes.text_info}>
                    {dish.text_info}
                </p>
            </div>
            <div className={classes.status_star_meal}>
                <div className={classes.block_star}>
                    <div className={classes.button_block_order}
                    onClick={clickHandler}>
                            <span>ORDER</span>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default DishItem