import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  // template: ` <p>home works!</p> `,
  // styleUrl: './home.component.css',
})
export class HomeComponent {
  city = 'paris';
}
