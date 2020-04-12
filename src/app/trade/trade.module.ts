import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { TradeRoutingModule } from './trade-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TradeComponent } from './trade.component';
import { StocksComponent } from './stocks/stocks.component';
// import {TradeService} from './trade.service'



@NgModule({
  declarations: [OrderComponent, TradeComponent, StocksComponent],
  imports: [
    CommonModule,
    TradeRoutingModule,
    SharedModule
  ],
  exports: [
    OrderComponent,
    TradeComponent,
    TradeRoutingModule
  ]
})
export class TradeModule { }
