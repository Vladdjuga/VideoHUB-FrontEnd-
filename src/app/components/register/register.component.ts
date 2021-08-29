import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRequest } from 'src/app/models/authrequest';
import { Claim } from 'src/app/models/claim';
import { AuthService } from 'src/app/services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Dimensions, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
import { RegisterRequest } from 'src/app/models/registerrequest';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signup=new RegisterRequest();
  constructor(private service:AuthService,private router:Router,
    private modalService: NgbModal,private notifier:NotifierService){
    
  }

  ngOnInit() {
  }
  signUp(){
    console.log(this.signup)
      this.service.register(this.signup).subscribe((res:Claim)=>{
          this.notifier.notify("success","Registration completed!")
          this.router.navigate(["/login"]);
      })
  }

  
  DataURIToBlob(dataURI: string) {
    const splitDataURI = dataURI.split(',')
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0]

    const ia = new Uint8Array(byteString.length)
    for (let i = 0; i < byteString.length; i++)
        ia[i] = byteString.charCodeAt(i)

    return new Blob([ia], { type: mimeString })
  }

  uploadPhoto() {
      if(this.croppedImage != ''&& this.croppedImage != null){
        
      const file = this.DataURIToBlob(this.croppedImage)
      // this.formData.append('file',file)
      // console.log(this.formData)
      //     this.userService.UploadPhoto(this.id, this.formData).subscribe((res: ApiResponse) => {
      //       if (res.isSuccessful) {
      //         this.formData = new FormData();
      //         this.userService.photoStatus.emit(true);
      //         this.modalService.dismissAll();
      //       }
      //     });
      }
    }

  openModal(content: any) {
    this.modalService.open(content,{ windowClass: 'dark-modal', scrollable: true, size: 'lg' });
  }

  imageChangedEvent: any = '';
croppedImage: any = '';
canvasRotation = 0;
rotation = 0;
scale = 1;
showCropper = false;
containWithinAspectRatio = false;
transform: ImageTransform = {};
imageURL!: string;
loading = false;

fileChangeEvent(event: any): void {
  this.loading = true;
  this.imageChangedEvent = event;
}

imageCropped(event: ImageCroppedEvent) {
  this.croppedImage = event.base64;
  console.log(event);
}

imageLoaded() {
  this.showCropper = true;
  console.log('Image loaded');
}

cropperReady(sourceImageDimensions: Dimensions) {
  console.log('Cropper ready', sourceImageDimensions);
  this.loading = false;
}

loadImageFailed() {
  console.error('Load image failed');
}

}
