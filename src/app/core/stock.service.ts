import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stock } from '../shared/stock.model';
import { Router } from '@angular/router';
// import { WatchlistQuote } from '../shared/watchlist.quote.model';


@Injectable({
  providedIn: 'root'
})
export class StockService {
  private regex = /SYMBOL/gi;
  // private batch = /watchList/gi;
  stockSymbol:string;
  newList: string;
  myList: string[]
  

  constructor(   
    private http: HttpClient,  
    private router: Router
  ) { }

  // getStockList():Observable<WatchlistQuote>{
  //   return this.http.get<WatchlistQuote>(environment.WATCHLIST_URL.replace(this.batch, localStorage.getItem('watchList')));
  // }

  getStock():Observable<Stock>{
    return this.http.get<Stock>(environment.API_URL.replace(this.regex, this.stockSymbol));
  }

  changeSymbol(searchItem:string) {
    this.stockSymbol = searchItem;
    return this.stockSymbol;
  }

  addToLocalStorage(searchItem:string) { 
     if(localStorage.getItem('watchList')== null) {
      localStorage.setItem('watchList', searchItem);
    } else { 
        let sameList= localStorage.getItem('watchList');
        let checkList = sameList.split(',');
        if(checkList.includes(searchItem)){
          console.log('repeated');
          localStorage.setItem('watchList', sameList);
        } else 
          {this.newList = (localStorage.getItem('watchList')) + ',' + searchItem;
          localStorage.setItem('watchList', this.newList);}
    }
  }

  removeFromLocalStorage(removedSymbol:string) {
    this.myList =localStorage.getItem('watchList').split(',');
    let mynewList= []
    if(this.myList.length>1) {
      for (let i = 0; i<this.myList.length; i++) {
        if(this.myList[i] !== removedSymbol) {
         mynewList.push(this.myList[i]);
        } else console.log('removed');
      } 
      localStorage.setItem('watchList', mynewList.toString());
    } else localStorage.clear();
  }

  
//   createStringArray(arr, prop) {
//     var result = [];
//     for (var i = 0; i < arr.length; i += 1) {
//        result.push(arr[i][prop]);
//     }
//     return result;
//  }

}


