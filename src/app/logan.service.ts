import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoganService {

  constructor() { }

  showMsg( hh) {
    console.log(hh);
  }
}
