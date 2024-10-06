import { configureStore, createSlice } from "@reduxjs/toolkit";

const state = {
    balance: 0,
    fullName: "",
    mobile: null
}

const transaction = []

const userSlice = createSlice({
    name: "user",
    initialState : state,
    reducers:{
        updateMobileNumber: (state, action) => {
            state.mobile = action.payload
        },
        updateFullName: (state, action) => {
            state.fullName = action.payload
        },
        deposit: (state, action) => {
            state.balance += +action.payload
        },
        withdraw: (state, action) => {
            state.balance -= action.payload
        },
        reset: (state) => {
            state.fullName = "",
            state.mobile = null,
            state.balance = 0
        }
    }
}
)

const tranSlice = createSlice({
    name : "transactions",
    initialState: transaction,
    reducers:{
        addTransaction : (state, action) => {
            state.push(action.payload)
        }
    }

})



const store = configureStore({
    reducer:{
        user: userSlice.reducer,
        transaction: tranSlice.reducer
    }
})

export default store;

export const { updateMobileNumber,updateFullName,deposit,withdraw,reset } = userSlice.actions

export const { addTransaction } = tranSlice.actions


