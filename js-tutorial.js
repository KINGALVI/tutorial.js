// alert("Hello! I am an alert box!!");


// ১ । javascript এ কোন HTML id কে পেতে চাইলে সে ক্ষেত্রে এই code টি লিখেতে হবে ।
const ElementId =document.getElementById('al');
  for(const al of ElementId){
    console.log(al.innerText);
  }

// ২ । javascript এ কোন Element এর class কে পেতে চাইলে সে ক্ষেত্রে এই code টি লিখেতে হবে ।
const Elementsclass =document.getElementsByClassName('al');
  for(const alvi of Elementsclass){
    console.log(alvi.innerText);
  }

// ৩ । javascript এ কোন tag , id , class যদি আমরা তাড়াতাড়ি পেতে চাই তবে সে ক্ষেত্রে quarryselector code ব্যবহার করতে হবে ।
const quarryselector = document.querySelectorAll('.alvi');
console.log(quarryselector);