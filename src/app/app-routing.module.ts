import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockComponent } from './features/stock/stock.component';
import { WatchlistComponent } from './features/watchlist/watchlist.component';


const routes: Routes = [
  {
    path: 'stock/:searchItem', 
    component: StockComponent
  },
  {
    path: '',
    component: WatchlistComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
