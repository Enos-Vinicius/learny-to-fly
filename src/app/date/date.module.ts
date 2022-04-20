import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateRoutingModule } from './date-routing.module';
import { DateComponent } from './date.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DateRoutingModule
  ]
})
export class DateModule { }
