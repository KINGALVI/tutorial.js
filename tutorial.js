// javascript এর code কাজ করছে নাকি তা পরিক্ষা করা যায 
console.log(5);









// ১ । javascript এ var এর ব্যবহার ।

// সংখ্যা ক্ষেত্রে var এর ব্যবহার ।
var age = 2;
console.log(age);

// নাম এর ক্ষেত্রে var এর ব্যবহার ।
var name = "alvi";
var country_name = 'BANGLADESH';
console.log(country_name, name);

// সত্য আথবা মিত্র্যা এর ক্ষেত্রে var এর ব্যবহার |
var true_false = true;
console.log(true_false);

var true_false = false;
console.log(true_false);

// একসাথে একাধিক var মান যোগ বা বিয়োগ এর ক্ষত্রে var এর ব্যবহার ।
var tomato_price = 20;
var potato_price = 20;
var total_price = tomato_price + potato_price;
console.log(total_price);

var tomato_price = 20;
var potato_price = 20;
var total_price = tomato_price - potato_price;
console.log(total_price);

// একসাথে একাধিক var মান গুন বা ভাগ এর ক্ষেত্রে var ব্যবহার ।
var orange_prize = 50;
var quantity = 5;
var total_price = orange_prize * quantity;
console.log(total_price);

var orange_prize = 50;
var quantity = 5;
var total_price = orange_prize / quantity;
console.log(total_price);

// কোন var এর মান পরিবতন করতে চাইলে এ ক্ষেত্রে var এর ব্যবহার ।
var true_false = true;
true_false = false;
console.log(true_false);

var true_false = false;
true_false = true;
console.log(true_false);

var tomato_price = 20;
tomato_price = 10;
var potato_price = 20;
potato_price = 15;
var total_price = tomato_price + potato_price;
console.log(total_price);

var tomato_price = 20;
tomato_price = 10;
var potato_price = 20;
potato_price = 5;
var total_price = tomato_price - potato_price;
console.log(total_price);

var orange_prize = 50;
orange_prize = 25;
var quantity = 5;
quantity = 25;
var total_price = orange_prize * quantity;
console.log(total_price);

var orange_prize = 50;
orange_prize = 25;
var quantity = 5;
quantity = 25;
var total_price = orange_prize / quantity;
console.log(total_price);

// কোন var এর মান পরিবতন না কর নতুন মান যোগ করতে চাইলে এ ক্ষেত্রে var এর ব্যবহার ।
var tomato_price = 20;
tomato_price += 10;
var potato_price = 20;
potato_price += 15;
var total_price = tomato_price + potato_price;
console.log(total_price);

var tomato_price = 20;
tomato_price -= 10
var potato_price = 20;
potato_price -= 5;
var total_price = tomato_price - potato_price;
console.log(total_price);

var orange_prize = 50;
orange_prize *= 25;
var quantity = 5;
quantity *= 25;
var total_price = orange_prize * quantity;
console.log(total_price);

var orange_prize = 50;
orange_prize /= 25;
var quantity = 5;
quantity /= 25;
var total_price = orange_prize / quantity;
console.log(total_price);

// কোন নাম এর ভিতরে যোগ করতে space দিতে চাইলে এ ক্ষত্রে  এর ব্যবহার ।
var name = "alvi";
var country_name = 'BANGLADESH';
var total_name = name + ' ' + country_name;
console.log(total_name);

// কোন string এর ভিতরে যদি সংখ্যা থাকে তাহলে সেটা যদি string থেকে যদি সংখ্যয় পরিবতন এ ক্ষত্রে var এর ব্যাবহার
var orange_prize = '50';
var orange_prizes = parseInt(orange_prize);
console.log(orange_prizes);

// কোন string এর ভিতরে যদি  দংশমিক সংখ্যা থাকে তাহলে সেটা সেটা কে দশমিক আকেরে দেখাতে হলে এ ক্ষত্রে var এর ব্যাবহার
var gpa = '3.55';
var gap_number = parseFloat(gpa);
console.log(gap_number);

// var এর কোন মানটি সংখ্যা , কোন মানটি string এবং কোন মানটি boolean ক্ষেত্রে var এর ব্যবহার;
var price = 100;
console.log(typeof price);

var price = '100';
console.log(typeof price);

var true_false = true;
console.log(typeof true_false);

// কোন ভাগের ভাগশেষ নিণয় করতে হলে var এর নিয়ম ।
var mangoes = 17;
var person = 5;
console.log(mangoes % person);

// var এর ভিতরে যদি এক গুচ্ছো string থাকে এবং সেই string এর মধ্যে যদি কোন নিদিষ্ট কোন string  আছে নাকি সেটা আমরা বের করতে চাই সে ক্ষেত্র var  ব্যবহার এর নিয়ম ।
const paragraph1 = 'my name is alvi i want to de a good fullstack wed devoloper';
const ifexgiest1 = paragraph1.includes("fullstack")
console.log(ifexgiest1);

// কোন String এর প্রথম মান যদি আমরা বের করতে চাই সে ক্ষেত্রে var এর ব্যবহার ।
const paragraph2 = 'my name is alvi i want to de a good fullstack wed devoloper';
const ifexgiest2 = paragraph2.startsWith("fullstack");
console.log(ifexgiest2);

// কোন String এর শেষ মান যদি আমরা বের করতে চাই সে ক্ষেত্রে var এর ব্যবহার ।
const paragraph3 = 'my name is alvi i want to de a good fullstack wed devoloper';
const ifexgiest3 = paragraph3.endsWith("devoloper");
console.log(ifexgiest3);

// var এর ক্ষেত্রে কোন মান এর মধ্যে পাথক্য বা comparision বের করার নিয়ম ।
var num1 = 50;
var num2 = 100;
console.log(num1 < num2);
console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 <= num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
console.log(num1 >= num2);
console.log(num1 >= num2);
console.log(num1 == num2);
console.log(num1 == num2);
console.log(num1 !== num2);
console.log(num1 !== num2);










// ২ । javascript এ Array এর ব্যবহার ।

// সংখ্যা ক্ষেত্রে Array এর ব্যবহার ।
var age = [11, 12, 13, 14, 15];
console.log(age);

// Array কোন মান কোন জায়গায় আছে সেটা বের করার নিয়ম ।
var number = [11, 12, 13, 14, 15];
console.log(number.indexOf(13));

var name = ['alvi', "abusle", "ahsan", "arghya", 'apu'];
console.log(name.indexOf('apu'));

// কোন Array ভিতরে মান পরিবতন করতে চাইলে সে ক্ষেত্রে Array এর ব্যবহার ।
var alvi = ['alvi', "shale", "apu", "arghya", "rakib", 'ahsoan'];
alvi[3] = 'clash of clan'
console.log(alvi);

var number = [11, 12, 13, 14, 15];
number[2] = 100;
console.log(number);

// Array এর ভিতরে কত গুলো সংখ্যা আছে সেটা বের করার ক্ষেত্রে Array এর ব্যবহার ।
var age = [11, 12, 13, 14, 15];
console.log(age.lenght);

// নাম এর ক্ষেত্রে Array এর ব্যবহার ।
var name = ['alvi', "abusle", "ahosan", "arghya", 'apu'];
console.log(name);

// Array এর ভিতরে কত গুলো শব্দ আছে সেটা বের করার ক্ষেত্রে Array এর ব্যবহার ।
var name = ['alvi', "abusle", "ahosan", "arghya", 'apu'];
console.log(name.lenght);

// Array এর ভিতরে কোন নিদিষ্ট আক্ষর বা সংখ্যা বের করতে চাইলে এ ক্ষেত্রে Array এর ব্যবহার ।
var number = [50, 51, 52, 53, 54, 55];
console.log(number[3]);

var name = ['alvi', "shale", "apu", "arghya",
  "rakib", 'ahsoan'];
console.log(name[1]);

// কোন Array এর মান পরিবতন করতে চাইলে এ ক্ষেত্রে Array এর ব্যবহার ।
var number = [50, 51, 52, 53, 54, 55];
number[2] = 100;
console.log(number);

var name = ['alvi', "shale", "apu", "arghya",
  "rakib", 'ahsoan'];
name[3] = 'clash of clan'
console.log(name);

// কোন Array এর মান খুজে বের করতে চাইলে এ ক্ষেত্রে Array এর ব্যবহার ।
var number = [50, 51, 52, 53, 54, 55];
var position_index = number.indexOf(55);
console.log(position_index);

// কোন Array এর ভিতরে নুতুন মান যোগ করতে চাইলে সে ক্ষেত্রে Array এর ব্যবহার ।
var number = [50, 51, 52, 53, 54, 55];
number.push(500);
console.log(number);

var names = ['alvi', "shale", "apu", "arghya", "rakib", 'ahsoan'];
names.push('clash of clan');
console.log(names);

// কোন Array এর ভিতরে শেষ মান কে সরিয়ে ফেলতে চাইলে সে ক্ষেত্রে Array এর ব্যবাহার ।
var number = [50, 51, 52, 53, 54, 55];
number.pop();
console.log(number);

var names = ['alvi', "shale", "apu", "arghya", "rakib", 'ahsoan'];
names.pop();
console.log(names);

// কোন Array এর ভিতরে শেষ মান কে সরিয়ে ফেলা হয়েছে এবং সেটা বের করতে চাইলে সে ক্ষেত্রে Array এর ব্যবাহার ।
var number = [50, 51, 52, 53, 54, 55];
element = number.pop();
console.log(element);

var names = ['alvi', "shale", "apu", "arghya", "rakib", 'ahsoan'];
element = names.pop();
console.log(element);

// কোন Array এর ভিতরে প্রথম মান কে সরিয়ে ফেলতে চাইলে সে ক্ষেত্রে Array এর ব্যবাহার ।
var number = [50, 51, 52, 53, 54, 55];
number.shift();
console.log(number);

var names = ['alvi', "shale", "apu", "arghya", "rakib", 'ahsoan'];
names.shift();
console.log(names);

// কোন Array এর ভিতরে প্রথম মান কে সরিয়ে ফেলা হয়েছে এবং সেটা বের করতে চাইলে সে ক্ষেত্রে Array এর ব্যবাহার ।
var number = [50, 51, 52, 53, 54, 55];
element = number.shift();
console.log(element);

var names = ['alvi', "shale", "apu", "arghya", "rakib", 'ahsoan'];
element = names.shift();
console.log(element);

// কোন string এর sentence কে যদি আমারা ভাগ করে দেখেতে চাই সে ক্ষেত্রে var এর ব্যবহার ।
const paragraph4 = 'my name is  alvi . i want to de a good fullstack wed devoloper';
const ifexgiest4 = paragraph4.split(" ");
console.log(ifexgiest4);

const paragraph5 = 'my name is  alvi . i want to de a good fullstack wed devoloper';
const ifexgiest5 = paragraph5.split(".");
console.log(ifexgiest5);

const paragraph6 = ['my name is  alvi  i want to de a good fullstack wed devoloper'];
const ifexgiest6 = paragraph6.join(':');
console.log(ifexgiest6);

const paragraph7 = 'my name is  alvi .'; 'i want to de a good fu'; 'llstack wed devoloper';
const ifexgiest7 = paragraph7.slice('.');
console.log(ifexgiest7);

// math var
// var math1 = al.pow(3, 8);
// console.log(math1);

// কোন Array এর ভিতরে কোন মান ছোট আথবা সমান কিনা সেটা বের করতে চাইলে সে ক্ষেত্রে Array এর ব্যবাহার ।
console.log(4 < 5);
console.log(6 < 5);
console.log(5 > 4);
console.log(5 > 6);
console.log(5 <= 6);
console.log(5 <= 5);
console.log(5 <= 4);
console.log(5 >= 4);
console.log(5 >= 5);
console.log(5 >= 6);
console.log(5 == 5);
console.log(5 == 6);
console.log(5 !== 5);
console.log(5 !== 6);










// ৩। javascript এ condisonal যেভাবে কাজ করে ।

//  *১ নিয়ম 
var iphone_price = 1000;
var my_budget = 500;
// যদি কথা সত্যি হয় তাহলে এই উত্তর আসবে ।
if (iphone_price > my_budget) {
  console.log("you can not buy iphone");
}
// যদি কথা সত্যি না হয় তাহলে এই উত্তর আসবে ।
else {
  console.log("you can buy iphone");
}

// *২য় নিয়ম 
var isGraduated = true;
var salary = 5000;
// যদি এই দুইটি  কথা সত্যি হয় তাহলে এই উত্তর আসবে ।
if (isGraduated == true && salary > 4000) {
  console.log("i will succsess");
}
// যদি এই দুইটি  কথা সত্যি না হয় তাহলে এই উত্তর আসবে ।
else {
  console.log("i will not success");
}

var isGraduated = true;
var salary = 5000;
// যদি এই দুইটি  কথার মধ্যে একটি কথা সত্যি হয় তাহলে এই উত্তর আসবে ।
if (isGraduated == true || salary < 9000) {
  console.log("you can win");
}
// যদি এই দুইটি  কথার মধ্যে কোন কথা সত্যি না হয় তাহলে এই উত্তর আসবে ।
else {
  console.log("you cannot win");
}

// *৩য় নিয়ম 
var isGraduated = true;
var salary = 5000;
var car = 1;
// যদি একসাথে তিনটি বিষয় সত্যি তাহলে এই লেখা আসবে ।
if ((isGraduated == false && salary > 5000) || car <= 0) {
  console.log("you can sine");
}
// যদি একসাথে তিনটি বিষয় সত্যি না হয় তাহলে এই লেখা আসবে ।
else {
  console.log("you cannot sine");
}

// *৪র্থ নিয়ম 
var money = 50;
var chicken = 35;
var tost = 45;
var cock = 40;
// এই নিয়মে যেকোন একটা শত ঠিক হলে বাকি শত গুলো আপ্লয় হয় না ।
if (chicken > money) {
  console.log("ami cicken khabo");
}
else if (tost < money) {
  console.log("ami tost khabo");
}
else if (cock > money) {
  console.log("ami cock khabo");
}

// *৫ম নিয়ম 
var math = true;
var geometry = true;
// এই নিয়মে আমরা চাইলে একটি if else এর ভিতরে আরেকটি if else বসাতে পারি ।
if (math == true) {
  if (math == true && geometry == true) {
    console.log("i will gainner")
  }
  else {
    //  আমরা এখানে চাইলে কিছু লিখতে পারি ।
  }
}
else {
  if (math == false && geometry == false) {
    console.log("i will not gainner")
  }
  else {
    //  আমরা এখানে চাইলে কিছু লিখতে পারি ।
  }
}

// speshal example of if else
var my_score = 85;
var tom_score = 66;
var jane_score = 95;
var peater_score = 56;
var jhone_score = 40;
if (80 <= []) {
  console.log("a grade")
}
else if (60 <= []) {
  console.log("b grde")
}
else if (50 <= []) {
  console.log("c grade")
}
else if (40 <= []) {
  console.log("d grade")
}
else if (39 <= []) {
  console.log("f grade")
}

const username = "alvi";
const userinput = "alvo";
if (username.toLocaleUpperCase == userinput.toLocaleUpperCase) {
  console.log(true);
}
else {
  console.log(false);
}











// ৪। javascript এ loop যেভাবে কাজ করে ।

// while loop বের করার একটা সাধারণ নিয়ম ।
var roastGiven = 0;
while (roastGiven < 7) {
  console.log('rost den , please !!');
  console.log(roastGiven);
  roastGiven++;
  // roastGiven = roastGiven + 1;
  // roastGiven += 1;
}

// for loop কে সংক্ষেপে লেখার নিয়ম ।
for (var roastGiven = 1; roastGiven <= 10; roastGiven++) {
  console.log(roastGiven);
}

// for loop কে আরোও সংক্ষেপে লেখার নিয়ম ।
for (var r = 5; r <= 15; r++) {
  console.log(r);
}

for (var r = 5; r <= 15; r = r + 2) {
  console.log(r);
}

for (var r = 5; r <= 15; r += 2) {
  console.log(r);
}

// while loop বিজোড় সংখ্যা  বের করার একটা সাধারণ নিয়ম ।
var roastGiven = 1;
while (roastGiven <= 10) {
  console.log(roastGiven);
  roastGiven = roastGiven + 2;
}

// while loop জোড় সংখ্যা  বের করার একটা সাধারণ নিয়ম ।
var roastGiven = 0;
while (roastGiven <= 10) {
  console.log(roastGiven);
  roastGiven = roastGiven + 2;
}

// for loop এর দেওয়া condition পুরন না করে যদি আমরা আমাদের for loop শেষ করততে চাই তাহলে এ ক্ষেত্রে for loop এর ব্যবহার ।
for (var i = 1; i <= 25; i++) {
  console.log(i);
  if (i >= 20) {
    break;
  }
}
console.log('alvi')

// continue
var numbers = [45, 34, 55, 67, 54, 34, 52, 50];
for (var i = 0; i < numbers.length; i++) {
  var numbers = numbers[i];
  if (numbers > 50) {
    continue;
  }
  console.log(numbers)
}

// while loop reverce way তে পরিচালনা করার ক্ষেত্রে while loop এর ব্যবহার ।
for (var num = 10; num >= 1; num--) {
  console.log(num);

}










// ৫। javascript এ function যেভাবে কাজ করে ।

// function চালু করার সাধারণ নিয়ম ।
function starting(money) {
  console.log('alvi al mahmud');
  console.log(money);
}
starting(100)

// function add করতে চাইলে সে ক্ষেত্রে function এর ব্যবহার ।
function starting(num1, num2) {
  console.log('going to add :', num1, num2);
}
starting(100, 200);

// function একধিক মান সেট করার নিয়ম ।
function sum(a, b, c, d, e) {
  console.log(a, b, c, d, e);
  var sum = a + b + c + d + e;
  console.log(sum);
}
sum(23, 34, 54, 35, 64);

// function এ কোন কিছু ফেরত পেতে গেলে সে ক্ষেত্রে return এর ব্যবহার ।
function add(alvi1, alvi2) {
  console.log(alvi1, alvi2);
  var sum = alvi1 + alvi2;
  return sum;
}
var total = add(10, 15);
console.log('total', total)

// good externalpe of return function
function egg(money) {
  var eggPrice = 10;
  var quantity = money / eggPrice;
  return quantity;
}
var totalEgg = egg(300);
console.log('totalEgg :', totalEgg);

// const এর ভিতরে একাধিক মান বের করার নিয়ম ।

const assigment1 = 55;
const assigment2 = 42;
const assigment3 = 56;
function getAvarage
  (assigment1, assigment2, assigment3) {
  const total = assigment1 + assigment2 + assigment3;
  const getAvarage = total / 3;
  return getAvarage;
}
const totalAvarage = getAvarage(assigment1, assigment2, assigment3);
console.log(totalAvarage);


function add(num1, num2) {
  var sum = num1 + num2;
  return sum;
}
result1 = add(12, 14);
result2 = add(34, 43);
const finalresult = add(result1, result2);
console.log(finalresult);

// importent function example.
function inchTofeet(inches) {
  const feet = inches / 12;
  return feet;
}
var dadaInches = 144;
var dadafeet = inchTofeet(dadaInches);
console.log(dadafeet);

var dadiInches = 144;
var dadifeet = inchTofeet(dadiInches);
console.log(dadifeet);

function milestone(kilometer) {
  var lenght = kilometer * 1.60934;
  return lenght;
}
const mykilometer = 5;
const mymilestone = milestone(mykilometer);
console.log(mymilestone);

const herkilometer = 5;
const hermilestone = milestone(herkilometer);
console.log(hermilestone);

function isEvnt(number) {
  const eventodd = number % 2;
  // console.log(eventodd);
  if (eventodd == 0) {
    console.log('this is a event nunber =', number);
  }
  else {
    console.log('this is a odd numberc =', number);
  }
}
isEvnt(44);

function lepyear(year) {
  const YearCount = year % 4;
  if (YearCount == 0) {
    console.log("this is a leap year =", year);
  }
  else {
    console.log("this is just a normal year =", year)
  }
}
lepyear(2022);

const mynumbers = [5, 65, 45, 78, 32, 45, 91];
function getsumofanarray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[i];
    sum = sum + element;
    console.log(index, element, sum);
  }
  return sum;
}
getsumofanarray(mynumbers);

// find eventodd :even
const MyNumbers = [24, 56, 78, 45, 73, 39];
function getevenNumbersofAnArray(numbers) {
  const evennumder = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[i];
    if (element % 2 === 0) {
      console.log(index, element);
      evennumder.push(element);
    }
  }
  return evennumder;
}
// let evenumber = getevenofanarray(evenumber);
getevenNumbersofAnArray(MyNumbers);


// find eventodd :odd
const my_numbers = [24, 56, 77, 45, 78, 99];
function getOddNumbersofAnArray(numbers) {
  const oddnumber = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[i];
    if (element % 2 !== 0) {
      console.log(index, element);
      oddnumber.push(element);
    }
  }
  return oddnumber
}
// let oddnumder = getoddnumbersofarray (oddnumder)
getOddNumbersofAnArray(my_numbers);

// string and revece string
function reversestring1(text1) {
  for (a=0; a< text1.length; a++) {
    const element1 = text1[a];
    console.log(element1);
  }
}
const myString1 = 'i am a good boy';
const reverce1 = reversestring1(myString1);

// function reversestring2(text2) {
//   for (i = text2.length-1; i >= 0; i--) {
//     const element2 = text2[i];
//     console.log(element2);
//   }
// }
// const myString2 = 'i am a good boy';
// const reverce2 = reversestring2(myString2);

// calculate sum of numbers using recursion
function sum(i){
  if(i==1){
    return 1;
  }
  return i + sum(i-1);
}
const result=5;
console.log(result);


















// ৬। javascript এ objecct যেভাবে কাজ করে ।

// সাধারনত objecct যেভাবে লিখে ।
var student = {
  id: 66242,
  name: 'alvi al mahmud',
  class: 9,
  marks: 95,
}

// object এর মান পরিবতিন করার নিয়ম ।
student.class = 10;
console.log(student);

// object এর কোন speacfick মান দেখেতে চাইলে সে ক্ষেত্রে object এর ব্যবহার ।
console.log(student.name)

// object এর কোন propaty এর নাম Array আকারে পেতে চাইলে , সে ক্ষেত্রে object এর ব্যবহার ।
var proparts = Object.keys(student);
console.log(proparts);

// Array আকারে পেতে চাইলে , সে ক্ষেত্রে object এর ব্যবহার ।
var proparty = Object.values(student);
console.log(proparty);

// Object এ for loop এর ব্যবহার ।

var shoppingcart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
  shoes: 2,
  bottle: 1,
}

// long term
var keys = Object.keys(shoppingcart);
console.log(keys);

var values = Object.values(shoppingcart);
console.log(values);

for (i = 0; i < keys.length; i++) {
  var propartyName = keys[i];
  var propatyValue = values[i];
  console.log(propartyName, propatyValue);
}

// short term
var shoppingcart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
  shoes: 2,
  bottle: 1,
}

for (var propartyName in shoppingcart) {
  const values = shoppingcart[propartyName];
  console.log(propartyName, values);
}

var Array = ['alvi :', 54, 'apu :', 45];
console.log(Array);

var shoppingcart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
  shoes: 2,
  bottle: 1,
}
console.log(shoppingcart);

// loop কে সংক্ষেপে লিখেতে গেলে সে ক্ষেত্রে নিচের নিয়ম লিখেতে হবে ।
const color = ' ';
switch (color) {
  case 'green':
    console.log('you are green my friend');
    break
  case 'blue':
    console.log('you are blue my friend');
    break
  case 'white':
    console.log('you are white my friend');
    break
  case 'red':
    console.log('you are red my friend');
    break
  case 'yellow':
    console.log('you are yellow my friend');
    break
  default:
    console.log('you are my black black friend');
}

                                    //length