import { Component } from '@angular/core';
// import { LouerList } from '../louer-list';
@Component({
  selector: 'app-louer',
  standalone: true,
  imports: [],
  templateUrl: './louer.component.html',
  styleUrl: './louer.component.css',
})
export class LouerComponent {
  // @Input() louerList!: LouerList;
  louerList = [
    { id: 0, name: 'nom 1', quantity: 1, photo: './assets/img1.jpg' },
    { id: 1, name: 'nom 2', quantity: 1, photo: './assets/img2.jpg' },
    { id: 2, name: 'nom 3', quantity: 1, photo: './assets/img3.jpg' },
  ];
}
