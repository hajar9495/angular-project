import { Component } from '@angular/core';
import { MaisonComponent } from './maison/maison.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MaisonComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
