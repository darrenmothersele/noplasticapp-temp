import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ScannerPageComponent } from './pages/scanner-page/scanner-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
