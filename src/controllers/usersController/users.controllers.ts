import { Request, Response } from 'express'
import { IUser } from '../../models/UsersModel'
import {
  checkUserforLogIn,
  createUser,
  deleteUser,
  getUserData,
  getUsers,
} from '../../services/usersService/users.service'

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUsers()
    return res.status(200).json(users)
  } catch (e) {
    throw e
  }
}

export const deleteOneUser = async (req: Request, res: Response) => {
  try {
    const user = await deleteUser(req.params.id)
    return res.status(200).json(user)
  } catch (e) {
    throw e
  }
}

export const saveUser = async (req: Request, res: Response) => {
  try {
    const savedUser: IUser = await createUser(req.body)
    return res.status(201).json(savedUser)
  } catch (e: any) {
    return res.status(400).json({ error: e.message })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const loginUser: string | undefined = await checkUserforLogIn(req.body)
    const token = loginUser
    return res.status(201).json({ status: 'ok', data: token })
  } catch (e:any) {
    return res.status(400).json({ error: e.message })
  }
}

export const userData = async (req: Request, res: Response) => {
  try {
    const user = await getUserData(req.body)
    return res.send({ status: 'ok', data: user })
  } catch (e:any) {
    return res.status(400).json({ error: e.message })
  }
}
