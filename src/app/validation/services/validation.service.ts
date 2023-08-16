import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  private apiUrl = 'http://your-api-url.com';
  constructor(private http: HttpClient) { }

login(name:string, code:string) {
  const body = { username: name, code: code };
  // return this.http.post(${this.apiUrl}/login, body);
}
}



