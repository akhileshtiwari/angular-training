import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user-reactive',
  templateUrl: './edit-user-reactive.component.html',
  styleUrls: ['./edit-user-reactive.component.less']
})
export class EditUserReactiveComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userService: UserService, private fb: FormBuilder) { }

  userToBeSaved = null;

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('userId');

    this.userService.getUser(userId)
      .subscribe(res => {
        this.userToBeSaved = res;
        this.userForm.patchValue(this.userToBeSaved);
      });
  }

  // userForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   id: new FormControl('')
  // });

  userForm = this.fb.group({
    firstName: ['',Validators.required, Validators.minLength(5),Validators.maxLength(10)],
    lastName: ['',Validators.required],
    id: ['']
  })



  saveUser() {
    console.log(this.userForm.value);
  }

}
