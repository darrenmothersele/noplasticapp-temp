import { AfterViewInit, Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { BrowserBarcodeReader, Result } from '@zxing/library';

@Directive({
  selector: '[appBarcodeScanner]'
})
export class BarcodeScannerDirective implements AfterViewInit {

  @Output() detected = new EventEmitter<Result>();

  constructor(
    private readonly el: ElementRef
  ) { }

  ngAfterViewInit() {
    const codeReader = new BrowserBarcodeReader();

    codeReader.getVideoInputDevices()
      .then(videoInputDevices => {

        // Get cameras
        videoInputDevices.forEach(
          device => console.log(`${device.label}, ${device.deviceId}`)
        );
        const firstDeviceId = videoInputDevices[0].deviceId;

        codeReader.decodeFromInputVideoDevice(firstDeviceId, this.el.nativeElement)
          .then(result => this.detected.emit(result))
          .catch(err => console.error(err));

      })
      .catch(err => console.error(err));
  }
}
