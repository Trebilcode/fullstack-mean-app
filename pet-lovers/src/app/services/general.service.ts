import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../model/users';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  public url: string = 'https://fullstack-mean-app.herokuapp.com/users'

  constructor(private http: HttpClient) { }
  // It is recommended to work with observables
  // getUsersRecommended() : Observable<Users[]> {
  //   return this.http.get<Users[]>(this.url);
  // }

  getUsers() {
    return this.http.get(this.url)
  }
}
