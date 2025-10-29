import { Component, signal } from '@angular/core';
import { Control, email, form, required } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Person } from '../../../../data/services/user.service';

@Component({
  selector: 'app-person',
  imports: [Control, MatFormFieldModule, MatInputModule],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  protected readonly personSig = signal<Person>({
    "name": "",
    "username": "",
    "email": "",
    "photo": ""
  });

  protected readonly personForm = form(this.personSig, (path) => {
    required(path.name, { message: "Name is required" }),
      required(path.username, { message: "Username is required" }),
      email(path.email, { message: "Must be an E-Mail" })
  })
}
