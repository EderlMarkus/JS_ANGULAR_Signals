import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/components/home/home.component';
import { provideRouter, RouterOutlet } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/data/router/app.routes';
import { MenuComponent } from './app/components/menu/menu.component';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  template: `<app-menu></app-menu><router-outlet></router-outlet>`,
  styleUrls: ['./styles.scss'],
})
export class App { }

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
}).catch((err) => console.error(err));