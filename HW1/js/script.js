const bmw = 15.678;
const audi = 90.2345;
const mers = 123.965;

const maxNum = Math.max (bmw, audi, mers);
const minNum = Math.min (bmw, audi, mers);

console.log ("Максимальна ціна: ", maxNum);
console.log ("Мінімальна ціна: ", minNum);

const sum = bmw + audi + mers;
console.log("Вартість всіх товарів: ", sum);

const bmwTrunc = Math.trunc(bmw);
const audiTrunc = Math.trunc(audi);
const mersTrunc = Math.trunc(mers);
const sumTrunced = Math.floor(bmwTrunc + audiTrunc + mersTrunc);

console.log("Вартість всіх товарів без копійок округлена в меншу сторону: ", sumTrunced);

let sumFixedToHundreds = (sum / 1000).toFixed(3);
sumFixedToHundreds = parseFloat(sumFixedToHundreds).toFixed(1) * 1000;
console.log("Вартість всіх товарів округлена до сотень ", sumFixedToHundreds);

const sumFloor = Math.floor(sumTrunced);
let isEven = Boolean;
isEven = sumFloor % 2 === 0 ? (isEven = true) : (isEven = false);

console.log("Чи парна вартість? ", isEven);

const change = 500 - sum;
console.log("Шановний клієнт, Ваша решта з 500 грн : ", change);

let middlePrice = ((bmw + audi + mers) / 3).toFixed(2);
console.log("Середнє значення цін: ", middlePrice);

const discountGenerator = Math.floor(Math.random() * (100 - 0 + 1) + 0);
console.log("Випадкова знижка ", discountGenerator + "%");

const discountAmount = (sum * discountGenerator) / 100;
const discountedAmount = (sum - (sum * discountGenerator) / 100).toFixed(2);
console.log("Сума до оплати: ", discountedAmount);

const profit = (sum / 2 - discountAmount).toFixed(2);
console.log("Чистий прибуток, якщо клієнт заплатив зі знижкою: ", profit);

document.write(
"Максимальна ціна: ", maxNum, "</br>",  
"Мінімальна ціна: ", minNum, "</br>",
"Вартість всіх товарів: ", sum, "</br>",
"Вартість всіх товарів без копійок округлена в меншу сторону: ", sumTrunced, "</br>",
"Вартість всіх товарів округлена до сотень ", sumFixedToHundreds, "</br>",
"Чи парна вартість? ", isEven, "</br>",
"Шановний клієнт, Ваша решта з 500 грн : ", change, "</br>",
"Середнє значення цін: ", middlePrice, "</br>",
"Випадкова знижка ", discountGenerator + "%", "</br>",
"Сума до оплати: ", discountedAmount, "</br>",
"Чистий прибуток, якщо клієнт заплатив зі знижкою: ", profit, "</br>"
)