export interface Stock {
    symbol: string,
    companyName: string,
    high: number,
    low: number,
    open: number,
    close: number,
    latestPrice: number, 
    change: number,
    changePercent: number,
    lastTradeTime: number,
    primaryExchange: string,
}