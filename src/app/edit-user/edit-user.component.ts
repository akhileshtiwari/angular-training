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
  console = console;


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

      this.userService.getUser(userId)
        .subscribe(res => {
          this.userToBeSaved = res;
        })
    );
  }

  saveUser() {
    // this.userToBeSaved.saveUser();
  }

}
