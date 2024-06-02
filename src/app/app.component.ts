import { Component } from '@angular/core';
import { MaisonComponent } from './maison/maison.component';
import { TrucComponent } from './truc/truc.component';
import { TextComponent } from './text/text.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MaisonComponent, TrucComponent, TextComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
