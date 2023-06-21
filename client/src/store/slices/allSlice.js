import {createSlice} from "@reduxjs/toolkit"

const allSlice = createSlice({
    name: 'allSlice',
    initialState: {
        review: [],
        pay: [],
        dishes: {},
        pays: {},
    },
    reducers: {
        setReview: (state, action) => {
            state.review = action.payload
        },
        setPay: (state, action) => {
            state.pay = action.payload
        },
        setDishes: (state, action) => {
            state.dishes = action.payload
        },
        setPays: (state, action) => {
            state.pays = action.payload
        },
    }
})

export const {
    setReview, setPay, setDishes, setPays

} = allSlice.actions

export default allSlice.reducer