import { LoganService } from './logan.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title: any;
  apiData: any;

  selectedName: any;

  constructor(private router: Router, private loganServ: LoganService) {}

  showName() {
    this.loganServ.showMsg('Logan in Service');
    // this.title = 'LOGAN'
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.loganServ.getApiData().subscribe( res => {
      this.apiData = res;
      console.log("API\n", this.apiData)
    })
  }

  getName(data) {
    this.selectedName = data;
  }

}
