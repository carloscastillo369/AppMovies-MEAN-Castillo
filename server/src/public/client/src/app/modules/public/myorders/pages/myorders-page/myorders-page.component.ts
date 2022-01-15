import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MyOrderModel } from 'src/app/core/models/myorder.model';

import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-myorders-page',
  templateUrl: './myorders-page.component.html',
  styleUrls: ['./myorders-page.component.css']
})
export class MyordersPageComponent implements OnInit {

  public orders!:MyOrderModel[];

  constructor(
    private _orderService: OrderService,
    private _authService: AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getDataUser();
  }

  getDataUser() {
    this._authService.getDataUser().subscribe(res => {
      let userEmail = res.user.email;
      this.getOrders(userEmail);
    })
  }

  getOrders(user: string){
    this._orderService.getOrder().subscribe(res => { 
      let orders:MyOrderModel[] = [];
      res.forEach((elem:any) => {
        if(user === elem.user.email) {
          let order = {
            total: this.CalcTotal(elem.order),
            order: elem.order
          }
          orders.push(order);
        }
      })

      this.orders = orders; 
    })
  }

  CalcTotal(orders:any) {
    let total: number = 0;
    orders.forEach((elem:any) => {
      let subtotal = elem.quantity*elem.price;
      total += subtotal;
    })
    return total;
  }

}
