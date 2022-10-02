import { CurrencyRateService } from '../../services/rate/currency-rate.service';
import { Component, OnInit } from '@angular/core';
import { forkJoin} from 'rxjs';
import { iRequestRate } from '../../interface/interfase';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public Rate: CurrencyRateService) {}
  
  ngOnInit(): void {
    forkJoin<iRequestRate>({
      USD: this.Rate.getRateTo('USD'),
      EUR: this.Rate.getRateTo('EUR')
    })
  }

  rateTo(base: string): void{
    this.Rate.Count.first = 1
    this.Rate.SelectItems.first = base
    this.Rate.SelectItems.second = 'UAH'
    this.Rate.getSelectRate(base, 'UAH', true)
  }
}
