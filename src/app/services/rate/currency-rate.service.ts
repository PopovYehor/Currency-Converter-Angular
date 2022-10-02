import { iLabelRates, iSelected, iConfigRates, iCount, iRequestPush  } from './../../interface/interfase';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CurrencyRateService {

  constructor(private http: HttpClient) { }
  
  key = 'N5RENxgcnWtJnwVfQRDRGYdpej7qkgJE'
  rateUrl: string = `https://api.exchangerate.host/latest?access_key=${this.key}&base=`

  rateNow: iCount ={
    first:  0,
    second: 0
  }

  Count: iCount = {
    first:  1000,
    second: 1
  }

  SelectItems: iSelected = {
    first: 'UAH',
    second: 'USD'
  }

  CurrencyLabels: iLabelRates[] = []

  pushCerrenceLabels(){
    this.http.get<iRequestPush>(this.rateUrl).subscribe(data=>{
      const ratesKey = Object.keys(data.rates)
      ratesKey.forEach(elem => this.CurrencyLabels.push({name: elem}))
    })
  }

  getRateTo(base: string){
    this.http.get<iConfigRates>(this.rateUrl+base).subscribe(data =>{
      const {rates} = data
      base == 'EUR' ? this.rateNow.first = Number(rates['UAH'].toFixed(2)) : this.rateNow.second = Number(rates['UAH'].toFixed(2))
      })
  }
  
  getSelectRate(base: string, value: string, flag? : boolean){
    this.http.get<iConfigRates>(this.rateUrl+base).subscribe(data =>{
      const {rates} = data
      !flag ? this.Count.first =  Number((this.Count.second * rates[value]).toFixed(2)) 
      : this.Count.second = Number((this.Count.first * rates[value]).toFixed(2))
    })
  }
}
