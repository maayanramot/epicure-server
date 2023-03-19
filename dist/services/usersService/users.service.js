'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.createUser = exports.getLastUser = exports.deleteUser = exports.getUsers = void 0
const bcryptjs_1 = __importDefault(require('bcryptjs'))
const UsersModel_1 = require('../../models/UsersModel')
const JWT_SECRET = 'iosjhfsoduyfieyuirytuiriyfhjcvbcxbvjhxbgcks'

const getUsers = async () => {
  try {
    const users = await UsersModel_1.UserModel.find()
    return users
  } catch (e) {
    throw Error(`Error while paginating Users`)
  }
}
exports.getUsers = getUsers

const deleteUser = async (id) => {
  try {
    const user = await UsersModel_1.UserModel.findByIdAndDelete(id)
    if (!user) {
      throw Error('User not found')
    } else {
      console.log(user, 'User deleted')
    }
  } catch (e) {
    throw Error('Error while tring delete User')
  }
}
exports.deleteUser = deleteUser

// const getLastUser = async () => {
//     try {
//         const lastUser = await UsersModel_1.UserModel.findOne().sort({ _id: -1 }).limit(1);
//         return lastUser;
//     }
//     catch (e) {
//         throw Error(`Error while paginating the last User`);
//     }
// };
// exports.getLastUser = getLastUser;

const createUser = async (user) => {
  const { firstName, lastName, email, password } = user
  const encryptedPassword = await bcryptjs_1.default.hash(password, 10)
  const newUser = new UsersModel_1.UserModel({
    firstName,
    lastName,
    email,
    password: encryptedPassword,
  })
  try {
    const oldUser = await UsersModel_1.UserModel.findOne({ email })
    if (oldUser) {
      throw new Error('User already exists')
    }
    const savedUser = await newUser.save()
    return savedUser
  } catch (e) {
    throw new Error('Error while creating new user')
  }
}
exports.createUser = createUser

// export const checkUserforLogIn = async (user: IUser) => {
//   const { email, password } = user
//   try {
//     const loginUser = await UserModel.findOne({ email })
//     if (!loginUser) {
//       throw new Error('User Not found')
//     }
//     if(await bcrypt.compare(password, loginUser?.password)) {
//       const token = jwt.sign({},JWT_SECRET)
//       console.log(token , "ok")
//       return loginUser
//     }
//   } catch (e) {
//     throw new Error('Error while creating new user')
//   }
// }
