import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { User } from './user.model';

@Injectable({
    providedIn:'root'
})
export class UserService {

    private users: Array<User> = [];

    constructor(private logger: LoggerService){

    }

    getUsers() {
        return this.users;
    }

    addUser(user: User) {
        this.logger.log(user);
        this.users.push(user);
    }
}