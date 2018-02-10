import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule, MatInputModule, MatButtonModule, MatButtonToggleModule,MatExpansionModule,MatIconModule,MatChipsModule, MatToolbarModule, MatTabsModule}  from '@angular/material';
const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatExpansionModule,
  MatIconModule,
  MatChipsModule,
  MatToolbarModule,
  MatTabsModule
]


@NgModule({
  imports: modules,
  declarations: [],
  exports:modules
})
export class MaterialImportModule { }
