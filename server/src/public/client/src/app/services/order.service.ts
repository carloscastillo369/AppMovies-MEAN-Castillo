import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DataUserModel } from '../core/models/datauser.model';
import { OrderModel } from '../core/models/order.model';
import { UserOrderModel } from '../core/models/user-order.model';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private URL_BASE: string = !environment.production? 'http://localhost:8080' : '';

  private urlAPI = this.URL_BASE + '/api/orders/';

  constructor(private http: HttpClient) { }

  getOrder(id?: string|undefined){
    return this.http.get<UserOrderModel[]>(this.urlAPI + (id||''));
  }

  saveOrder(user: DataUserModel, order: OrderModel[]){
    return this.http.post<any>(this.urlAPI, { user, order });
  }

}
