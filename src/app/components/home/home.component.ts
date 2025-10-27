import { Component, inject } from '@angular/core';
import { UserFacadeService } from '../../data/facade/user.facade.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private userFacade = inject(UserFacadeService);
  protected query = this.userFacade.query;
  protected filtered = this.userFacade.filtered;
}
