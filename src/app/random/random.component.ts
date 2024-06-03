import { Component } from '@angular/core';

@Component({
  selector: 'app-random',
  standalone: true,
  imports: [],
  templateUrl: './random.component.html',
  styleUrl: './random.component.css',
})
export class RandomComponent {
  name: any = '';
  addToCart: number = 0;

  product = {
    name: 'iphone',
    price: 789,
    discount: 8.5,
    color: 'black',
    inStock: 5,
    pImage: 'assets/iphone.jpg',
  };
  getDiscountPrice() {
    return (
      this.product.price -
      (this.product.price * this.product.discount) / 100
    ).toFixed(2);
  }
  onNameChange(event: any) {
    this.name = event.target.value;
    return console.log(this.name);
  }

  incrementCartValue = () => {
    this.product.inStock > this.addToCart ? this.addToCart++ : '';

    // logique
    // if (this.product.inStock > this.addToCart) {
    //   this.addToCart++;
    //   console.log(this.addToCart);
    // }
  };

  decrementCartValue = () => {
    this.addToCart > 0 ? this.addToCart-- : '';
    // if (this.addToCart > 0) {
    //   this.addToCart--;
    //   console.log(this.addToCart);
    // } else {
    //   console.log('pas possible de decrementer');
    // }
  };
  // decrementCartValue () =>
}
