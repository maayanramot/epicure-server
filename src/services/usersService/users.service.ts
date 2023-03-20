import bcrypt from 'bcryptjs'
import { IUser, UserModel } from '../../models/UsersModel'

import jwt from 'jsonwebtoken';
const JWT_SECRET = "iosjhfsoduyfieyuirytuiriyfhjcvbcxbvjhxbgcks"

export const getUsers = async () => {
  try {
    const users = await UserModel.find()
    return users
  } catch (e) {
    throw Error(`Error while paginating Users`)
  }
}

export const deleteUser = async (id: string) => {
  try {
    const user = await UserModel.findByIdAndDelete(id)
    if (!user) {
      throw Error('User not found')
    } else {
      console.log(user, 'User deleted')
    }
  } catch (e) {
    throw Error('Error while trying delete User')
  }
}

export const createUser = async (user: IUser) => {
  const { firstName, lastName, email, password } = user

  const encryptedPassword = await bcrypt.hash(password, 10)

  const newUser = new UserModel({
    firstName,
    lastName,
    email: email.toLowerCase(),
    password: encryptedPassword,
  })

  try {
    const oldUser = await UserModel.findOne({ email })

    if (oldUser) {
      throw new Error('User already exists')
    }

    const savedUser = await newUser.save()
    return savedUser

  } catch (e) {
    throw new Error('Error while creating new user')
  }
}

export const checkUserforLogIn = async (user: IUser) => {

  const { email, password } = user
  
  try { 
    const loginUser = await UserModel.findOne({ email })
    if (!loginUser) {
      throw new Error('User Not found')
    }
    if(await bcrypt.compare(password, loginUser?.password)) {
      const token = jwt.sign({},JWT_SECRET)
      return token
    }

  } catch (e) {
    throw new Error('Error while creating new user')
  }
}

// export const getUserData = async (userToken: any) => {
//   const { token } = userToken

//   try {
//     const user = jwt.verify(token,JWT_SECRET)
//   } catch (e) {
//     throw new Error('Error while getting user data by token')
//   }
// }


// export const getLastUser = async () => {
//   try {
//     const lastUser = await UserModel.findOne().sort({ _id: -1 }).limit(1)
//     return lastUser
//   } catch (e) {
//     throw Error(`Error while paginating the last User`)
//   }
// }