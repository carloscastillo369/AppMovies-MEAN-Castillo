import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CartMovieModel } from 'src/app/core/models/cartmovie.model';
import { MovieModel } from 'src/app/core/models/movie.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartArrayMovies: CartMovieModel[] = !!localStorage.cart? JSON.parse(localStorage.cart) : [];
  cartMoviesList = new BehaviorSubject<CartMovieModel[]>(this.cartArrayMovies);

  constructor() { }

  getCartMoviesList() {
    return this.cartMoviesList.asObservable();
  }

  addMovieToCart(product: MovieModel, price:number, stock:number, type: string) {
    const cartItem:CartMovieModel = {
      id: product._id, 
      title: product.title,
      image: product.posterimg,
      year: product.year,
      runtime: product.runtime,
      type: type,
      price: price,
      quantity: 1,
      stock: stock
    }
    const filter = this.cartArrayMovies.filter((i:any) => i.id == product._id);
      if(filter.length == 0){
        this.cartArrayMovies.push(cartItem);
      } else if(filter.length == 1){
        this.cartArrayMovies = this.cartArrayMovies.filter((i:any) => i.id != product._id);
        this.cartArrayMovies.push(cartItem);
      }
    this.cartMoviesList.next(this.cartArrayMovies);
    this.saveCartInLocalStorage();
  }

  getTotalPrice() {
    let total = 0;
    this.cartArrayMovies.map((i:any) => {
      total += i.price*i.quantity;
    })
    return total;
  }

  deleteCartItem(product: CartMovieModel) {
    this.cartArrayMovies.map((i:any, index:any)=>{
      if(product.id == i.id){
        this.cartArrayMovies.splice(index,1);
      }
    })
    this.cartMoviesList.next(this.cartArrayMovies);
    this.saveCartInLocalStorage();
  }

  removeAllCart() {
    this.cartArrayMovies = [];
    this.cartMoviesList.next(this.cartArrayMovies);
    localStorage.removeItem('cart');
  }

  increaseQtyMovie(id:string) {
    const result = this.cartArrayMovies.filter(i => i.id == id);
    result[0].quantity += 1;
    this.cartMoviesList.next(this.cartArrayMovies);
    this.saveCartInLocalStorage();
  }

  decreaseQtyMovie(id:string) {
    const result = this.cartArrayMovies.filter(i => i.id == id);
    result[0].quantity -= 1;
    this.cartMoviesList.next(this.cartArrayMovies);
    this.saveCartInLocalStorage();
  }

  changeQtyMovie(id: string, quantity: number) {
    const result = this.cartArrayMovies.filter(i => i.id == id);
    if(result[0].type == 'compra'){
      if(quantity < 1) {
        result[0].quantity = 1;
      } else if(quantity >= 1 && quantity <= result[0].stock) {
        result[0].quantity = quantity;
      } else {
        result[0].quantity = result[0].stock;
      }
    }

    if(result[0].type == 'renta'){
      if(quantity < 1) {
        result[0].quantity = 1;
      } else if(quantity <= 30) {
        result[0].quantity = quantity;
      } else {
        result[0].quantity = 30;
      }
    }

    this.cartMoviesList.next(this.cartArrayMovies);
    this.saveCartInLocalStorage();
  }

  saveCartInLocalStorage() {
    return localStorage.setItem('cart', JSON.stringify(this.cartArrayMovies));
  }
}
