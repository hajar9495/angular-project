import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HousingLocationComponent],
  templateUrl: './home.component.html',
  // template: ` <p>home works!</p> `,
  // styleUrl: './home.component.css',
})
export class HomeComponent {
  city = 'paris';
  
}
