import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CurrencyRateService } from '../../../services/rate/currency-rate.service';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  constructor(public Rate: CurrencyRateService) { }

  @Input() defaulSelectItem: string = ''
  @Output() getValues = new EventEmitter<string>()
  
  ngOnInit(): void {
  }
  getValue(value: string) {
    this.getValues.emit(value);
  }
}
