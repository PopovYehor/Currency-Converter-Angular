import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rate-item',
  templateUrl: './rate-item.component.html',
  styleUrls: ['./rate-item.component.scss']
})
export class RateItemComponent implements OnInit {

  constructor() { }
  @Input() rateSymbol : string = ''
  @Input() rateData: number = 0
  @Output() setRate = new EventEmitter<void>()
  ngOnInit(): void {
  }
  setRates(){
    this.setRate.emit()
  }
}
