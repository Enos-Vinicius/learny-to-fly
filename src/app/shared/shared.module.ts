import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './external-libs/material.module';
import { Components } from './components/component';

@NgModule({
  declarations: [
    Components
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    Components
  ]
})
export class SharedModule { }
