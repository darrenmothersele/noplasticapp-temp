import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

  // get user() {
  //   return this.afAuth.user.pipe(tap(console.log));
  // }

  get profile() {
    return this.auth.userProfile;
  }

  constructor(
    public readonly auth: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }
}
