import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.less']
})
export class ShowUserComponent implements OnInit {

  @Input() user: User;

  console=console;
  constructor() { }

  ngOnInit(): void {
  }

  myDebuggerMethod(user){
    console.log(user);
  }

}
