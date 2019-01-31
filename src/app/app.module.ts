import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ScannerPageComponent } from './pages/scanner-page/scanner-page.component';
import { AppMaterialModule } from './app-material.module';
import { BarcodeScannerDirective } from './directives/barcode-scanner.directive';
import { BarcodeGeneratorDirective } from './directives/barcode-generator.directive';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CallbackComponent } from './components/callback/callback.component';
import { HttpClientModule } from '@angular/common/http';
import {AngularFireFunctionsModule, FunctionsRegionToken} from '@angular/fire/functions';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomePageComponent,
    LoginPageComponent,
    SettingsPageComponent,
    ProductPageComponent,
    ScannerPageComponent,
    BarcodeScannerDirective,
    BarcodeGeneratorDirective,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireFunctionsModule
  ],
  providers: [
    { provide: FunctionsRegionToken, useValue: 'us-central1' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
