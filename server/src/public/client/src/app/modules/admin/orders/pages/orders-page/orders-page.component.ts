import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { OrderService } from 'src/app/services/order.service';
import { DataUserModel } from 'src/app/core/models/datauser.model';


@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css']
})
export class OrdersPageComponent implements OnInit {

  users!: DataUserModel[];

  displayedColumns: string[] = ['id','nombre', 'email', 'accion'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this._orderService.getOrder().subscribe(res => {
      let users: DataUserModel[] = [];
      res.forEach((elem:any) => {
        let user =  {
          _id: elem._id,
          ...elem.user
        }
        users.push(user)
      });
      this.users = users;
      this.dataSource = new MatTableDataSource(users);
      this.dataSource.paginator = this.paginator;
    })
  }


}
