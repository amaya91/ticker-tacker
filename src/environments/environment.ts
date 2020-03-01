// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: "https://sandbox.iexapis.com/stable/stock/SYMBOL/quote?token=Tpk_9ef4a4e9b01d41aaab56e08a429923f8",
  WATCHLIST_URL: "https://sandbox.iexapis.com/stable/stock/market/batch?symbols=watchlist&types=quote&filter=symbol,companyName,latestPrice,change,changePercent,lastTradeTime,primaryExchange&token=Tpk_9ef4a4e9b01d41aaab56e08a429923f8",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
