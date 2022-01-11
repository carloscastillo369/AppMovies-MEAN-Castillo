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

  getCartMoviesList(){
    return this.cartMoviesList.asObservable();
  }

  addMovieToCart(product: MovieModel, price:number, type: string){
    const cartItem:CartMovieModel = {
      id: product._id, 
      title: product.title,
      image: product.posterimg,
      year: product.year,
      runtime: product.runtime,
      type: type,
      price: price,
      quantity: 1
    }
    const filter = this.cartArrayMovies.filter((i:any) => i.id == product._id);
      if(filter.length == 0){
        this.cartArrayMovies.push(cartItem);
      } else if(filter.length == 1){
        this.cartArrayMovies = this.cartArrayMovies.filter((i:any) => i.id != product._id);
        this.cartArrayMovies.push(cartItem);
      }
    this.cartMoviesList.next(this.cartArrayMovies);
    localStorage.setItem('cart', JSON.stringify(this.cartArrayMovies));
  }

  getTotalPrice(){
    let total = 0;
    this.cartArrayMovies.map((i:any) => {
      total += i.price*i.quantity;
    })
    return total;
  }

  deleteCartItem(product: CartMovieModel){
    this.cartArrayMovies.map((i:any, index:any)=>{
      if(product.id == i.id){
        this.cartArrayMovies.splice(index,1);
      }
    })
    this.cartMoviesList.next(this.cartArrayMovies);
    localStorage.setItem('cart', JSON.stringify(this.cartArrayMovies));
  }

  removeAllCart(){
    this.cartArrayMovies = [];
    this.cartMoviesList.next(this.cartArrayMovies);
    localStorage.setItem('cart', JSON.stringify(this.cartArrayMovies));
  }

  increaseQtyMovie(id:string){
    const result = this.cartArrayMovies.filter(i => i.id == id)
    result[0].quantity += 1;
    this.cartMoviesList.next(this.cartArrayMovies);
    localStorage.setItem('cart', JSON.stringify(this.cartArrayMovies));
  }

  decreaseQtyMovie(id:string){
    const result = this.cartArrayMovies.filter(i => i.id == id)
    result[0].quantity -= 1;
    this.cartMoviesList.next(this.cartArrayMovies);
    localStorage.setItem('cart', JSON.stringify(this.cartArrayMovies));
  }
}
