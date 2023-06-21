import React, {useState} from 'react'
import classes from "./signup.module.css"
import {links} from "../../../links/links"
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import {register} from "../../../axios/usersApi"


function Signup() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const isFormValid = () => login && password && email

    const submitHandler = (e) => {
        e.preventDefault()
        if (isFormValid()) {
            dispatch(register(login, password, email))
            navigate(links.base)
        } else {
            alert('Введите все данные')
        }
    }

    return (
            <div className={classes.container_modal}>
                <div className={classes.container}>
                    <div className={classes.block_reag}>
                        <form className={classes.content_reg}
                              onSubmit={submitHandler}>
                            <div className={classes.input_conteiner}>
                                <div className={classes.block_inp}>
                                    <label htmlFor="login">Login:</label>
                                    <input
                                        className={classes.input}
                                        type="text"
                                        id="login"
                                        name="login"
                                        value={login}
                                        onChange={e => setLogin(e.target.value)}
                                        placeholder="login"/>
                                </div>
                                <div className={classes.block_inp}>
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        className={classes.input}
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="email"/>
                                </div>
                                <div className={classes.block_inp}>
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        className={classes.input}
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        placeholder="password"/>
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

export default Signup
