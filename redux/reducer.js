import { createSlice } from "@reduxjs/toolkit";


export const userSlice=createSlice({
    name: "user",
    initialState: {
      value: 0,
      userData: {},
      movies:{},
      photos:[],
      userRecords:[],
    },
    reducers:{
        setUserData: (state, action) => {
            state.userData = action.payload;
          },
          setMoviesData:(state,action)=>{
            state.movies=action.payload;
          },
          setPhotos:(state,action)=>{
            state.photos=action.payload;
          },
          setUserRecords:(state,action)=>{
            state.userRecords=action.payload
          },
          getUserData:(state,action)=>{},
          getMovie:(state,action)=>{},
          getPhotos:(state,action)=>{},
          getUserRecords:(state,action)=>{}
    }
});
export const {
  setUserData,
  setMoviesData,
  setUserRecords,
  getMovie,
  getPhotos,
  setPhotos,
  getUserData,
  getUserRecords,
}=userSlice.actions;
export default userSlice.reducer;