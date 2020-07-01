import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../model/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  public url: string = 'http://localhost:3000/users'
  constructor(private http: HttpClient) { }
  //recommended method that defines what to expect returned when get http request
  getUsersRecommended(): Observable<Users[]> {
    return this.http.get<Users[]>(this.url);
  }
  
  getUsers() {
    return this.http.get(this.url);
  }
}
