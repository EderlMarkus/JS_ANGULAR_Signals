import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public getPhoto(user: User) {
    const femaleIds = ["1", "3", "4", "5", "6", "9", "10"]
    return femaleIds.includes(user.id) ? "./assets/female.jpg" : "./assets/male.jpg"
  }

}
