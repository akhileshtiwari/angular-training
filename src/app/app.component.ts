import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'training';

  /**
   *
   */
  constructor(private storage: StorageService, private router: Router) {

  }

  logout() {
    this.storage.setItem('user', '');
    this.router.navigate(['/login']);
  }
}
