import { Component, OnInit, Input } from '@angular/core';
// import { List } from 'src/app/shared/list.model';
import { StockService } from 'src/app/core/stock.service';
// import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  stock = {};
  private showMyMessage: boolean;
  private searchItem: string;

  constructor(
    private stockService: StockService,
    private activatedRoute: ActivatedRoute,   
    private router: Router
  ) {}

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.searchItem = paramMap.get('searchItem');
      this.stockService.getStock().subscribe(
          data => {this.stock = data;
          console.log(this.stock)},
          err => {alert(this.searchItem + ' is not supported')
          this.router.navigate(['watchlist'])}
      );
     
      
  }
    )
  }

  addToWatchlist() {
      this.showMyMessage = true
      this.stockService.addToLocalStorage(this.searchItem);
    }
}

