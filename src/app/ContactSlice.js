import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name: "contact",
    initialState: [],
    reducers: {
        addContact(state, action) {
            state.push(action.payload)
            console.log(action.payload)
        },
        removeContact(state, action) {},
        updateContact(state, action) {},
    },
})

export default contactSlice.reducer

export const { addContact } = contactSlice.actions
// console.log(contact.actions)