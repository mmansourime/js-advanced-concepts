    // Break & Continue
        //Break: برای بیرون امدن از کل حلقه
        //Continue: برای بیرون امدن از همون دستور خاص یا ایتریت صرفه نظر میکند
// for(let counter=0; counter < 10; counter++){
//     console.log(counter);
// }
// for(let counter=0; counter < 10; counter++){
//     if (counter === 7) {
//         break;
//     }
//     console.log(counter);
// }
for(let counter=0; counter < 10; counter++){
    if (counter === 7) {
        continue;
    }
    console.log(counter);
}