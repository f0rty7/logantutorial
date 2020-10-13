import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class LoganService {

  constructor(private http: HttpClient) { }

  showMsg( hh) {
    console.log(hh);
  }

  getApiData() {
    let endpoint = `https://jsonplaceholder.typicode.com/users`;
    return this.http.get(endpoint);
  }
}
