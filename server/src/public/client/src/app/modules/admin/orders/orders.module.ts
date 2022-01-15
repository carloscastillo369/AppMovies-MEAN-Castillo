import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { OrderUserComponent } from './components/order-user/order-user.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    OrdersPageComponent,
    OrderUserComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MaterialModule,
    SharedModule,
    FlexLayoutModule
  ]
})
export class OrdersModule { }
