import { createSlice } from "@reduxjs/toolkit";

const initailState = {
     isLoggedIn: false,
     email: null,
     userName: null,
     userID:null
}
const authSlice = createSlice({
     name: "auth",
     initailState,
     reducers: {
         SET_ACTIVE_USER: (state,action) => {
             console.log(action.payload);
             const { email , userName , userID } = action.payload;
             state.isLoggedIn = true;
             state.email = email
             state.userName = userName
             state.userID = userID
         },
         SET_REMOVE_ACTIVE: (state,action) => {
              console.log(action.payload);
              state.isLoggedIn = false;
              state.email = null
              state.userName = null 
              state.userID = null
         }
     }
});
export const  { SET_ACTIVE_USER,SET_REMOVE_ACTIVE } = authSlice.actions;
export const SelectisLoggedIn = (state)=> state.auth.isLoggedIn;
export const Selectemail = (state)=> state.auth.email;
export const SelectuserName = (state)=> state.auth.userName;
export const SelectuserID = (state)=> state.auth.userID;

export default authSlice.reducer;