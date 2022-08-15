// alert("Hello! I am an alert box!!");

// ১ । javascript এ কোন Element এর class কে পেতে চাইলে সে ক্ষেত্রে এই code টি লিখেতে হবে ।
// const Elementsclass =document.getElementsByClassName('alvi');
//   for(const alvi of Elementsclass){
//     console.log(alvi.innerText);
//   }

// ৩ । javascript এ কোন tag , id , class যদি আমরা তাড়াতাড়ি পেতে চাই তবে সে ক্ষেত্রে quarryselector code ব্যবহার করতে হবে (quarryselector সাধারনত দুই ধরনের হয়ে থাকে ঃ ১। quarrySelector 2। querySelectorAll))।
const quarryselector = document.querySelectorAll('.alvi');
console.log(quarryselector);
for(const alvi of quarryselector){
  console.log(alvi);
}

const seci = document.querySelectorAll('section');
for(mi of seci){
  seci.style.backgroundColor='red';
  seci.style.color='yellow';
}

// ৪ । javascript এ কোন class বা id এর element পরিবতিন করতে চাইলে , সে ক্ষেত্রে এই code টী লিখেতে হবে ।
const sec3 = document.getElementsByClassName('sec');
const li = document.createElement('li')
li.innerText='al mahamud'
// sec3.appendChild(up)

// ৩ । কোন button এ click করে যদি কোন কিছু পরিবতিন করেতে হয় , তাহলে সে ক্ষেত্রে নিচের এই code টি লিখেতে হবে । 
function MakeRed(){
  document.body.style.backgroundColor='red';
}