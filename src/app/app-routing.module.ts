import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { MyFirstComponent } from './my-first.component';

const routes: Routes = [
  {
    path: 'adduser',
    component: AddUserComponent
  },
  {
    path: '',
    component: MyFirstComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
