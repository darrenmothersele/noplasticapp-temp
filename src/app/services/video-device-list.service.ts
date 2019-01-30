import { Injectable } from '@angular/core';
import { BrowserBarcodeReader } from '@zxing/library';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoDeviceListService {

  codeReader = new BrowserBarcodeReader();
  deviceList$ = new BehaviorSubject([]);

  constructor() {
    this.codeReader.getVideoInputDevices()
      .then(videoInputDevices => {
        this.deviceList$.next(videoInputDevices);
      })
      .catch(err => console.error(err));

  }


}
