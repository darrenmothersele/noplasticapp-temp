import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(
    private readonly auth: AuthService
  ) { }

  login() {
    this.auth.login('/');
  }

  ngOnInit() {

  }

  // ngOnInit() {
  //   this.isLoggedIn$ = this.afAuth.authState.pipe(
  //     map(user => !!user),
  //     tap(isLoggedIn => {
  //       if (isLoggedIn) {
  //         this.router.navigate(['/']);
  //       }
  //     })
  //   );
  // }
  //
  // login() {
  //   this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  // }
  //
  // logout() {
  //   this.afAuth.auth.signOut();
  // }
}
