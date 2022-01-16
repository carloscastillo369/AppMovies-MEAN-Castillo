import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

import { CartMovieModel } from 'src/app/core/models/cartmovie.model';
import { CartService } from 'src/app/services/cart.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent implements OnInit {

  public cartMovies: CartMovieModel[] = [];
  public displayedColumns: string[] = ['posicion', 'descripcion', 'accion', 'tipo', 'cantidad', 'precio', 'subtotal'];
  
  @ViewChild(MatTable) table!: MatTable<any>;
  
  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this.getCartList();
  }

  getCartList() {
    this._cartService.getCartMoviesList().subscribe((res: CartMovieModel[]) => {
      this.cartMovies = res;
    })
  }

  deleteCartItem(product: CartMovieModel){
    Swal.fire({
      title: '¿Estás seguro?',
      icon: 'warning',
      text: "Estas a punto de eliminar esta película de la lista de tu carrito.",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimínalo!',
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        this._cartService.deleteCartItem(product);
        this.table.renderRows();
        Swal.fire(
          this.cartMovies.length == 0? 'Carrito vacío!' : 'Eliminado!',
          this.cartMovies.length == 0? 'Vuelve a Películas para agregar una película a tu carrito' : 'La película ha sido eliminada del carrito.',
          'success'
        )
      }
    })
  }

  removeAllCart(){
    Swal.fire({
      title: '¿Estás seguro?',
      icon: 'warning',
      text: "Estas a punto de vaciar por completo tu carrito.",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, vaciar carrito!',
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        this._cartService.removeAllCart();
        Swal.fire(
          'Carrito vacío!',
          'Vuelve a Películas para agregar una película a tu carrito',
          'success'
        )
      }
    })    
  }

  increase( id: string ){
    this._cartService.increaseQtyMovie(id);
  }

  decrease( id: string ){
    this._cartService.decreaseQtyMovie(id);
  }

  changeQty(change: any, id: string) {
    this._cartService.changeQtyMovie(id, Number(change));
  }

  MinToHours(number: number){
    const hours = Math.floor(number/60);
    const min = number % 60;
    if(hours > 1){
      return hours + ' ' + 'hrs' + ' ' + min + ' ' + 'min';
    } else {
      return hours + ' ' + 'hr' + ' ' + min + ' ' + 'min';
    }
  }

}
