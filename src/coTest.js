class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      switch (this.products[i].name) {
        case 'Medium Coverage':
          this.products[i].sellIn = this.products[i].sellIn - 1;
          if(this.products[i].price > 0){
                this.products[i].price = this.products[i].price - 1;               
              if(this.products[i].sellIn < 0){
                this.products[i].price = this.products[i].price - 1;
              }
          } 
          break;
        
        case 'Full Coverage':
          this.products[i].sellIn = this.products[i].sellIn - 1;
          if(this.products[i].price < 50){    
              this.products[i].price = this.products[i].price + 1;
            if(this.products[i].sellIn < 0){
              this.products[i].price = this.products[i].price + 1;
            }
          }
          break;
        
        case 'Low Coverage':
          this.products[i].sellIn = this.products[i].sellIn - 1;
          if(this.products[i].price > 0){
              this.products[i].price = this.products[i].price - 1;
            if(this.products[i].sellIn < 0){
              this.products[i].price = 0;
            }
          } 
          break;

        case 'Special Full Coverage':
          this.products[i].sellIn = this.products[i].sellIn - 1;
          if(this.products[i].price < 50){
            if(this.products[i].sellIn >= 0){
              this.products[i].price = this.products[i].price + 1;
              if (this.products[i].sellIn < 10 && this.products[i].price < 50){
                this.products[i].price = this.products[i].price + 1;
              }

              if (this.products[i].sellIn < 5 && this.products[i].price < 50){
                this.products[i].price = this.products[i].price + 1;
              }
            } 
          }

          if(this.products[i].sellIn < 0) {
            this.products[i].price = 0;
          }
          break;

        case 'Super Sale':
          this.products[i].sellIn = this.products[i].sellIn - 1;
          if(this.products[i].price > 1){
            this.products[i].price = this.products[i].price - 2;                 
          } else if(this.products[i].price > 0){
            this.products[i].price = this.products[i].price - 1;
          } 
          break;
      
        default:
          break;
      }
    }

    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance
}
