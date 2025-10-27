import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type User = {
  "id": number,
  "photo": string,
  "name": string,
  "username": string,
  "email": string,
  "address": {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": {
      "lat": string,
      "lng": string
    }
  },
  "phone": string,
  "website": string,
  "company": {
    "name": string,
    "catchPhrase": string,
    "bs": string
  }
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly _httpClient = inject(HttpClient);
  private readonly _apiUrl = "https://jsonplaceholder.typicode.com";

  public getUsers(): Observable<User[]> {
    return this._httpClient.get<User[]>(`${this._apiUrl}/users`);
  }
}
