import { Component, OnInit} from '@angular/core';
import { CurrencyRateService } from '../../services/rate/currency-rate.service';
import { iCount, iSelected } from '../../interface/interfase';
import { SelectComponent } from './select/select.component';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  
  constructor(public Rate : CurrencyRateService, public Select: SelectComponent) { }
  
  ngOnInit(): void {
    this.Rate.getSelectRate(this.Rate.SelectItems.first, this.Rate.SelectItems.second, true)
    this.Rate.pushCerrenceLabels()
  }

  setRate(item: string, valueCount: string, valueSelect: string, selectItem: string, rate: boolean, flag? : boolean){
    rate ? this.Rate.Count[item as keyof iCount] = Number(valueCount) 
    : this.Rate.SelectItems[item as keyof iSelected] = valueCount
    this.Rate.getSelectRate(valueSelect, this.Rate.SelectItems[selectItem as keyof iSelected],flag)
  }

  getInputValue(value: string, flag?: boolean): void{
    if (String(Number(value)) == "NaN" || value == '') value = '0';
    !flag ? this.setRate('first', value, this.Rate.SelectItems.first, 'second', true, true)
    : this.setRate('second', value, this.Rate.SelectItems.second, 'first', true)
  }

  getValueSelect(value: string, flag?: boolean): void {
    !flag ? this.setRate('first', value, value, 'second', false, true) 
    : this.setRate('second', value, value, 'first', false)
  } 
  
}
