import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddWordComponent } from './words/add-word/add-word.component';
import { MainMenuComponent } from './main-page/main-menu/main-menu.component';
import {LoginComponent} from './auth/login/login.component';

const routes: Routes = [
    { path: '', component: MainMenuComponent },
    { path: 'addWord', component: AddWordComponent },
    { path: 'login', component: LoginComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
