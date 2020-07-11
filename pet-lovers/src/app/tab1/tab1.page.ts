import { Component } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  users: any[] = [];
  currentUser: string = '';
  constructor(private services: GeneralService, private storage: Storage) {}

  ngOnInit() {
    
    this.storage.get('currentUser')
    .then(data => { this.currentUser = data })
    .catch(error => {this.currentUser = 'Couldn\'t find user'});

    this.services.getUsers().subscribe(users =>this.users = <any>users);
  }

    selectedUser(user:any){
      this.storage.set('currentUser', user.username);
  }
}
