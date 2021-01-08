import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  userName: string;
  pwd: string;
  constructor(private router: Router, private storage: StorageService) { }

  ngOnInit(): void {
  }

  login() {
    //making an api call to validate the user details and get mroe details sucha s role, active
    this.storage.setItem('user', {
      userName: this.userName
    })
    this.router.navigate(['/home']);
  }

}
