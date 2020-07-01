import { Component } from '@angular/core';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { Users } from '../model/users';



@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  constructor(
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    public toastController: ToastController,
    public geolocation: Geolocation
  ) {}

  users: Users[] = [];

  ngOnInit() {
    this.users.push({
      title: "Obi",
      subtitle: "Starwars",
      description: "advisor",
      avatar:
        "https://github.com/ionic-team/ionic-docs/blob/master/src/demos/api/list/avatar-ben.png?raw=true",
    });
    this.users.push({
      title: "Leia",
      subtitle: "Princess",
      description: "princess",
      avatar:
        "https://github.com/ionic-team/ionic-docs/blob/master/src/demos/api/list/avatar-leia.png?raw=true",
    });
  }

  async userSelected(user: Users) {
    let toast = await this.toastController.create({
      header: `You've chosen the user ${user.title}`,
      position: "bottom",
      message: "Successfully done some shit",
      duration: 3000,
      buttons: [
        {
          text: "Delete",
          icon: "Trash",
          handler: () => {
            this.users.pop();
          },
        },
      ],
    });
    toast.present();
  }

  async confirmDeletion() {
    const alert = await this.alertController.create({
      header: "Are you sure you want to delete this element?",
      message: "This action cannot be undone",
      buttons: [
        {
          text: "Confirm",
          handler: () => {
            console.log("Action confirmed");
          },
        },
        {
          text: "Cancel",
          handler: () => {
            console.log("Action cancelled");
          },
        },
      ],
    });
    await alert.present();
  }

  async showLocation(lat, lon, accuracy) {
    const alert = await this.alertController.create({
      header: "This is your current location",
      message: `Your latitude is ${lat} and your longitude is ${lon} with an accuracy of ${accuracy}`,
      buttons: [
        {
          text: "Close",
          handler: () => {
            console.log("Message closed");
          },
        },
        {
          text: "Cancel",
          handler: () => {
            console.log("Action cancelled");
          },
        },
      ],
    });
    await alert.present();
  }

  async showSheet() {
    const sheet = await this.actionSheetController.create({
      header: "Albums",
      cssClass: "my-custom-class",
      buttons: [
        {
          text: "Delete",
          role: "destructive",
          icon: "trash",
          handler: () => {
            return this.confirmDeletion();
          },
        },
        {
          text: "Share",
          icon: "share",
          handler: () => {
            console.log("Share clicked");
          },
        },
        {
          text: "Play (open modal)",
          icon: "caret-forward-circle",
          handler: () => {
            console.log("Play clicked");
          },
        },
        {
          text: "Favorite",
          icon: "heart",
          handler: () => {
            console.log("Favorite clicked");
          },
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
        {
          text: "Location",
          icon: "location",
          handler: () => {
            this.geolocation
              .getCurrentPosition()
              .then((resp) => {
                // resp.coords.latitude
                // resp.coords.longitude
                this.showLocation(resp.coords.latitude, resp.coords.longitude, resp.coords.accuracy);
              })
              .catch((error) => {
                console.log("Error getting location", error);
              });
          },
        },
      ],
    });
    await sheet.present();
  }
}
