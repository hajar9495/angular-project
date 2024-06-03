import { Component } from '@angular/core';
import { MaisonComponent } from './maison/maison.component';
import { TrucComponent } from './truc/truc.component';
import { RandomComponent } from './random/random.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MaisonComponent, TrucComponent, RandomComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
