import { Component, signal } from '@angular/core';
import { User } from '../../data/services/user.service';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'app-add',
  imports: [],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {

  protected readonly userSig = signal<User>({
    "id": 0,
    "name": "",
    "username": "",
    "email": "",
    "photo": "",
    "address": {
      "street": "",
      "suite": "",
      "city": "",
      "zipcode": "",
      "geo": {
        "lat": "",
        "lng": ""
      }
    },
    "phone": "",
    "website": "",
    "company": {
      "name": "",
      "catchPhrase": "",
      "bs": ""
    }
  });

  protected readonly userForm = form()
}
