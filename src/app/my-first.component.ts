import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { AddUserComponent } from './add-user/add-user.component';
import { LoggerService, MyLoggerService } from './logger.service';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
    selector: 'app-my-first',
    templateUrl: './my-first.component.html',
    styleUrls: ['./my-first.component.less'],
    providers: [
        {
            provide: LoggerService,
            useClass: MyLoggerService
        }
    ]
})
export class MyFirstComponent implements AfterViewInit {

    title = "Users Component";


    public get users(): Array<User> {
        this.logger.log('users accessed');
        return this.userService.getUsers();
    }

    constructor(private userService: UserService, private logger: LoggerService) {

    }
    ngAfterViewInit(): void {
    }

    userAddedHandler(user: User) {
        this.users.push(user);
    }
}