import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BACK_URL } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getCSRF() {
    return this.http.get(`${BACK_URL}csrf/`);
  }

  login() {
    this.getCSRF().subscribe(res => {
      const httpOptions = {
        headers: new HttpHeaders(
          {
            'X-CSRFToken': res['csrf'],
            // 'content-type': 'multipart/form-data'
          })
      };
      const fd = new FormData();
      fd.append('username', 'admin');
      fd.append('password', '1');
      this.http.post(`${BACK_URL}api-auth/login/`, fd, httpOptions).subscribe();
    });
  }
}
