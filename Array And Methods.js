    //Array: آرایه هاو متدهای آن
        //تعریف آرایه بصورت کلاسیک
// let temp = [2, 5, 4, 9, 12, 50, 33, 45, 22, 17, 40, 20];
// console.log(temp);

        //برای تعریف آرایه بصورت Constarction
let numbers = new Array(2, 22, 17, 5, 4, 9, 12, 50);
let temp = [1, 2, 4];
let result;
//numbers.push(88);//برای افزون یک مقدار در انتهای آرایه
//numbers.unshift(75);//برای افزودن یک مقدار به ابتدای آرایه
//let result = numbers.pop();//برای انتخاب یا برداشتن اخرین مقدار ارایه
//let result = numbers.shift();//برای انتخاب یا برداشتن اولین مقدار ارایه
//numbers.splice(3, 0, 250);// برای قرار دادن مقداری در هر کجای آرایه
//let result = numbers.splice(3, 1);//برای برداشتن مقداری خاص از هر کجای آرایه


//result = temp.concat(numbers);//برای ترکیب دو یا چند آرایه با هم
// numbers.sort(function(x, y){
//     return x - y;//برای سورت نزولی
// });
// console.log( numbers);
// numbers.sort(function(x, y){
//     return y - x;//برای سورت صعودی
// });

//result = numbers.sort((x, y) => x-y);// به کمک تابع پیکانی هم میشه سورت کرد



// result = numbers.filter(function(num){
//     return num > 10
//     //فیلتر کردن به روش اول
// });

//result = numbers.filter((num) => num > 20);//فیلتر کردن به روش دوم

// result = numbers.map(function(num){
//     return `<li>${num}</li>`;//متد مپ به روش اول
// });
//result = numbers.map((num) => `<li>${num}</li>`); //متد مپ به روش دوم


// result = numbers
// .filter((num) => num > 5)
// .map((num) => `<li>${num}</li>`);//استفاده همزمان از چند متد از آرایه ها

// let sum = 0;
// for(let num of numbers){
//     sum += num;
// };//برای جمع کردن تمام المنت های داخل یک آرایه به روش قدیمی
// result = sum;

// result = numbers.reduce(function(sum, cValue){
//     return sum + cValue;
// });//جمع کردن تمام مقادیر یک آرایه به روش جدید اول

//یا به روش تابع پیکانی
result = numbers.reduce((sum, cValue) => sum + cValue);//جمع کردن تمام مقادیر یک آرایه به روش جدید دوم

console.log( numbers); 
console.log( result);