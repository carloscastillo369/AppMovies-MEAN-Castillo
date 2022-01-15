import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserOrderModel } from 'src/app/core/models/user-order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-user',
  templateUrl: './order-user.component.html',
  styleUrls: ['./order-user.component.css']
})
export class OrderUserComponent implements OnInit {

  orders!:UserOrderModel;
  total: number = 0;

  displayedColumns: string[] = ['posicion','descripcion','tipo','precio'];

  constructor(
    private _orderService: OrderService, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder() {
    this.activatedRoute.params.subscribe(params => {
      this._orderService.getOrder(params.id).subscribe(res => {
        this.orders = res[0];
        this.total = this.CalcTotal(this.orders.order);
      });
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
