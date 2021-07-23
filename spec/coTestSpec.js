const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Co Test", function() {

  it("should create the product Medium Coverage", function() {
    const coTest = new CarInsurance([ new Product('Medium Coverage', 10, 20) ]);
    expect(coTest.products[0].name).equal('Medium Coverage');
  });

  it("should degrade the price and sellIn by 1 of the product Medium Coverage", function() {
    const coTest = new CarInsurance([ new Product('Medium Coverage', 10, 20) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(19);
    expect(products[0].sellIn).equal(9);
  });

});
