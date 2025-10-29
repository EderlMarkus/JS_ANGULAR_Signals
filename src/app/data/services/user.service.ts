import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User extends Person {
  "id": number,
  "address": Address,
  "phone": string,
  "website": string,
  "company": Company
}

export interface Person {
  "name": string,
  "username": string,
  "email": string,
  "photo"?: string,
}

export interface Address {
  "street": string,
  "suite": string,
  "city": string,
  "zipcode": string,
  "geo": {
    "lat": string,
    "lng": string
  }
}

export interface Company {
  "name": string,
  "catchPhrase": string,
  "bs": string
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
