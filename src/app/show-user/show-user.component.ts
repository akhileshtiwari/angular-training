import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.less']
})
export class ShowUserComponent implements OnInit {

  isEditing = false;
  @Input() user: User;
  userToBeSaved : User;

  console=console;
  constructor() { }

  ngOnInit(): void {
    
  }

  myDebuggerMethod(user){
    
  }

  editUser(){
    this.isEditing = true;
  }

  userSaved(){
    this.isEditing = false;
  }

}
