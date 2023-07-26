//Random color change

var para=document.getElementsByClassName("para");
console.log(para);

var a=["red","green","black","yellow","pink","blue","purple","tomato"];

var number=(Math.floor(Math.random()*a.length));
console.log(number);

document.body.style.backgroundColor=a[number]