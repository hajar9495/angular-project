import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  // template: ` <p>home works!</p>
  //   <app-home></app-home>`,
  // styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'First Project';
  city = 'San Francisco';
}
