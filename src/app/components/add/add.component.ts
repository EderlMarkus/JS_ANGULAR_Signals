import { Component, inject, signal } from '@angular/core';
import { User, UserService } from '../../data/services/user.service';
import { apply, form, required, schema, Schema, submit } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PersonComponent } from './form/person/person.component';
import { AddressComponent } from './form/address/address.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { CompanyComponent } from './form/company/company.component';
import { firstValueFrom } from 'rxjs';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    PersonComponent,
    AddressComponent,
    MatButtonModule,
    MatGridListModule,
    CompanyComponent,
    MatSnackBarModule
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {

  private readonly userService = inject(UserService);
  private _snackBar = inject(MatSnackBar);

  protected readonly userSig = signal<User>({
    "id": "0",
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

  private _errorMessageSchema: Schema<string> = schema((fieldPath) => {
    required(fieldPath, { message: "Field is required." })
  })

  protected readonly userForm = form(this.userSig, (path) => {
    //General required
    [path.name, path.address.street, path.address.city].forEach(path => {
      apply(path, this._errorMessageSchema);
    });

    //Optional required
    required(path.company.bs, {
      when: ({ valueOf }) => !!valueOf(path.company.name),
      message: "Field is required"
    })
  });

  protected saveProposal() {
    submit(this.userForm, async (form) => {
      try {
        const response = await firstValueFrom(this.userService.createNewUser(this.userSig()));
        form().reset();
        this._snackBar.open(`User ${response.name} saved successfully.`, "OK", { duration: 5000 })
        return undefined;
      } catch (e) {
        this._snackBar.open(`Could not save User.`, "OK", { duration: 5000 })
        return [
          {
            kind: 'server',
            message: (e as Error).message,
          },
        ];
      }
    });
  }
}
