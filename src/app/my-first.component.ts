import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { User } from './user.model';

@Component({
    selector: 'app-my-first',
    templateUrl: './my-first.component.html',
    styleUrls: ['./my-first.component.less']
})
export class MyFirstComponent {

    title = "Users Component";
    users: Array<User>;
    constructor() {
        this.users =
            [{
                firstName: 'Akhilesh',
                lastName: 'Tiwari',
                userId: 'aktiwari'
            },
            {
                firstName: 'Dylan',
                lastName: 'T',
                userId: 'dt'
            },
            {
                firstName: 'Sachin',
                lastName: 'Tendulkar',
                userId: null
            }
            ]
    }

    addUser(e, firsName, lastName, userId){
        console.log("event",e);
        this.users.push({
            firstName: firsName,
            lastName: lastName,
            userId: userId
        });
    }
}