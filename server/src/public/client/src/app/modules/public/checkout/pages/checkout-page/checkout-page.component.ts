import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

import { DataUserModel } from 'src/app/core/models/datauser.model';
import { OrderModel } from 'src/app/core/models/order.model';

import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { ApiMoviesService } from 'src/app/services/api-movies.service';

import { SnackBarComponent } from 'src/app/shared/components/snack-bar/snack-bar.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  public user!: DataUserModel;
  public orders: OrderModel[] = [];
  public totalPrice: number = 0;

  duration: number = 3;
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';

  constructor(
    private _authService: AuthService,
    private _cartService: CartService,
    private _orderService: OrderService,
    private _apiMoviesService: ApiMoviesService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDataUser();
    this.getItemsCart();
  }

  getDataUser() {
    this._authService.getDataUser().subscribe(res => {
      this.user = res.user;
    })
  }

  getItemsCart() {
    this._cartService.getCartMoviesList().subscribe(res => {
      let Orders: OrderModel[] = [];
      res.map((i:any) => {
        const order:OrderModel = {
          id: i.id, 
          title: i.title, 
          type: i.type, 
          price: i.price,
          quantity: i.quantity
        }
        Orders.push(order)
      })
      this.orders = Orders;
      this.totalPrice = this._cartService.getTotalPrice();
    })
  }

  payment() { 
    this._orderService.saveOrder(this.user, this.orders)
    .subscribe(res => {
      this.orders.forEach(elem => {
        this.reduceStock(elem.id, elem.quantity, elem.type);
      })
    })
    setTimeout(() => {
      this.snackBar.openFromComponent( SnackBarComponent, {
        data: 'Pedido realizado con éxito!',
        duration: this.duration*1000,
        verticalPosition: this.verticalPosition,
        horizontalPosition: this.horizontalPosition,
        panelClass: 'success'
      })
      this._cartService.removeAllCart();
      this.router.navigate(['/public/movies']);      
    }, 3000)
  }

  reduceStock(id:string, quantity:any, type:string) {
    if(type == 'compra'){
      this._apiMoviesService.getMovie(id).subscribe((res:any) => {
        let actualStock = res[0].purchasestock;
        let newStock = actualStock - quantity;
        this._apiMoviesService.updateMovie({purchasestock: newStock}, id).subscribe(res => {
          this.snackBar.openFromComponent( SnackBarComponent, {
            data: 'Procesando tu compra...',
            duration: this.duration*1000,
            verticalPosition: this.verticalPosition,
            horizontalPosition: this.horizontalPosition,
            panelClass: 'error'
          })
        })
      })
    } 
    
    else {
      this._apiMoviesService.getMovie(id).subscribe((res:any) => {
        let actualStock = res[0].rentalstock;
        let newStock = actualStock - 1;
        this._apiMoviesService.updateMovie({rentalstock: newStock}, id).subscribe(res => {
          this.snackBar.openFromComponent( SnackBarComponent, {
            data: 'Procesando tu compra...',
            duration: this.duration*1000,
            verticalPosition: this.verticalPosition,
            horizontalPosition: this.horizontalPosition,
            panelClass: 'error'
          })
        })
      })
    }
  }
}
