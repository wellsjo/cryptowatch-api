<a name="CryptoWatch"></a>

## CryptoWatch
CryptoWatch
Wrapper for cryptowat.ch api

**Kind**: global class  

* [CryptoWatch](#CryptoWatch)
    * [.allowance()](#CryptoWatch+allowance)
    * [.assets()](#CryptoWatch+assets)
    * [.asset(name)](#CryptoWatch+asset)
    * [.pairs()](#CryptoWatch+pairs)
    * [.pair(name)](#CryptoWatch+pair)
    * [.exchanges([active])](#CryptoWatch+exchanges)
    * [.exchange(name)](#CryptoWatch+exchange)
    * [.markets([exchange])](#CryptoWatch+markets)
    * [.market(exchange, pair)](#CryptoWatch+market)
    * [.price(market, pair)](#CryptoWatch+price)
    * [.prices()](#CryptoWatch+prices)
    * [.summary(market, pair)](#CryptoWatch+summary)
    * [.summaries()](#CryptoWatch+summaries)
    * [.trades(market, pair, params)](#CryptoWatch+trades)
    * [.orderbook(market, pair)](#CryptoWatch+orderbook)
    * [.OHLC(market, pair, params)](#CryptoWatch+OHLC)

<a name="CryptoWatch+allowance"></a>

### cryptoWatch.allowance()
Gets remaining api allowance.

**Kind**: instance method of [<code>CryptoWatch</code>](#CryptoWatch)  
<a name="CryptoWatch+assets"></a>

### cryptoWatch.assets()
Gets all assets (crypto or fiat currency).

**Kind**: instance method of [<code>CryptoWatch</code>](#CryptoWatch)  
<a name="CryptoWatch+asset"></a>

### cryptoWatch.asset(name)
Gets an asset's information.

**Kind**: instance method of [<code>CryptoWatch</code>](#CryptoWatch)  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 

<a name="CryptoWatch+pairs"></a>

### cryptoWatch.pairs()
Gets currency pairs info.

**Kind**: instance method of [<code>CryptoWatch</code>](#CryptoWatch)  
<a name="CryptoWatch+pair"></a>

### cryptoWatch.pair(name)
Gets info for a currency pair.

**Kind**: instance method of [<code>CryptoWatch</code>](#CryptoWatch)  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 

<a name="CryptoWatch+exchanges"></a>

### cryptoWatch.exchanges([active])
Gets info for all the exchanges.

**Kind**: instance method of [<code>CryptoWatch</code>](#CryptoWatch)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [active] | <code>Boolean</code> | <code>true</code> | If true, only return active exchanges |

<a name="CryptoWatch+exchange"></a>

### cryptoWatch.exchange(name)
Gets info for an exchange.

**Kind**: instance method of [<code>CryptoWatch</code>](#CryptoWatch)  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 

<a name="CryptoWatch+markets"></a>

### cryptoWatch.markets([exchange])
Gets info for markets. Optionally specify a single exchange.

**Kind**: instance method of [<code>CryptoWatch</code>](#CryptoWatch)  

| Param | Type | Description |
| --- | --- | --- |
| [exchange] | <code>String</code> | Optional. Supply a specific exchange to get markets for |

<a name="CryptoWatch+market"></a>

### cryptoWatch.market(exchange, pair)
Gets info for a market given an exchange and pair.

**Kind**: instance method of [<code>CryptoWatch</code>](#CryptoWatch)  

| Param | Type |
| --- | --- |
| exchange | <code>String</code> | 
| pair | <code>String</code> | 

<a name="CryptoWatch+price"></a>

### cryptoWatch.price(market, pair)
Returns price for a given market and currency pair.

**Kind**: instance method of [<code>CryptoWatch</code>](#CryptoWatch)  

| Param | Type |
| --- | --- |
| market | <code>String</code> | 
| pair | <code>String</code> | 

<a name="CryptoWatch+prices"></a>

### cryptoWatch.prices()
Aggregate endpoint that returns the current price for all supported
markets. Somes values may be out of date by a few seconds as results
are cached.

**Kind**: instance method of [<code>CryptoWatch</code>](#CryptoWatch)  
<a name="CryptoWatch+summary"></a>

### cryptoWatch.summary(market, pair)
Returns summary for a given market and currency pair.

**Kind**: instance method of [<code>CryptoWatch</code>](#CryptoWatch)  

| Param | Type |
| --- | --- |
| market | <code>String</code> | 
| pair | <code>String</code> | 

<a name="CryptoWatch+summaries"></a>

### cryptoWatch.summaries()
Aggregate endpoint that returns the market summary for all supported
markets. Some values may be out of date by a few seconds as results are
cached.

**Kind**: instance method of [<code>CryptoWatch</code>](#CryptoWatch)  
<a name="CryptoWatch+trades"></a>

### cryptoWatch.trades(market, pair, params)
Returns trades for a given market and currency pair.

**Kind**: instance method of [<code>CryptoWatch</code>](#CryptoWatch)  

| Param | Type |
| --- | --- |
| market | <code>String</code> | 
| pair | <code>String</code> | 
| params | <code>Object</code> | 

<a name="CryptoWatch+orderbook"></a>

### cryptoWatch.orderbook(market, pair)
Returns the orderbook for a given market and currency pair.

**Kind**: instance method of [<code>CryptoWatch</code>](#CryptoWatch)  

| Param | Type |
| --- | --- |
| market | <code>String</code> | 
| pair | <code>String</code> | 

<a name="CryptoWatch+OHLC"></a>

### cryptoWatch.OHLC(market, pair, params)
Returns a market’s OHLC candlestick data. Returns data as lists of lists
of numbers for each time period integer.

**Kind**: instance method of [<code>CryptoWatch</code>](#CryptoWatch)  

| Param | Type |
| --- | --- |
| market | <code>String</code> | 
| pair | <code>String</code> | 
| params | <code>Object</code> | 

