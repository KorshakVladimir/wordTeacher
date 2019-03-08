import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { CardsGameMainComponent } from './cards-game-main/cards-game-main.component';

const routes: Routes = [
  {
    path: 'card-game',
    component: CardsGameMainComponent,
  },
  {
    path: 'from-ua',
    component: GameComponent,
    data: { gameStyle: 'fromUa' }
  },
  {
    path: 'to-ua',
    component: GameComponent,
    data: { gameStyle: 'toUa' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CardGameRoutingModule { }
