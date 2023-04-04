import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./ContactSlice";

const store = configureStore({
	reducer: {
		contacts: contactSlice,

	}
})

export default store

// import { createStore } from "redux"


// const reducerFn = (state={ 
// 							counter: 0,
// 							formData: ""
// 					}, action) => {
// 						if (action.type === "INCREMENT") {
// 							return {counter: state.counter + 1}
// 						} else if (action.type === "DECREMENT") {
// 							return {counter: state.counter - 1}
// 						} else if (action.type === "ADD") {
// 							return {counter: state.counter + action.payload}
// 						} else if (action.type === "ADD_CONTACT") {
// 							return {formData: action.payload}
// 						}
// 					return state;

// };

// const store = createStore(reducerFn);

// export default store;

