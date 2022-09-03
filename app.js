//Function Expression, Hoisting, Rest
//Function Decleration
// function myFunc(a, b) {
//   return a + b;
// }
// console.log(myFunc(2, 3));

//Function Expression
// let result = function (a, b) {
//   return a + b;
// };
// console.log(result(6, 8));

//تفاوت دو تا فانکشن بالا در اینکه اولی حتمی باید اسم داشته باشه ولی دومی نیاز ندارد
//و تفاوت دیگه اینه که اولی تا وقتی صداش نکنیم اجرا نمیشه ولی دومی بمحض اینکه بهش رسیدیم اجرا میشود
//مثال ملموس تر:
// let arr = [1, 3, 5, 3];
// let res = arr.reduce(function (a, b) {
//   return a + b;
// });
// console.log(res);

//Hoisting
//وقتیکه از فانکشن دکلریشن استفاده میکنید میتونید قبل از خود فانکشن اون صدا زد ولی برای فانکشن اکسپرشن این طور نیست به اصطلاح هوستینگ نمیشه
//مثال:

// console.log(myFunc(2, 3)); //بدرستی صدا زده میشود و نتیجه دارد
// function myFunc(a, b) {
//     return a + b;
//   }

// console.log(result(6, 8)); //دارای خطا است و میگه نمیتونید قبل خود فانکشن اون صدا بزنید
// let result = function (a, b) {
//     return a + b;
//   };

//Rest: بمعنی باقیمانده و یا تتمع
//برای اینکه ورودی های نامحدود داشته باشیم مثل آرایه

//روش اول
// function sum(...result) {
//   let total = 0;
//   for (let index = 0; index < result.length; index++) {
//   total += result[index];
//   }
//   return total;
// }
// console.log(sum(2, 5 ,3, 7, 10));

//روش دوم:
function sum(...result) {
  let total = 0;
  for (let index of result) {
    total += index;
  }
  return total;
}
console.log(sum(2, 5, 3, 7, 10));
