import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { User } from '../user.model';
import { MyLoggerService } from '../logger.service';
import { UserService } from '../user.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.less']
})
export class AddUserComponent implements AfterViewInit {

  @Output() userAdded: EventEmitter<User> = new EventEmitter();

  @ViewChild('firstName') firstName:ElementRef;

  constructor(private userService: UserService) { }
  ngAfterViewInit(): void {
    this.firstName.nativeElement.focus();
  }

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
