import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  stockList = true;
  stocks= ['sbi', 'irctc'];
  selectedStock = '';
  @Output() clickSelectStock: any = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  selectStock(s){
    this.clickSelectStock.emit(s);
  }
}
