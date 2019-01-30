import { Component, NgZone, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  hasTimeout = false;

  constructor(
    private readonly auth: AuthService,
    private readonly zone: NgZone
  ) { }

  ngOnInit() {
    this.auth.handleLoginCallback();
    setTimeout(() => {
      this.hasTimeout = true;
    }, 3000);
  }

}
