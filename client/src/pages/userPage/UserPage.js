import React, {useEffect} from 'react'
import classes from "./userPage.module.css"
import {useDispatch, useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import {getUserPayApi} from "../../axios/allApi"

function UserPage() {

    const dispatch = useDispatch()

    const {id} = useParams()

    const {pay} = useSelector(state => state.allReducer)

    const {user} = useSelector(state => state.userReducer)

    const checkPay = isObjectEmpty(pay)

    function isObjectEmpty(obj) {
        return Object.keys(obj).length === 0
    }


    useEffect(() => {
        dispatch(getUserPayApi(id))
    }, [dispatch, id])


    return (
        <div className={classes.container_content}>
            <section className={classes.container_tarif}>

                <div className={classes.head_tarif}>
                    <h2>{user.login} ваши заказы</h2>
                </div>
                {
                    !checkPay
                        ?
                        <table>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Имя</th>
                                <th>Название блюда</th>
                                <th>Оплата</th>
                            </tr>
                            </thead>
                            <tbody>
                            {pay.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.user.login}</td>
                                    <td>{item.dish.info_head}</td>
                                    <td>{item.price}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        :
                        <h2> Нету заказов</h2>
                }
            </section>
        </div>
    )
}

export default UserPage