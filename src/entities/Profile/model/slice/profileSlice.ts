import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProfileSchema } from '../types/profile'

const initialState: ProfileSchema = {
  data: undefined,
  error: undefined,
  isLoading: false,
  readonly: true,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // setUsername: (state, action: PayloadAction<string>) => {
    //   state. = action.payload
    // },
  },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
