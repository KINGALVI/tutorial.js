// javascript এর code কাজ করছে নাকি তা পরিক্ষা করা যায 
console.log(5);

// ১ । javascript এ var এর ব্যবহার ।

// সংখ্যা ক্ষেত্রে var এর ব্যবহার ।
var age=2;
console.log(age);

// নাম এর ক্ষেত্রে var এর ব্যবহার ।
var name = "alvi";
var country_name = 'BANGLADESH';
console.log(country_name,name);

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

// ২ । javascript এ Array এর ব্যবহার ।

// সংখ্যা ক্ষেত্রে Array এর ব্যবহার ।
var age = [11 , 12 , 13 , 14 , 15 ] ;
console.log ( age ) ;

// Array এর ভিতরে কত গুলো সংখ্যা আছে সেটা বের করার ক্ষেত্রে Array এর ব্যবহার ।
// var age = [11 , 12 , 13 , 14 , 15 ] ;
// console.log ( age.lenght ) ;

// নাম এর ক্ষেত্রে Array এর ব্যবহার ।
var name = [ 'alvi' , "abusle" , "ahosan" , "arghya" , 'apu' ] ;
console.log ( name ) ;

// Array এর ভিতরে কত গুলো শব্দ আছে সেটা বের করার ক্ষেত্রে Array এর ব্যবহার ।
// var name = [ 'alvi' , "abusle" , "ahosan" , "arghya" , 'apu' ] ;
// console.log ( name.lenght ) ;