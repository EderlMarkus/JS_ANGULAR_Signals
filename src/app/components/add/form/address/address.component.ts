import { Component, Input, signal } from '@angular/core';
import { Address, User } from '../../../../data/services/user.service';
import { Control, Field, form } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-address',
  imports: [Control, MatFormFieldModule, MatInputModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent {
  @Input() form!: Field<User, string | number>
}
