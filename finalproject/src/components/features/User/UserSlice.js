import { createSlice, nanoid ,createAsyncThunk } from '@reduxjs/toolkit'
import { getUsers,getUserByIdA,postUserA,loginA } from './UserApi'

const initialState = {
    currentUser:null,
    arrUsers:[],
    status: "guest",
    userInfo: null,

}

export const fetchAllUsers = createAsyncThunk(
    'user/fetchAllUsers',
    async (thunkAPI) => {
        const res = await getUsers()
        return res
    },
)

export const getUserById = createAsyncThunk(
    'user/getUserById',
    async (id,thunkAPI) => {
        const res = await getUserByIdA(id)
        return res
    },
)

export const postUser = createAsyncThunk(
    'user/postUser',
    async (newUser,thunkAPI) => {
        const res = await postUserA(newUser)
        return res
    },
)

export const login = createAsyncThunk(
    'users/login',
    async (user,thunkAPI) => {
        const res = loginA(user)
        return res
    },
)



export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state, action) => {
            state.currentUser = null
            state.status="guest"        },
            admin: (state, action) => {
                state.userInfo = action.payload;

                state.status="admin"        },
    },

    
    extraReducers: (builder) => {
        builder

            .addCase(login.fulfilled, (state, { payload }) => {
                state.currentUser=payload
                state.status="customer"
                // // if(state.currentUser.password==="325770659"){
                // //     if(state.currentUser.tz==="325770659")
                // //          state.type="pending"}
                // //   else
                // //   {
                //     if(state.currentUser!=null)
                //     // let userc=state.arrUser.filter(x=>x.username==state.currentUser.username&&x.password==state.currentUser.password)
                //     // if(userc!=null)
                //       state.type="fulfilled"//user
                //     else
                //       state.type="rejected"
                //   }
                // // state.status="fulfilled"
     } )
            .addCase(postUser.fulfilled, (state, { payload }) => {
                state.currentUser = payload
                state.status = "customer"
                console.log(state.currentUser)
                state.userInfo = payload;

            })
            .addCase(fetchAllUsers.fulfilled, (state, { payload }) => {
               
                state.arrUsers = payload
            })
    },
})


export const { admin, logout ,setCurrentUser} = UserSlice.actions

export default UserSlice.reducer