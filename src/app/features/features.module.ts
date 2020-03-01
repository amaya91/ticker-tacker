import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock/stock.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [StockComponent, WatchlistComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ]
})
export class FeaturesModule { }
