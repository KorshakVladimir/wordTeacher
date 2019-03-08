import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BACK_URL } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WordService {
  constructor(private http: HttpClient) { }

  addWord(data) {
    data['language'] = 'en';
    return this.http.post(`${BACK_URL}words/addWord/`, data);
  }

  getTranslation(word) {
    return this.http.post(`${BACK_URL}translate/`, {word});
  }

}
