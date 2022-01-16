import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  public totalItemsCart: number = 0;

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this.getTotalItemsCart();
  }

  getTotalItemsCart() {
    this._cartService.getCartMoviesList().subscribe(res => {
      this.totalItemsCart = res.length;
    })
  }

}
