import React, {useEffect} from 'react'
import classes from "./adminPage.module.css"
import {useDispatch, useSelector} from "react-redux"
import {getUsers} from "../../axios/usersApi"
import AddDish from "../../components/addDish/AddDish"
import {getAllPayApi} from "../../axios/allApi"

function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
}


function AdminPage() {
    const dispatch = useDispatch()

    const {pays} = useSelector(state => state.allReducer)

    const checkPays = isObjectEmpty(pays)
    console.log(checkPays)

    useEffect(() => {
        dispatch(getAllPayApi())
        dispatch(getUsers())
    }, [dispatch])


    return (
        <div className={classes.container_content}>
            <AddDish/>
            <section className={classes.container_tarif}>
                <div className={classes.head_tarif}>
                    <h2>Все заказы</h2>
                </div>
                {
                    !checkPays
                        ?

                        <table>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Имя</th>
                                <th>Телефон</th>
                                <th>Карта</th>
                                <th>Название блюда</th>
                                <th>Оплата</th>
                            </tr>
                            </thead>
                            <tbody>
                            {pays.map(item =>
                                (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.user.login}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.personal_account}</td>
                                        <td>{item.dish.info_head}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                        :
                        <h2> Нету заказов</h2>
                }
            </section>
        </div>
    )
}

export default AdminPage