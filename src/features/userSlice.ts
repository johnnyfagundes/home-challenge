import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../types/UserTypes'
import { RootState } from '../app/store'
import { USERS } from '../mock/users'

const REDUCER_NAME = 'users'

export enum Status {
  idle = "idle",
  failed = "failed",
  pending = "pending",
  succeeded = "succeeded",
}

interface UserState {
  loginStatus: Status
  userLogged: boolean
  signUpStatus: Status
  users: User[]
}

const initialState = {
  userLogged: false,
  loginStatus: Status.idle,
  signUpStatus: Status.idle,
  users: USERS
} as UserState

const usersSlice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    signOut: (state) => {
      state.userLogged = false
    },
    reset: (state) => {
      state.loginStatus = Status.idle
      state.signUpStatus = Status.idle
    },
    setUsers: (state, action: PayloadAction<User[]>) => {
      action.payload
    },
    addUser: (state, action: PayloadAction<User>) => {
      const user = (state.users.find(item => item.email === action.payload.email))
      if (!user) {
        state.users.push(action.payload)
        state.signUpStatus = Status.succeeded
      } else {
        state.signUpStatus = Status.failed
      }
    },
    checkUser: (state, action: PayloadAction<{ email: string, password: string }>) => {
      state.loginStatus = Status.pending
      state.userLogged = !!state.users.find(user => user.email == action.payload.email && user.password == action.payload.password)
      state.loginStatus = state.userLogged? Status.succeeded : Status.failed
    }
  }
})

export const userLoggedSelector = (state: RootState) => state.userSlice.userLogged
export const loginStatusSelector = (state: RootState) => state.userSlice.loginStatus
export const signUpStatusSelector = (state: RootState) => state.userSlice.signUpStatus

export const {
  signOut,
  addUser,
  checkUser,
  reset
} = usersSlice.actions

export default usersSlice.reducer
