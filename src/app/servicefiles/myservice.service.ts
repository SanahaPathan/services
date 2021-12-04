import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  public studName= "sanaha";
  constructor(private http: HttpClient) { }
  getData():Observable<any>{
    // console.log('Hello I want data');
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
getPromData(){
  return this.http.get('https://jsonplaceholder.typicode.com/users').toPromise();
}
}
