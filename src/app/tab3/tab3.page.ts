import { Component } from '@angular/core';
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page {

  constructor(private camera: Camera) {}

  picture: any = '';

  takePicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.picture = "data:image/jpeg;base64," + imageData;
      },
      (err) => {
        console.log("Sorry, couldn't take a picture correctly");
      }
    );
  }

  
}
