import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { MyFirstComponent } from './my-first.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './gaurds/auth.guard';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: MyFirstComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    redirectTo: 'welcome',
    canActivate: [AuthGuard]
  },
  {
    path: 'adduser',
    component: AddUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edituser/:userId',
    component: EditUserComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
