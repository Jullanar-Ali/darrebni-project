import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  private apiUrl = 'https://backendsp01.000webhostapp.com/api';
  constructor(private http: HttpClient) { }

login(name:string, code:string) {
  const body = { name: name, code: code };
  return this.http.post('${this.apiUrl}/login', body);
}

}



