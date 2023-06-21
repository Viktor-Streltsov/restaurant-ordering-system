import {$api, } from "./index"
import {setError} from "../store/slices/errorSlice"
import {setDishes, setPay, setPays} from "../store/slices/allSlice"

export const getAllPayApi = () => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/pay/`)
            dispatch(setPays(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}

export const getDishesApi = () => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/dish/`)
            dispatch(setDishes(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}

export const addPayApi = (formData) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/pay/', formData)
            if (data.status === 200) {
                alert('Вы успешно добавили оплату')
            }
        } catch (e) {
            alert(e)
        }
    }
}
export const addDishApi = (formData) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/dish/', formData)
            if (data.status === 200) {
                alert('Вы успешно добавили блюдо')
            }
        } catch (e) {
            alert(e)
        }
    }
}

export const getUserPayApi = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/pay/user/${id}`)
            dispatch(setPay(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}
