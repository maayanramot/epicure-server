"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveUser = exports.getAllUsers = void 0;
const users_service_1 = require("../../services/usersService/users.service");
const getAllUsers = async (req, res) => {
    try {
        const users = await (0, users_service_1.getUsers)();
        return res
            .status(200)
            .json(users);
    }
    catch (e) {
        throw e;
    }
};
exports.getAllUsers = getAllUsers;
// export const getLastUser = async (req: Request, res: Response) => {
//     try {
//         const lastUser = await getUser()
//         return res.status(200)
//         .json(lastUser)
//     } catch (e: any) {
//         throw e;
//     }
// }
const saveUser = async (req, res) => {
    try {
        const savedUser = await (0, users_service_1.createUser)(req.body);
        return res.status(201).json(savedUser);
    }
    catch (e) {
        return res.status(400).json({ error: e.message });
    }
};
exports.saveUser = saveUser;
// export const login = async (req: Request, res: Response) => {
//     try {
//         const loginUser: IUser | undefined = await checkUser(req.body)
//         return res.status(201).json(loginUser);
//     } catch (e : any) {
//         return res.status(400).json({ error: e.message });
//     }
// }
