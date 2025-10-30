import { Component, Input, signal } from '@angular/core';
import { Control, email, Field, form, maxLength, required } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { Company, User } from '../../../../data/services/user.service';

@Component({
  selector: 'app-company',
  imports: [Control, MatFormFieldModule, MatInputModule, MatGridListModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent {
  @Input() form!: Field<User, string | number>;
}
