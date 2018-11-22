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
    BarcodeGeneratorDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
