import { CurrencyRateService } from '../../../services/rate/currency-rate.service';
import { ExchangeComponent } from '../exchange.component';
import { Component, OnInit } from '@angular/core';

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
    this.Rate.SelectItems.first = this.Rate.SelectItems.second
    this.Rate.SelectItems.second = valueFirstSelect
    this.Rate.getSelectRate( this.Rate.SelectItems.first, valueFirstSelect, true)
  }

  swapValues () : void{
    this.swap(this.Rate.SelectItems.first)
  }
}
