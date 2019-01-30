import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoDeviceListService } from '../../services/video-device-list.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-scanner-page',
  templateUrl: './scanner-page.component.html',
  styleUrls: ['./scanner-page.component.scss']
})
export class ScannerPageComponent implements OnInit, OnDestroy {

  deviceId;
  deviceList;

  destroy$ = new Subject();

  constructor(
    private readonly router: Router,
    private readonly devices: VideoDeviceListService
  ) {}

  ngOnDestroy() {
    this.destroy$.next();
  }

  ngOnInit() {
    this.devices.deviceList$
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(deviceList => {
        this.deviceList = deviceList;
        if (deviceList.length > 0) {
          this.deviceId = deviceList[0].deviceId;
        }
      });
  }

  onDetected({ text }) {
    this.router.navigate(['/product', text ]);
  }

  onCameraChange(deviceId) {
    this.deviceId = deviceId;
  }
}
