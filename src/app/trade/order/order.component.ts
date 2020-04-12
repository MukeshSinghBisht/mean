import { Component, OnInit, OnChanges, AfterContentInit, AfterContentChecked, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit,OnChanges, AfterContentInit, AfterContentChecked {
  // @Input() stocks;
  @Input() selectedStock: 'string' ;



  orderForm = new FormGroup({
    price: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    total: new FormControl('',[Validators.required]),
    orderType : new FormControl('limit', [Validators.required])
  })
  orderTypes = ['limit', 'market'];

  constructor() { 
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(){
    console.log('ngOnChanges');
  }
  ngAfterContentInit(){

  }

  ngAfterContentChecked(){

  }
   placeOrder(){
    console.log('placeOrder', this.orderForm.value);  
  }
  
}
