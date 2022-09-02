    //Loop: حلقه ها




    //While Loop: زمانی از وایل استفاده میکنیم که نعداد تکرار برامون مشخص نباشه
// while (tset) {
//     statment;
// }


//let i = 0;

// while (i < 10) {
//      console.log("Hello Dayana");
//         i++;
// }
// while (i < 50) {
//         //برای نمایش اعداد فرد کوچگتر از عدد 50
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//     i++;
// }
// while (i < 50) {
//         //برای نمایش اعداد زوج کوچگتر از عدد 50
//     if (i % 2 === 0) {
//         console.log(i);
//     }
//     i++;
// }



    //for Loop: زمانی که تعداد تکرار برامون مشخص باشه و براحتی میتونیم به المنت های آرایه ها ی درون حلقه هم دسترسی داشته باشیم 
// for (let k = 0; k < 50; k++) {
//     if (k % 2 !== 0) {
//      //برای نمایش اعداد فرد کوچگتر از عدد 50
//         console.log(k);
//     }
// }


// for (let k = 0; k < 50; k++) {
//     if (k % 2 === 0) {
//           //برای نمایش اعداد زوج کوچگتر از عدد 50
//         console.log(k);
//     }
// }
// 


let numbers = [4, 15, 20, 8, 10]
 
// for (let g = 0; g < numbers.length; g++) {
   
//     if (numbers[g] === 20) {
//         console.log("وجود دارد !!!");
//     }
// }

    // iterator: اشاره کردن به اندکس خاصی از آرایه و یا آبجکت

// for (let number  of numbers) {
//         //ایتریت کردن درون یک آرایه
//     if (number === 20) {
//         console.log(`${number} Found !!!`);
//     }
// }

// for (let number  in numbers) {
//         //ایتریت کردن درون یک آرایه برای بدست آوردن مقادیر هر المنت
//     console.log(`${number}: ${numbers[number]}`);
// }

let obj = {
    fname: "Mohammad",
    lName: "Mansori",
    age: 44,
    job: "Web Developer",
    color: "Lite Blue"

};

for (let per in obj) {
    if (per = "Mansouri") {
        console.log(`${per} Found !!!`);
    }
}
for (let key in obj) {
   console.log(`${key}: ${obj[key]}`);
}


