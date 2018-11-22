import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';

const MATERIAL_MODULES = [
  MatButtonModule
];

@NgModule({
  imports: [...MATERIAL_MODULES],
  exports: [...MATERIAL_MODULES]
})
export class AppMaterialModule {}
