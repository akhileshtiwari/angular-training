import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.less']
})
export class EditUserComponent implements OnInit {


  userToBeSaved: User;


  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('userId');
    let index = this.userService.getUsers().findIndex(u => u.userId == userId);
    this.userToBeSaved = this.userService.getUsers()[index];
    // console.log("edit user", this.user);
    // this.userToBeSaved = JSON.parse(JSON.stringify(this.user));
    // this.userToBeSaved = { ...this.user };
    // Object.assign(this.userToBeSaved,this.user);
    // this.userToBeSaved = {
    //   firstName: this.user.firstName,
    //   lastName: this.user.lastName,
    //   userId: this.user.userId
    // }
  }

  saveUser() {
    let index = this.userService.getUsers().findIndex(u => u.userId == this.userToBeSaved.userId);
    this.userService.getUsers()[index] = this.userToBeSaved;
    this.router.navigateByUrl('/home');
  }

}
