class Price {
  constructor({buy, sell, id, pair, timestamp})  {
    this.buy = buy/100;
    this.sell = sell/100;
    this.id = id;
    this.pair = pair;
    this.timestamp  = timestamp;
  }
  mid(){
    return Math.round((this.buy + this.sell)/2 * 1000)/1000;
  }
  quote(){
    return this.pair.slice(3);
  }
}

class Datasource {
  getPrices(){
    return fetch('https://static.ngnrs.io/test/prices')
    .then((response)=>response.json())
    .then((priceJson) => priceJson.data.prices.map((priceJson) => new Price({...priceJson})))
  }
}

const ds = new Datasource();
ds.getPrices()
.then((prices) => {
  prices.forEach((price) => {
    console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
  });
}).catch((error) => {
  console.error(error);
});