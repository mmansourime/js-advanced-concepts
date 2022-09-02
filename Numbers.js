//Operators-عملگرها

// let result;
// let num1 = 4;
// let num2 = 3;
// result = num1 + num2;
// result = num1 - num2;
// result = num1 * num2;
// result = num1 / num2;
// result = num1 % num2;
// result = num1 ** num2;



 //اولویت عملگرها

//  result = 2 + 3 * 4;
//  result = (2 + 3) * 4;
//  result = result * 4;
//  result *= 3;
//  result /= 3;
//  result += 1;
//  result = 5;
//  result = ++result;
//  result = result++;

//  console.log(result);

    //Math Object-شی ریاضی

let result;
result = Math.PI;
result = Math.E;
result = Math.round(3.8);
result = Math.round(3.4);
    // به نزدیکترین عدد صحیح بذسمت بالا یا پایین رند میکند


result = Math.ceil(3.8);
result = Math.ceil(3.4);
    //همیشه و همیشه به سمت بالا رند میکند

result = Math.floor(3.8);
result = Math.floor(3.4);
    //همیشه و همیشه به سمت پایین رند میکند

result = Math.sqrt(64);
    //برای جدر گرفتن یک عدد

result = Math.abs(-2.8);
result = Math.abs(-5);
    //از قدرمطلق برای مثبت کردن عدد صحیح و یا اعشاری استفاده میشود

result = Math.pow(5,2);
    //از این متد برای توان یک عدد استفاده میشود که عدد اولی خود عدد و عدد دومی مقدار توان آن است
result = Math.min(5,6,8,7,9,2,4,3,1,0);
result = Math.max(5,6,8,9,7,0,3,2,1,4);
    //از این متدها برای گرفتن بزگرترین و کوچکترین عدد مجموعه استفاده میشود
result = Math.floor(Math.random() * 20); 
    //برای پیدا کردن عدد رندوم بین صفر تا ماقبل عدد دلخواه
   
result = Math.floor(Math.random() * 20 + 1); 
 //برای پیدا کردن عدد رندوم بین صفر تا عدد دلخواه

 console.log(result);
          