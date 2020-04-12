import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderComponent } from "./order/order.component";

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss']
})
export class TradeComponent implements OnInit {
  // stockList = true;
  // stocks= ['sbi', 'irctc'];
  selectedStock = ''
  @ViewChild(OrderComponent, {static: true})  order: OrderComponent;

  constructor() {
    console.log('trade')
   }

  ngOnInit() {
    console.log(this.order)
  }

  childPlaceOrder(){
    this.order.placeOrder();
  }
  selectStock(s){
    this.selectedStock = s;
  }
}
