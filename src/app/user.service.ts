import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { User } from './user.model';
import { DataService } from './services/data.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private readonly URL = "/users";
    private users: Array<User> = [{
        firstName: "Rohit",
        lastName: 'Sharma',
        userId: 'rohit'
    }];

    constructor(private logger: LoggerService, private dataService: DataService) {

    }

    getUser(userId) {
        return this.dataService.get(this.URL + '/' + userId);
    }

    getUsers() {
        return this.dataService.get(this.URL);
    }

    addUser(user: User) {
        this.logger.log(user);
        this.users.push(user);
    }
}