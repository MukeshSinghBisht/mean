import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundWalletComponent } from './fund-wallet/fund-wallet.component';
import { DepositComponent } from './deposit/deposit.component';



@NgModule({
  declarations: [FundWalletComponent, DepositComponent],
  imports: [
    CommonModule
  ]
})
export class FundsModule { }
