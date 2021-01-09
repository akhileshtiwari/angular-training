import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

export abstract class Base {
  subs = [];

  unsbuscribe() {
    this.subs.forEach(sub => {
      sub.unsbuscribe();
    })
  }
}

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.less']
})
export class EditUserComponent extends Base implements OnInit, OnDestroy {
  userToBeSaved: User;


  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    super();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => {
      sub.unsubscribe();
    });
  }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('userId');
    this.subs.push(
      
      this.userService.getUser(userId).pipe(

    )
    .subscribe(res => {
      this.userToBeSaved = res;

    }).unsubscribe()
    );

    // let index = this.userService.getUsers().findIndex(u => u.userId == userId);
    // this.userToBeSaved = this.userService.getUsers()[index];
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
    // this.userToBeSaved.saveUser();
  }

}
