function ProductItem(productName) {
  this.productName = productName;
}

ProductItem.prototype.getInfo = function() {
  return `Product Name: ${this.productName}`;
};

// Write your code here
function FoodProduct(productName, expiryDate) {
  ProductItem.call(this, productName);

  this.expiryDate = expiryDate

}

FoodProduct.prototype = Object.create(ProductItem.prototype);
FoodProduct.prototype.constructor = FoodProduct;