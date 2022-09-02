    //شروط Condation

// let result;
// let num1 = 5;
// let num2 = 8;
// let num3 = "8";


//result = num1 > num2;
//result = num1 < num2;
//result = num1 <= num2;
//result = num1 >= num2;
//result = num1 != num2;

 
//result = num1 == num2;
//result = num2 == num3;
//result = num2 != num3;
    //برای مقایسه مقدار ولیو
//result = num2 === num3;
//result = num2 !== num3;
    //برای مقایسه مقدار ولیو و نوع داده


// if (num1 < num2){
//     console.log(true);
// }
// if (num1 == num2){
//     console.log("حرفت حسابه!");
// }
// else if (num1 === 5){
//     console.log("عدد مورد اشاره برابر با عدد 5 است")
// }
// else{
//     console.log("نا حسابه!");
// }


let isRich = true;
let isKind = true;
let isFat =true;
let result;

// if (!isRich) {
//     console.log("درسته !");
// }
// if (!isRich && isFat) {
//     console.log("درسته !");
// }

// if (isRich && isKind) {
//     console.log("درسته !");
// }

// if (isRich && isKind && isFat) {
//     console.log("درسته !");
// }
// else{
//     console.log("نا ردسته !"); 
// }
    //برای شرط های تودر تو مثل بالا روش سختی است بهتر است از روش زیر استفاده کنیم:

switch (isKind, isKind, isRich) {
    case isRich: 
    console.log("*888 !");
        break;

    case !isRich || isFat: 
        console.log("** !");
        break;

    case isRich || isKind: 
        console.log("*** !");
        break;

    case isRich && isKind || isFat:  
        console.log("**** !");
        break;

    default:
        console.log("نا ردسته !"); 
}