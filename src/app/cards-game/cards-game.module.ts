import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsGameMainComponent } from './cards-game-main/cards-game-main.component';
import { CardsGameService } from './cards-game.service';
import { GameComponent } from './game/game.component';
import { CardGameRoutingModule } from './cards-game-routing.module';
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CardsGameMainComponent,
    GameComponent,
  ],
  imports: [
    CommonModule,
    CardGameRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    SharedModule
  ],
  providers: [
    CardsGameService
  ]
})
export class CardsGameModule { }
