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

// var এর ক্ষেত্রে কোন মান ছোট কিনবা বড় কিনা সেটা বের করার নিয়ম ।
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










// ৪। javascript এ function যেভাবে কাজ করে ।

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
function add (alvi1 , alvi2) {
  console.log(alvi1 , alvi2);
  var sum = alvi1 + alvi2;
  return sum;
}
var total = add(10 , 15);
console.log('total',total)

// good externalpe of return function
function egg(money){
  var eggPrice = 10;
  var quantity = money / eggPrice;
  return quantity;
}
var totalEgg = egg(300);
console.log('totalEgg :', totalEgg);