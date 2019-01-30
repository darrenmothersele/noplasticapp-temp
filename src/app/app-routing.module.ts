import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ScannerPageComponent } from './pages/scanner-page/scanner-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AuthGuard } from './services/auth.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { CallbackComponent } from './components/callback/callback.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: HomePageComponent,
        pathMatch: 'full'
      },
      {
        path: 'settings',
        component: SettingsPageComponent
      },
      {
        path: 'scanner',
        component: ScannerPageComponent
      },
      {
        path: 'product/:barcode',
        component: ProductPageComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
