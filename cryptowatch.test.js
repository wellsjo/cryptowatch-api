const cryptowatch = require("./cryptowatch");

test("basic request", done => {
  const cw = new cryptowatch();

  cw.trades("bitfinex", "btcusd").then(trades => {
    console.log(trades);
    expect(trades.length).toBeGreaterThan(0);
    done();
  });
});

test("request with params", done => {
  const cw = new cryptowatch();

  cw.trades("bitfinex", "btcusd", { limit: 100 }).then(trades => {
    expect(trades.length).toBeGreaterThan(0);
    done();
  });
});
