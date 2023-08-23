import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  private apiUrl = 'https://backendsp01.000webhostapp.com/api';
  constructor(private http: HttpClient) { }

login(body:any) {
  return this.http.post(`https://backendsp01.000webhostapp.com/api/login`,body);
}
register(body:any){

  return this.http.post(`https://backendsp01.000webhostapp.com/api/register`,body);

}
}



