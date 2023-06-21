import React, {useState} from 'react'
import classes from "./PayPage.module.css"
import {links} from "../../links/links"
import {useNavigate, useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {addPayApi} from "../../axios/allApi"

function PayPage(  ) {

    const {id} = useParams()

    const {user} = useSelector(state => state.userReducer)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [phone, setPhone] = useState('')
    const [personalAccount, setPersonalAccount] = useState('')
    const [price, setPrice] = useState('')

    const isFormValid = () => phone && personalAccount && price

    const submitHandler = (e) => {
        e.preventDefault()
        if (!isFormValid()) {
            return alert("Введите все данные")
        }
        const formData = new FormData()
        formData.append('phone', phone)
        formData.append('personal_account', personalAccount)
        formData.append('price', price)
        formData.append('userId', user.id)
        formData.append('dishId', id)
        dispatch(addPayApi(formData))
        navigate(links.base)
    }

    // const clickHandler = () => {
    //     if (!isAuth) {
    //         return alert("Авторизуйтесь")
    //     }
    //     navigate(`/pay/${course.id}/`)
    // }


    return (
        <div className={classes.container_modal}>
            <div className={classes.container}>
                <div className={classes.block_reag}>
                    <form className={classes.content_reg}
                          onSubmit={submitHandler}>
                        <div className={classes.input_conteiner}>
                            <div className={classes.block_inp}>
                                <label htmlFor="phone">Tel:</label>
                                <input
                                    className={classes.input}
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                    placeholder="+996 (___) ___-__-__ *"/>
                            </div>
                            <div className={classes.block_inp}>
                                <label htmlFor="personalAccount">Card:</label>
                                <input
                                    className={classes.input}
                                    type="number"
                                    id="personalAccount"
                                    name="personalAccount"
                                    value={personalAccount}
                                    onChange={e => setPersonalAccount(e.target.value)}
                                    placeholder="Number card"/>
                            </div>
                            <div className={classes.block_inp}>
                                <label htmlFor="price">Sum:</label>
                                <input
                                    className={classes.input}
                                    type="number"
                                    id="price"
                                    name="price"
                                    value={price}
                                    onChange={e => setPrice(e.target.value)}
                                    placeholder="Your sum"/>
                            </div>
                        </div>
                        <div className={classes.sing_up}>
                            <button className={classes.link_sing}
                                    type="submit">
                                <span className={classes.text_link}>Подтвердить</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PayPage