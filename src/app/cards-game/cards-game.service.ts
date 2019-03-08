import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BACK_URL } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CardsGameService {
  public URL = 'cards-game';
  constructor(private http: HttpClient) { }

  getPoolOfWords() {
    return this.http.get(`${BACK_URL}${this.URL}/get-pool/`);
  }

  markAsLearned(wordId) {
    return this.http.put(`${BACK_URL}${this.URL}/mark-as-learned/${wordId}/`, {});
  }
}
