
    //ُStrings

let result;

result = "My Name's Mohammad Mansouri";
result = 'My Name\'s Mohammad Mansouri';
    //از هر دو کارکتر میشود استفاده کرد برای تعریف استرینج ها

let firstName = "Mohammad";
let lastName = "Mansouri";
let age = 44;
let job = "Web Developer";

result ="Hello, "+"My Name is: " + firstName +" "+ lastName +" and I Have "+ age + " I Work In "+ job;
    //ترکیب استرین ها به روش بالا خیلی پیچیده و سخت است بنابراین از یه روش ساده تر اسمثل زیر استفاده میکنیم

result  = `Hello, My Name is: ${firstName} ${lastName} and i Am ${age} and I work In ${job}`;
//به همین سارگی با تمپلیت تونستیم متن ها را با هم ترکیب کنیم




let fullName;
fullName = "Mohammad Mansouri";
result = fullName.length;
result = fullName.toLowerCase();
result = fullName.toUpperCase();
result = fullName[9];
    // برای اشاره به کارکتر مورد نظر
result = fullName[fullName.length - 1];
    //برای اشاره به ارین کارکتر

result = fullName.indexOf("n");
result = fullName.split(" ");
result = fullName.split(",");

result = fullName.replace("Mohammad", "Aida");
result = fullName.replace("d", "H");

result = fullName.includes("Ali");
result = fullName.includes("K");
    //وجود ندارد
result = fullName.includes("Mohammad");
result = fullName.includes("M");
    //وجود دارد



console.log(result);
