import UsersDao from '../daos/user.daos'
import { CRUD } from '../../common/interfaces/crud.interfaces'
import { CreateUserDto } from '../dtos/create.user.dto';
import { PutUserDto } from '../dtos/put.user.dto';

class UsersService implements CRUD {
    async create(resource: CreateUserDto) {
        return UsersDao.addUser(resource);
    }

    async deleteById(id: string) {
        return UsersDao.removeUserById(id);
    }

    async list(limit: number, page: number) {
        return UsersDao.getUsers();
    }

    async readById(id: string) {
        return UsersDao.getUserById(id);
    }

    async putById(id: string, resource: PutUserDto) {
        return UsersDao.putUserById(id, resource);
    }

    async getUserByEmail(email: string) {
        return UsersDao.getUserByEmail(email);
    }
}

export default new UsersService();