import { Component, inject } from '@angular/core';
import { CalculateurService } from '../calculateur.service';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css',
})
export class TextComponent {
  private CalculateurService = inject(CalculateurService);
  // calcul
  totalCost = this.CalculateurService.add(50, 25);
  autrePrix = this.CalculateurService.minus(50, 25);

  debut = 'hello';
  // transformer un texte de capital a miniscule
  transformText() {
    if (this.debut === 'hello') {
      this.debut = this.debut.toUpperCase();
    } else {
      this.debut = this.debut.toLowerCase();
    }
  }
}
