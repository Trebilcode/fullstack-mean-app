import { Component, Directive } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { Users } from '../model/users';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  

  users = [];
  currentUserEmail: string;

  constructor(private services: GeneralService, private storage: Storage) {}
  ngOnInit() {
    this.services.getUsers()
    .subscribe(users => {
      this.users = <any[]> users;
    });

    this.storage.get('Aiu0d7cHqENWy7krr6pb4oe9EmV2')
    .then(data => {
      this.currentUserEmail = data;  
    })
    .catch(error => {
      this.currentUserEmail = 'Email not found';
    });
  }
  
  selectedUser(user: any) {
    this.storage.set(user.uid, user.email)
    console.log(user.uid, user.email)
  }
}
