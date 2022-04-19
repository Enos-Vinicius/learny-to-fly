import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    MenuComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
