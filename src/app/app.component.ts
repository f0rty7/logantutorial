import { LoganService } from './logan.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: any;

  constructor ( private router: Router, private loganServ: LoganService ) {

  }

  showName() {
    this.loganServ.showMsg('Logan in Service');
    // this.title = 'LOGAN'
    this.router.navigate(['/home']);
  }
}
