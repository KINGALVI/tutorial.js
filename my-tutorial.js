// alert("Hello! I am an alert box!!");

// ১ । javascript এ কোন Element এর class কে পেতে চাইলে সে ক্ষেত্রে এই code টি লিখেতে হবে ।
const Elementsclass =document.getElementsByClassName('alvi');
  for(const alvi of Elementsclass){
    console.log(alvi.innerText);
  }

// ৩ । javascript এ কোন tag , id , class যদি আমরা তাড়াতাড়ি পেতে চাই তবে সে ক্ষেত্রে quarryselector code ব্যবহার করতে হবে (quarryselector সাধারনত দুই ধরনের হয়ে থাকে ঃ ১। quarrySelector 2। querySelectorAll))।
const quarryselector = document.querySelectorAll('.alvi');
console.log(quarryselector);
for (const alvi of quarryselector) {
  console.log(alvi);
};

const seci = document.querySelectorAll('section');
for (mi of seci) {
  seci.style.backgroundColor = 'red';
  seci.style.color = 'yellow';
};

// ৪ । javascript এ কোন class বা id এর element পরিবতিন করতে চাইলে , সে ক্ষেত্রে এই code টী লিখেতে হবে ।
const sec3 = document.getElementsByClassName('sec');
const li = document.createElement('li')
li.innerText = 'al mahamud';
// sec3.appendChild(up)

// ৩ । কোন button এ click করে যদি কোন কিছু পরিবতিন করেতে হয় , তাহলে সে ক্ষেত্রে নিচের এই code টি লিখেতে হবে । 

// ১ম পদ্ধতি ।
function MakeRed() {
  document.body.style.backgroundColor = 'red';
};

// ২য় পদ্ধতি ।
const MakeBlueButton = document.getElementById('MakeBlue');
MakeBlueButton.onclick = MakeBlue;
function MakeBlue() {
  document.body.style.backgroundColor = 'blue';
};

// ৩য় পদ্ধতি ।
const MakeGreenButton = document.getElementById('MakeGreen');
MakeGreenButton.onclick = function MakeGreen() {
  document.body.style.backgroundColor = 'green';
};

// ৪থ পদ্ধতি । 
const MakePinkButton = document.getElementById('MakePink')
MakePinkButton.addEventListener('click',
  function MakePink() {
    document.body.style.backgroundColor = 'pink';
  });

// ৫ম পদ্ধতি ।
document.getElementById('MakeOrange').addEventListener('click', function MakeOrange() {
  document.body.style.backgroundColor = 'goldrod';
});

// কোন button এ ckick করে সেই button এর সাথে থাকা লেখা পরিবতিন করা যায় ।

// ১ম পদ্ধতি ।
function oneckicktext() {
  const textchange1 = document.getElementById('text')
  textchange1.innerText = 'my name is alvi'
};

// ২য় পদ্ধতি ।
document.getElementById('event-listener1').addEventListener('click', function () {
  const textchange2 = document.getElementById('text');
  textchange2.innerText = 'i want to de a good wed devoleper'
});

//  status update বানানোতে ব্যবহার করা হয় । 
document.getElementById('btnupdate').addEventListener('click', function () {
  const textupdate = document.getElementById('inputfield');
  const updatetext = textupdate.value;
  const p = document.getElementById('justupdatetext')
  p.innerText = updatetext;
});

//   commentdox update বানানোতে ব্যবহার করা হয় ।
document.getElementById('btn-post').addEventListener('click', function () {
  const commenbox = document.getElementById('new-comment');
  const newcomment = commenbox.value
  const commentcontainer = document.getElementById('comment-container');
  const p = document.createElement('p');
  p.innerText = newcomment;
  commentcontainer.appendChild(p);
  commenbox.value = '';
})

// mosue এর বিষয়ে আরোও আনেক evensts আছে । সেগুলো ব্যাখ্যা দেওয়া হল ।
// ১ম event
document.getElementById('btn-event1').addEventListener('mouseenter', function () {
  console.log('event1')
})

// ২য় event
document.getElementById('btn-event2').addEventListener('mousemove', function () {
  console.log('event2')
})

// class=  ৩য় event

// id = focus event
document.getElementById('text-area-event2').addEventListener('focus', function () {
  console.log('focus');
})

// id = blur event
document.getElementById('text-area-event2').addEventListener('blur', function () {
  console.log('blur');
})

// id = keydown event
document.getElementById('text-area-event2').addEventListener('keydown', function () {
  console.log('keydown');
})

// id = keyup event
document.getElementById('text-area-event2').addEventListener('keyup', function () {
  console.log('keyup')
})

// delete button wedsite এ apply করতে গেলে সে ক্ষেত্রে javascript এর ব্যবহার । 
document.getElementById('input-delete').addEventListener('keyup',function(event){
  const DeleteText =event.target.value;
  const DeleteButton = document.getElementById('btn-delete');
  if(DeleteText=="delete"){
    DeleteButton.removeAttribute('disabled');
  }
  else{
    DeleteButton.setAttribute('disabled',true);
  }
})
document.getElementById('btn-delete').addEventListener('click',function(){
  const DeleteText =document.getElementById('delete-text');
  DeleteText.style.display='none';
})