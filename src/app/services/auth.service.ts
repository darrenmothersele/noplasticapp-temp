import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { of, Subscription, timer } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';
import * as auth0 from 'auth0-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoading = false;
  isLoggedIn = false;
  accessToken: string;
  userProfile: any;

  // Track Firebase authentication status
  loggedInFirebase: boolean;
  // Subscribe to the Firebase token stream
  firebaseSub: Subscription;
  // Subscribe to Firebase renewal timer stream
  refreshFirebaseSub: Subscription;

  private auth0 = new auth0.WebAuth({
    ...environment.auth,
    responseType: 'token'
  });

  constructor(
    private readonly router: Router,
    private readonly afAuth: AngularFireAuth,
    private readonly http: HttpClient
  ) {
    const authResult = localStorage.getItem('auth_result');
    if (authResult) {
      const auth = JSON.parse(authResult);
      this.accessToken = auth.accessToken;
      this.getUserInfo(auth);
    }
  }

  login(redirect: string = this.router.url) {
    localStorage.setItem('auth_redirect', redirect);
    this.auth0.authorize();
  }

  handleLoginCallback() {
    this.isLoading = true;
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken) {
        window.location.hash = '';
        this.accessToken = authResult.accessToken;
        localStorage.setItem('auth_result', JSON.stringify(authResult));
        this.getUserInfo(authResult);
      } else if (err) {
        this.router.navigate(['/login']);
        this.isLoading = false;
        console.error(`Error authenticating: ${err.error}`);
      }
    });
  }

  getUserInfo(authResult) {
    this.auth0.client.userInfo(this.accessToken, (err, profile) => {
      if (profile) {
        this.setSession(authResult, profile);
      } else if (err) {
        console.warn(`Error retrieving profile: ${err.error}`);
      }
    });
  }

  private setSession(authResult, profile) {
    // Set tokens and expiration in localStorage
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + Date.now());
    localStorage.setItem('expires_at', expiresAt);
    this.userProfile = profile;
    // Session set; set loggedIn and loading
    this.isLoggedIn = true;
    this.isLoading = false;
    // TODO: Get Firebase token
    // this.getFirebaseToken();
    // Redirect to desired route
    this.router.navigateByUrl(localStorage.getItem('auth_redirect'));
  }


  logout() {
    // Ensure all auth items removed
    localStorage.removeItem('expires_at');
    localStorage.removeItem('auth_redirect');
    localStorage.removeItem('auth_result');
    this.accessToken = undefined;
    this.userProfile = undefined;
    this.isLoggedIn = false;
    // Sign out of Firebase
    this.loggedInFirebase = false;
    this.afAuth.auth.signOut();
    // Return to homepage
    this.router.navigate(['/']);
  }

}
