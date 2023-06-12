//BASE PART
const apples = 15.678;
const bananas = 123.965;
const cranberry = 90.2345;

const minPrice = Math.min(apples, bananas, cranberry);
console.log("min price", minPrice);
const maxPrice = Math.max(apples, bananas, cranberry);
console.log("max price:", maxPrice);

const totalPrice = apples + bananas + cranberry;
console.log("total price:", totalPrice);

const ApplesPriceWithoutCoins = Math.floor(apples);
const BananasPriceWithoutCoins = Math.floor(bananas);
const CranberryPriceWithoutCoins = Math.floor(cranberry);
const totalPriceWithoutCoins =
  ApplesPriceWithoutCoins +
  BananasPriceWithoutCoins +
  CranberryPriceWithoutCoins;
console.log("total price without coins:", totalPriceWithoutCoins);

const roundedPrice = Math.round(totalPrice / 100) * 100;
console.log("Total price rounded to the nearest hundred:", roundedPrice);

const totalPriceIsEvenNum = Boolean(totalPrice % 2 === 0);
console.log("Total price is even number:", totalPriceIsEvenNum);

const change = 500 - totalPrice;
console.log("Change from 500 hrn:", change);

const averagePrice =
  Math.round(((apples + bananas + cranberry) / 3) * 100) / 100;
console.log("Average price:", averagePrice);

const discount = Math.random();
console.log("Random discount:", discount);

const totalPriceWithDiscount = (totalPrice - totalPrice * discount).toFixed(2);
console.log("Total price with discount:", totalPriceWithDiscount);

const income = totalPrice / 2 - totalPrice * discount;
console.log("Income money:", income);

//ADVANCED
console.log(
  `Minimal price: ${minPrice}, maximal price: ${maxPrice},
   total price: ${totalPrice}, total price without coins: ${totalPriceWithoutCoins},
   total price rounded to the nearest hundred: ${roundedPrice}, total price is even number: ${totalPriceIsEvenNum}, 
   change from 500 hrn: ${change}, average price: ${averagePrice}, random discount: ${discount}, total price with discount: ${totalPriceWithDiscount},
   income money: ${income}`
);
