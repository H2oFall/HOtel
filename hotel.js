
/*function adder(){
        var x = document.getElementById('userName').value;
        document.getElementById('userName').value = "";
        var li = document.createElement('li');
        var newText = document.createTextNode(x);
        li.appendChild(newText);
        var olTag = document.getElementsByTagName('ol')[0];
        olTag.appendChild(li);
      }*/
      

      
function adder() {
  for (i=1; i <= 4; i++) {
    if (isFilled("div"+i) === false) {
      fill("div"+i);
      break;
    }
  }
}
function isFilled(boi) {
  if (document.getElementById(boi).innerHTML === "") {
    return false;
  } else {
    true;
  }
}
function fill(boi) {
  //boi is element
  //boi2 is what to put
  
  document.getElementById(boi).innerHTML = document.getElementById("userName").value;
}
function snap(person) {
  document.getElementById("div"+person).innerHTML = "";
}


function adds() {
  for (i=1; i <= 4; i++) {
    if (isFille("dip"+i) === false) {
      fille("dip"+i);
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
  
  document.getElementById(boy).innerHTML = document.getElementById("userNam").value;
}
function snaps(persons) {
  document.getElementById("dip"+persons).innerHTML = "";
}


function addsss() {
  for (i=1; i <= 4; i++) {
    if (isFill("dis"+i) === false) {
      filled("dis"+i);
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
  
  document.getElementById(boyoy).innerHTML = document.getElementById("userN").value;
}
function snapsps(personsan) {
  document.getElementById("dis"+personsan).innerHTML = "";
}


function addss() {
  for (i=1; i <= 4; i++) {
    if (isFill("did"+i) === false) {
      filled("did"+i);
      break;
    }
  }
}
function isFill(boyo) {
  if (document.getElementById(boyo).innerHTML === "") {
    return false;
  } else {
    true;
  }
}
function filled(boyo) {
  //boi is element
  //boi2 is what to put
  
  document.getElementById(boyo).innerHTML = document.getElementById("userNa").value;
}
function snapsp(personsa) {
  document.getElementById("did"+personsa).innerHTML = "";
}


function addssss() {
  for (i=1; i <= 4; i++) {
    if (isFill("dil"+i) === false) {
      filled("dil"+i);
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
  
  document.getElementById(boyoyo).innerHTML = document.getElementById("user").value;
}
function snapsps(personsans) {
  document.getElementById("dil"+personsans).innerHTML = "";
}

