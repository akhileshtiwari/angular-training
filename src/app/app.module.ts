import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first.component';
import { MySecondComponent } from './my-second/my-second.component';
import { MyToUpperPipe } from './my-to-upper.pipe';
import { ShowUserComponent } from './show-user/show-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BetterLoggerService, LoggerService, MyLoggerService } from './logger.service';
import { UserService } from './user.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { EditUserReactiveComponent } from './edit-user-reactive/edit-user-reactive.component';

let counter = 1;

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MySecondComponent,
    MyToUpperPipe,
    ShowUserComponent,
    AddUserComponent,
    EditUserComponent,
    PageNotFoundComponent,
    LoginComponent,
    EditUserReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: LoggerService,
    // useClass: BetterLoggerService
    useFactory: () => {
      if (counter % 2) {
        return new BetterLoggerService();
      } else {
        return new MyLoggerService();
      }
      counter++;
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
