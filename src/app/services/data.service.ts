import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private env: EnvironmentService) { }

  get(url): Observable<any> {
    return this.http.get(this.env.apiUrl + url);
  }

  post(url, payload, headers?: HttpHeaders) {

    if(!headers){
      headers = new HttpHeaders();
    }

    headers.set('Content-Type', 'application/json');

    return this.http.post(this.env.apiUrl + url, payload, {
      headers: headers
    });
  }

  put(url, payload, headers?: HttpHeaders) {

    if(!headers){
      headers = new HttpHeaders();
    }

    headers.set('Content-Type', 'application/json');

    return this.http.put(this.env.apiUrl + url, payload, {
      headers: headers
    });
  }


}
