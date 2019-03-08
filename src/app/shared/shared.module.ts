import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from './back-button/back-button.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    BackButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    BackButtonComponent
  ]
})
export class SharedModule { }
