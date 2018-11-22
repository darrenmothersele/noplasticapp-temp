import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scanner-page',
  templateUrl: './scanner-page.component.html',
  styleUrls: ['./scanner-page.component.scss']
})
export class ScannerPageComponent implements OnInit {

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit() {
  }

  onDetected({ text }) {
    this.router.navigate(['/product', text ]);
  }
}
