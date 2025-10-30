import { Component, Input, signal } from '@angular/core';
import { Control, email, Field, form, required } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Person, User } from '../../../../data/services/user.service';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-person',
  imports: [Control, MatFormFieldModule, MatInputModule, MatGridListModule],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  @Input() form!: Field<User, string | number>

}
