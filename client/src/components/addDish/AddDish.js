import React, {useState} from 'react'
import classes from "./addDish.module.css"
import {links} from "../../links/links"
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import {addDishApi} from "../../axios/allApi"

function AddDish() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [image, setImage] = useState('')
    const [info_head, setInfo_head] = useState('')
    const [mini_info_head, setMini_info_head] = useState('')
    const [text_info, setText_info] = useState('')

    const isFormValid = () => image && info_head && mini_info_head && text_info

    const submitHandler = (e) => {
        e.preventDefault()
        if (!isFormValid()) {
            return alert("Введите все данные")
        }
        const formData = new FormData()
        formData.append('img', image)
        formData.append('info_head', info_head)
        formData.append('mini_info_head', mini_info_head)
        formData.append('text_info', text_info)
        dispatch(addDishApi(formData))
        navigate(links.base)
    }

    return (
        <div className={classes.container_modal}>
            <div className={classes.container}>
                <div className={classes.block_reag}>
                    <form className={classes.content_reg}
                          onSubmit={submitHandler}>
                        <div className={classes.input_conteiner}>
                            <div className={classes.block_inp}>
                                <label htmlFor="info_head">Название блюда:</label>
                                <input
                                    className={classes.input}
                                    type="text"
                                    id="info_head"
                                    name="info_head"
                                    value={info_head}
                                    onChange={e => setInfo_head(e.target.value)}
                                    placeholder="Название блюда"/>
                            </div>
                            <div className={classes.block_inp}>
                                <label htmlFor="mini_info_head">Краткое название:</label>
                                <input
                                    className={classes.input}
                                    type="text"
                                    id="mini_info_head"
                                    name="mini_info_head"
                                    value={mini_info_head}
                                    onChange={e => setMini_info_head(e.target.value)}
                                    placeholder="Краткое название"/>
                            </div>
                            <div className={classes.block_inp}>
                                <label htmlFor="text_info">Описание:</label>
                                <input
                                    className={classes.input}
                                    type="text"
                                    id="text_info"
                                    name="text_info"
                                    value={text_info}
                                    onChange={e => setText_info(e.target.value)}
                                    placeholder="Описание"/>
                                <input
                                    type="file"
                                    name="photo"
                                    id="img"
                                    accept="/image/*, .png, .jpg, .gif, .web"
                                    onChange={e => setImage(e.target.files[0])}
                                />
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

export default AddDish