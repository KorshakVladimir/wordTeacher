import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
  ]
})
export class MainPageModule { }
