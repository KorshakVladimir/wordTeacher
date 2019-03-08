import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordsModule } from './words/words.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainPageModule } from './main-page/main-page.module';
import { CardsGameModule } from './cards-game/cards-game.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MainPageModule,
    WordsModule,
    CardsGameModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
