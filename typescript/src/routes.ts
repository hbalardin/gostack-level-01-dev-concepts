import { Request, Response } from 'express';
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email:'balardin@balardin.com',
        password: 'balardin123',
        techs: [
            'Node.js',
            'ReactJS',
            'React Native',
            { title: 'javascript', experience: 100 },
        ],
    });

    return response.json({ message: 'Hello World'});
}