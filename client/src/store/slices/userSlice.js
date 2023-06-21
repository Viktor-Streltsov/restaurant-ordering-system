import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'userSlice',
    initialState: {
        users: [],
        user: {},
        isAuth: false,
    },
    reducers: {
        setUsers: (state,action)=> {
            state.users = action.payload
        },
        setUser: (state,action)=> {
            state.user = action.payload
        },
        setIsAuth: (state,action) => {
            state.isAuth = action.payload
        }
    }
})

export const {setUser,setIsAuth,setUsers} = userSlice.actions

export default userSlice.reducer