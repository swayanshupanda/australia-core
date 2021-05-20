import express from 'express';
import argon2 from 'argon2';

import debug from 'debug';
import userServices from '../services/user.services';

const log: debug.IDebugger = debug('app:users-controller');

class UsersController {
    async listUsers(req: express.Request, res: express.Response) {
        const users = await userServices.list(100, 0);
        res.status(200).send(users);
    }

    async getUserById(req: express.Request, res: express.Response) {
        const user = await userServices.readById(req.body.id);
        res.status(200).send(user);
    }

    async createUser(req: express.Request, res: express.Response) {
        req.body.password = await argon2.hash(req.body.password);
        const userId = await userServices.create(req.body);
        res.status(201).send({ id: userId });
    }

    async put(req: express.Request, res: express.Response) {
        req.body.password = await argon2.hash(req.body.password);
        log(await userServices.putById(req.body.id, req.body));
        res.status(204).send();
    }

    async removeUser(req: express.Request, res: express.Response) {
        log(await userServices.deleteById(req.body.id));
        res.status(204).send();
    }
}

export default new UsersController();