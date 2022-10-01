import { CurrencyRateService } from './../services/rate/currency-rate.service';
import { ExchangeComponent } from './../exchange/exchange.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ISwap } from '../interface/interfase';


@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.scss']
})
export class SwapComponent implements OnInit {

  constructor(public Exchange: ExchangeComponent, public Rate: CurrencyRateService) { }
  
  ngOnInit(): void {
  }

  swap(valueFirstSelect: string): void{
    this.Exchange.SelectItems.first = this.Exchange.SelectItems.second
    this.Exchange.SelectItems.second = valueFirstSelect
    this.Rate.getSelectRate( this.Exchange.SelectItems.first, valueFirstSelect, true)
  }

  swapValues () : void{
    this.swap(this.Exchange.SelectItems.first)
  }
}
