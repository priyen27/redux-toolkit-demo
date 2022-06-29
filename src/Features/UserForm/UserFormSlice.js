import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userData: {},
}

export const userFormSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action?.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserData } = userFormSlice.actions

export default userFormSlice.reducer