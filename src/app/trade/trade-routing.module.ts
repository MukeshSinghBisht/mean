import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderComponent } from './order/order.component';
import { TradeComponent } from './trade.component';
 import { TradeAuthGuard } from './trade-auth.guard';

const routes: Routes = [{
  path: '',
  
  // canActivate: [TradeAuthGuard],
  component: TradeComponent
  // children: [{
  //   path: '',
  //   component: OrderComponent,
  // }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TradeRoutingModule {}
