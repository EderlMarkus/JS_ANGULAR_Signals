import { Component, signal } from '@angular/core';
import { User } from '../../data/services/user.service';
import { form, Control } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PersonComponent } from './form/person/person.component';
import { AddressComponent } from './form/address/address.component';

@Component({
  selector: 'app-add',
  imports: [Control, MatFormFieldModule, MatInputModule, MatSelectModule, PersonComponent, AddressComponent],
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

  protected readonly userForm = form(this.userSig)
}
