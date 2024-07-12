import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculateurService {
  add(x: number, y: number) {
    return x + y;
  }
  minus(x: number, y: number) {
    return x - y;
  }

  constructor() {}
}
