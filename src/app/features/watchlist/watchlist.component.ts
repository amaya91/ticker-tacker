import { Component, OnInit, Input } from '@angular/core';
import { Stock } from 'src/app/shared/stock.model';
import { StockService } from 'src/app/core/stock.service';


@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})

export class WatchlistComponent implements OnInit {
  myList: string[];
  watchedStocks: Stock[] = [];
  stock: Stock;
  removedSymbol: string;
  private showMyMessage: boolean ;
  symbol: string;
  hide: string;
  
    
  constructor(
    private stockService: StockService,
  ) {}
  
  ngOnInit() {

    if (localStorage.getItem('watchList') == null) {
      this.showMyMessage = true
    } else {
    this.myList =localStorage.getItem('watchList').split(',');
    for (let i = 0; i<this.myList.length; i++) {
      this.stockService.changeSymbol(this.myList[i]);
      this.stockService.getStock().subscribe(data => {
        this.stock = data;
        this.watchedStocks.push(this.stock);
      })}
    }
  }
  
  removeFromWatchlist(index:number) {
    this.removedSymbol = this.watchedStocks[index].symbol;
    this.removedSymbol = this.removedSymbol.toLowerCase();
    this.stockService.removeFromLocalStorage(this.removedSymbol);
  }

}
