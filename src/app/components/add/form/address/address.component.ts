import { Component, signal } from '@angular/core';
import { Address } from '../../../../data/services/user.service';
import { Control, form } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-address',
  imports: [Control, MatFormFieldModule, MatInputModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent {
  protected readonly addressSig = signal<Address>({
    "street": "",
    "suite": "",
    "city": "",
    "zipcode": "",
    "geo": {
      "lat": "",
      "lng": ""
    }
  }
  )

  protected readonly addressForm = form(this.addressSig);
}
