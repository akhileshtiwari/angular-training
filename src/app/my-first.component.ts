import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
export class MyFirstComponent implements AfterViewInit, OnInit {

    title = "Users Component";

    users: Array<User>;

    constructor(
        private userService: UserService,
        private logger: LoggerService) {

    }
    ngOnInit(): void {
        this.userService.getUsers().subscribe(users => {
            this.users = users;
        })
    }
    ngAfterViewInit(): void {
    }

    userAddedHandler(user: User) {
        this.users.push(user);
    }
}