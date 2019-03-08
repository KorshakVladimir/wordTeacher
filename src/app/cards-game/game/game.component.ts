import { Component, OnInit } from '@angular/core';
import { CardsGameService } from '../cards-game.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-card-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(
    private  gameService: CardsGameService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  public words;
  public currentWord;
  public showTranslation = false;
  public gameStyle;
  public wordToShow;
  public translation;

  ngOnInit() {
    this.getPool();
    this.route.data.subscribe(res => this.gameStyle = res.gamestyle);
  }

  getPool() {
    this.gameService.getPoolOfWords().subscribe(res => {
        this.words = res;
        this.getWord();
      }
    );
  }

  getWord() {
    if (this.words.length !== 0) {
      this.currentWord = this.words.pop();
      if (this.gameStyle === 'fromUA') {
        this.wordToShow = this.currentWord.word.word_name;
        this.translation = this.currentWord.word.translation;
      } else {
        this.wordToShow = this.currentWord.word.translation;
        this.translation = this.currentWord.word.word_name;
      }
    } else {
      this.router.navigate(['/card-game']);
    }
  }

  markAsLearned() {
    if (!this.currentWord) {
      return;
    }
    this.gameService.markAsLearned(this.currentWord.id).subscribe();
    this.getWord();
  }

}
