import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { Result } from '@zxing/library';
import { VideoDeviceListService } from '../services/video-device-list.service';

@Directive({
  selector: '[appBarcodeScanner]'
})
export class BarcodeScannerDirective implements AfterViewInit {

  deviceId;
  isLoaded = false;
  @Input() set appBarcodeScanner(_deviceId) {
    this.deviceId = _deviceId;
    if (this.isLoaded) {
      this.attachCameraScanner();
    }
  }
  @Output() detected = new EventEmitter<Result>();

  constructor(
    private readonly el: ElementRef,
    private readonly service: VideoDeviceListService
  ) { }

  ngAfterViewInit() {
    this.attachCameraScanner();
    this.isLoaded = true;
  }

  attachCameraScanner() {
    this.service.codeReader
      .decodeFromInputVideoDevice(this.deviceId, this.el.nativeElement)
      .then(result => this.detected.emit(result))
      .catch(err => console.error(err));
  }
}
