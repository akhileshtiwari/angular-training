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

let counter = 1;

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MySecondComponent,
    MyToUpperPipe,
    ShowUserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [{
    provide: LoggerService,
    // useClass: BetterLoggerService
    useFactory: ()=>{
      if(counter % 2){
        return new BetterLoggerService();
      }else{
        return new MyLoggerService();
      }
      counter++;
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
