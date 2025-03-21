import { act } from "react";

const {
  createSlice,
  nanoid,
  current,
  createAsyncThunk,
} = require("@reduxjs/toolkit");
//createSlice is use to create a slice(action and reducer).
//nanoid is use to automatic create an id.
//current is use to print the state data in console, if we didnt use current then we cant get the data in the console,
//we have to create initial state like user, email and so many things etc.
const initialState = {
  userApiData: [],
  // users: [],
  users:JSON.parse(localStorage.getItem("users"))
};

//Api Calling
export const fetchApiData = createAsyncThunk("fetch", async () => {
  // console.log("action");

  const result = await fetch("https://dummyjson.com/users");

  return result.json();
});

//Creating an Action  and reducer
const slice = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      // console.log(action);

      const data = {
        id: nanoid(),
        name: action.payload,
      };

      state.users.push(data);

      // here we can store data in our local storage means when we refresh the page then the data will deleted from ui but if we store data in local storage then the data is stored it didnt delete form local storage
      //note: when we store data from local storage then we have to write after  state.users.push(data) not before
      let userData = JSON.stringify(current(state.users)); // redux didnt accept the json data so we have to convert it into a string then store it
      localStorage.setItem("users", userData);
      // console.log(state.users);// here we didnt get the state data
      // console.log(current(state.users));
    },
    removeUser: (state, action) => {
      // console.log(action);
      const data = state.users.filter((item) => {
        return item.id != action.payload;
      });
      state.users = data;
      
      // for remove the data from the local storage
      let userData = JSON.stringify(data); 
      localStorage.setItem("users", userData);
    }
   
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiData.fulfilled, (state, action) => {
    //   console.log("builder",action);
      (state.isloading = false), (state.userApiData = action.payload);
    });
  },
});

export const { addUsers, removeUser } = slice.actions;
export default slice.reducer;
