import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  totalPrice!: number;

  constructor(
    private router: Router,
    private _cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getTotalPriceCart();
  }

  getTotalPriceCart() {
    this._cartService.getCartMoviesList().subscribe((res) => {
      this.totalPrice = this._cartService.getTotalPrice();
    })
  }

}
