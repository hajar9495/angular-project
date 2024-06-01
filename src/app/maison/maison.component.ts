import { Component } from '@angular/core';
import { LouerComponent } from '../louer/louer.component';
// import { LouerList } from '../louer-list';
@Component({
  selector: 'app-maison',
  standalone: true,
  imports: [LouerComponent],
  templateUrl: './maison.component.html',
  styleUrl: './maison.component.css',
})
export class MaisonComponent {
  // louerList: LouerList[] = [
  //   {
  //     id: 0,
  //     name: 'maison 1',
  //     quantity: 1,
  //   },
  //   {
  //     id: 1,
  //     name: 'maison 2',
  //     quantity: 2,
  //   },
  //   {
  //     id: 2,
  //     name: 'maison 3',
  //     quantity: 3,
  //   },
  // ];
}
