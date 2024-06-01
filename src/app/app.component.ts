import { Component } from '@angular/core';
import { MaisonComponent } from './maison/maison.component';
import { TrucComponent } from './truc/truc.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MaisonComponent, TrucComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
