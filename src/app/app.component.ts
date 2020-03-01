import { Component } from '@angular/core';
import { StockService } from './core/stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stockTest';
  searchItem: string;
  search: string;
  stock:{};

  constructor(
    private stockService: StockService,
    private router: Router
  ){}

  ngOnInit(){
   this.router.navigate(['watchlist']);
  }

  searchClick() {
    this.stockService.changeSymbol(this.searchItem);
    this.search = '';
   
    this.stockService.getStock().subscribe(
      data => {this.stock = data
        this.router.navigate(['/stock', this.searchItem]);},
      err => alert(this.searchItem + ' is not supported')
     
  );
   

  }

  goToWatchlist() {
    this.router.navigate(['watchlist']);
  }

}
