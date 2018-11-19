function wibbly_wobbly_timey_wimey() {
  var time = new Date();
  var month = time.getMonth();
  var day = time.getDate();
  var year = time.getFullYear();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  return (time.getMonth()+"."+time.getDate()+"."+time.getFullYear()+" "+time.getHours()+":"+time.getMinutes());
}
function adder() {
  for (i=1; i <= 4; i++) {
    if (isFilled("div"+i) === false) {
      fill("div"+i);
      logger("checked "+document.getElementById('userName').value+" into room 1 "+ "at " + wibbly_wobbly_timey_wimey());
      document.getElementById('userName').value = "";
      break;
    }
  }
}
function isFilled(boi) {
  if (document.getElementById(boi).innerHTML === "") {
    return false;
  } else {
    return true;
  }
}
function fill(boi) {
  //boi is element
  //boi2 is what to put
  
  document.getElementById(boi).innerHTML = document.getElementById("userName").value + " " + wibbly_wobbly_timey_wimey();
}

function adds() {
  for (i=1; i <= 4; i++) {
    if (isFille("dip"+i) === false) {
      fille("dip"+i);
      logger("checked "+document.getElementById('userNam').value+" into room 2" + "at"+ wibbly_wobbly_timey_wimey());
      document.getElementById('userNam').value = "";
      break;
    }
  }
}
function isFille(boy) {
  if (document.getElementById(boy).innerHTML === "") {
    return false;
  } else {
    true;
  }
}
function fille(boy) {
  //boi is element
  //boi2 is what to put
  
  document.getElementById(boy).innerHTML = document.getElementById("userNam").value + " " + wibbly_wobbly_timey_wimey();
}
function addsss() {
  for (i=1; i <= 4; i++) {
    if (isFillet("dis"+i) === false) {
      fillet("dis"+i);
      logger("checked "+document.getElementById('userN').value+" into room 4 " + "at " + wibbly_wobbly_timey_wimey());
      document.getElementById('userN').value = "";
      break;
    }
  }
}
function isFillet(boyoy) {
  if (document.getElementById(boyoy).innerHTML === "") {
    return false;
  } else {
    true;
  }
}
function fillet(boyoy) {
  //boi is element
  //boi2 is what to put
  
  document.getElementById(boyoy).innerHTML = document.getElementById("userN").value + " " + wibbly_wobbly_timey_wimey();
}
function addss() {
  for (i=1; i <= 4; i++) {
    if (isFill("did"+i) === false) {
      filled("did"+i);
      logger("checked "+document.getElementById('userNa').value+" into room 3 " + "at " + wibbly_wobbly_timey_wimey());
      document.getElementById('userNa').value = "";
      break;
    }
  }
}
function isFill(boyo) {
  if (document.getElementById(boyo).innerHTML === "") {
    return false;
  } else {
    return true;
  }
}
function filled(boyo) {
  //boi is element
  //boi2 is what to put
  
  document.getElementById(boyo).innerHTML = document.getElementById("userNa").value + " " + wibbly_wobbly_timey_wimey();
}

function addssss() {
  for (i=1; i <= 4; i++) {
    if (isFillets("dil"+i) === false) {
      fillets("dil"+i);
      logger("checked "+document.getElementById('user').value+" into room 5 " + "at " + wibbly_wobbly_timey_wimey());
      document.getElementById('user').value = "";
      break;
    }
  }
}
function isFillets(boyoyo) {
  if (document.getElementById(boyoyo).innerHTML === "") {
    return false;
  } else {
    true;
  }
}
function fillets(boyoyo) {
  //boi is element
  //boi2 is what to put
  
  document.getElementById(boyoyo).innerHTML = document.getElementById("user").value + " " + wibbly_wobbly_timey_wimey();
}

function addsssss() {
  for (i=1; i <= 4; i++) {
    if (isFilletss("dii"+i) === false) {
      filletss("dii"+i);
      logger("checked "+document.getElementById('use').value+" into room 6 " + "at " + wibbly_wobbly_timey_wimey());
      document.getElementById('use').value = "";
      break;
    }
  }
}
function isFilletss(boyoyoy) {
  if (document.getElementById(boyoyoy).innerHTML === "") {
    return false;
  } else {
    true;
  }
}
function filletss(boyoyoy) {
  //boi is element
  //boi2 is what to put
  
  document.getElementById(boyoyoy).innerHTML = document.getElementById("use").value + " " + wibbly_wobbly_timey_wimey();
}
var num = 0;
function notallow() {
  switch (num++) {
    case 0:
       document.getElementById("userName").disabled = true;
        break;
    case 1:
        document.getElementById("userName").disabled = false;
        break;
}
if(num > 1){
  num = 0;
}
}
var num2 = 0;
function notallow2() {
  switch (num2++) {
    case 0:
       document.getElementById("userNam").disabled = true;
        break;
    case 1:
        document.getElementById("userNam").disabled = false;
        break;
}
if(num2 > 1){
  num2 = 0;
}
}
var num3 = 0;
function notallow3() {
  switch (num3++) {
    case 0:
       document.getElementById("userNa").disabled = true;
        break;
    case 1:
        document.getElementById("userNa").disabled = false;
        break;
}
if(num3 > 1){
  num3 = 0;
}
}

var num4 = 0;
function notallow4() {
  switch (num4++) {
    case 0:
       document.getElementById("userN").disabled = true;
        break;
    case 1:
        document.getElementById("userN").disabled = false;
        break;
}
if(num4 > 1){
  num4 = 0;
}
}

var num5 = 0;
function notallow5() {
  switch (num5++) {
    case 0:
       document.getElementById("user").disabled = true;
        break;
    case 1:
        document.getElementById("user").disabled = false;
        break;
}
if(num5 > 1){
  num5 = 0;
}
}

var num6 = 0;
function notallow6() {
  switch (num6++) {
    case 0:
       document.getElementById("use").disabled = true;
        break;
    case 1:
        document.getElementById("use").disabled = false;
        break;
}
if(num6 > 1){
  num6 = 0;
}
}
function logger(string) {
  //writes whatever string you want to the log
  var prefix = "";
  if (document.getElementById("everyguest").innerHTML !== "") {
    prefix = "<br>";
  }
  document.getElementById("everyguest").innerHTML = document.getElementById("everyguest").innerHTML+prefix+string;
}

  
  document.getElementById("everyguest").innerHTML = document.getElementById("everyguest").innerHTML+prefix+string;
}
ndom()*bgs.length);
       document.body.style.background = "url("+bgs[rand]+")";
       document.body.style.backgroundSize = "cover";
      }     }