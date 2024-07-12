import { Component } from '@angular/core';
import { MaisonComponent } from './maison/maison.component';
import { TrucComponent } from './truc/truc.component';
<<<<<<< HEAD
import { RandomComponent } from './random/random.component';
import { ListComponent } from './list/list.component';
=======
import { TextComponent } from './text/text.component';
>>>>>>> 9eb9cc13b88c935089db90e2f7c8eef9f4e9b37d

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [MaisonComponent, TrucComponent, RandomComponent],
=======
  imports: [MaisonComponent, TrucComponent, TextComponent],
>>>>>>> 9eb9cc13b88c935089db90e2f7c8eef9f4e9b37d
  templateUrl: './app.component.html',
})
export class AppComponent {}
