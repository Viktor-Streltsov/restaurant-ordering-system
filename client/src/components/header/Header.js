import React, {useEffect} from 'react'
import classes from "./header.module.css"
import {links} from "../../links/links"
import {Link, useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {setIsAuth} from "../../store/slices/userSlice"
import {getUsers} from "../../axios/usersApi"
import logo from "../../img/Logo.png"
import HEALTHY_SWITCHER from "../../img/HEALTHY_SWITCHER.png"
import {getDishesApi} from "../../axios/allApi"

function Header() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isAuth, user} = useSelector(state => state.userReducer)

    const logOut = () => {
        dispatch(setIsAuth(false))
    }
    const admin = () => {
        navigate(links.admin)
    }
    const userCabinet = () => {
        navigate(`/user/${user.id}/`)
    }

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getDishesApi())
    }, [dispatch])

    return (
        <div className="container">
            <header className={classes.head}>
                <nav className={classes.menu}>
                    <div className={classes.logo}>
                        <picture className={classes.logo_img}>
                            <img src={logo} alt="logo"/>
                        </picture>
                        <div className={classes.text_logo}>
                            <img src={HEALTHY_SWITCHER} alt="text"/>
                        </div>
                    </div>
                    <div className={classes.menu_link}>
                        <ul>
                            <li>
                                <Link to={links.base}><span>Главная</span></Link>
                            </li>
                            {isAuth
                                ?
                                <>
                                    <li onClick={userCabinet}>
                                        <span>Кабинет</span>
                                    </li>
                                    {user.role === "ADMIN"
                                        ?
                                        <li onClick={admin}>
                                            <span>Admin</span>
                                        </li>
                                        :
                                        ''
                                    }
                                    <li>
                                        <li onClick={logOut}>
                                            <span>Выход</span>
                                        </li>
                                    </li>
                                    <li className={classes.link_nav}>
                                        <span>Вы вошли как: {user.login}</span>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <Link
                                              to={links.signup}><span>Регистрация</span></Link>
                                    </li>
                                    <li>
                                        <Link  to={links.login}><span>Вход</span></Link>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header