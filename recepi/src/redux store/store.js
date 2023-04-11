import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = 
  {
    count: 0 ,
    data: null,
    active: false,
    element : "",
    pause : false,
  }



const counterSlice = createSlice({
  
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      if(state === null){
        state.count = 0
      }
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    setData(state, action) {
      console.log(action.payload)
      state.data = action.payload;
    },
    setActive(state, action) {
      console.log(action.payload)
      state.active = action.payload;
    },
    setelement(state, action) {
      
      console.log(action.payload)
      state.element = action.payload;
    },
    setpause(state, action) {
      
      console.log(action.payload)
      state.pause = action.payload;
    }
  },
});

export const { increment, decrement,setData,setActive ,setelement ,setpause} = counterSlice.actions;

const store = configureStore({
  reducer: {counterSlice:counterSlice.reducer}
});

export default store;