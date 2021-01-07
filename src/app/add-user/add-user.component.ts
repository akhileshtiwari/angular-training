import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { User } from '../user.model';
import { MyLoggerService } from '../logger.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.less']
})
export class AddUserComponent {

  @Output() userAdded: EventEmitter<User> = new EventEmitter();

  constructor(private userService: UserService) { }

  addUser(firsName, lastName, userId) {
    const user = {
      firstName: firsName,
      lastName: lastName,
      userId: userId,
      isActive: true
    };

    this.userService.addUser(user);

  }

}
