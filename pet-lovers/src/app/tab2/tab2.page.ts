import { Component } from '@angular/core';
import { ActionSheetController, ToastController } from '@ionic/angular';

import { Users } from '../model/users';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private actionSheetController: ActionSheetController,
    private toastController: ToastController) {}

  users: Users[] = [];

  ngOnInit() {
    this.users.push({ 
      title: 'A good loking header', 
      subtitle: 'handsome subtitle',
      avatar: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthefilmstage.com%2Fwp-content%2Fuploads%2F2012%2F04%2Fneytiri_beautiful_warrior_in_avatar-wide.jpg&f=1&nofb=1',
      description: 'Avatar from avatar'},
      {
        title: 'Another heading',
        subtitle: 'handsome subtitle',
        avatar: 'http://fc04.deviantart.net/fs71/i/2010/182/c/0/Facebook_Avatar_2_by_cynfullpryde.jpg',
        description: 'A good looking avatar'
      })
  }

  async userSelected(user) {
    const toast = await this.toastController.create({
      header: `You've chosen user ${user.title}`,
      position: 'bottom',
      message: `I'm ${user.description}`,
      buttons: [{
        handler: () => {
          this.users.pop()
        },
        text: 'Destroy',
        icon: 'trash'
      }]
    });
    toast.present();
  }

  async showSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]

    });
    actionSheet.present();
  }

}
