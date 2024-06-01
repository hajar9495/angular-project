import { Component } from '@angular/core';

@Component({
  selector: 'app-truc',
  standalone: true,
  imports: [],
  templateUrl: './truc.component.html',
})
export class TrucComponent {
  isAdmin = false;
  trucList = [
    { nom: 'noodles', quantite: 1 },
    { nom: 'miso broth', quantite: 0 },
    { nom: 'egg', quantite: 7 },
    { nom: 'oeufs', quantite: 1},
    { nom: 'viande', quantite: 6 },
    { nom: 'salade ', quantite: 3 },
  ];
}
