class Price {
  constructor({buy, sell, id, pair, timestamp})  {
    this.buy = buy;
    this.sell = sell;
    this.id = id;
    this.pair = pair;
    this.timestamp  = timestamp;
  }
  mid(){
    return (this.buy + this.sell)/2/100;
  }
  quote(){
    return this.pair.slice(3);
  }
}

class Datasource {
  getPrices(){
    return fetch('https://static.ngnrs.io/test/prices')
    .then((response)=>response.json())
    .then((priceJson) => priceJson.data.prices.map(priceJson => new Price({...priceJson})))
  }
}

const ds = new Datasource();
ds.getPrices()
.then(prices => {
  prices.forEach(price => {
    console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
  });
}).catch(error => {
  console.error(error);
});