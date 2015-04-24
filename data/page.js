addDataNums();

var first = true;
var el1;
var el2;

function highlighter(num, color){
  var list = document.getElementsByTagName("*");
  //console.log("num:" + num);
  for(var i = 0; i < list.length; i++){
    if(list[i].dataset.number == num){
      list[i].style.backgroundColor = color;
    }
  }
}

function followChain(parent, tagChain, classChain, k){
  if(k == 0){parent.style.backgroundColor = "lightgreen";}
  else {
    console.log(k + " : " + classChain[k-1]);
    for(var i = 0; i < parent.children.length; i++){
      console.log("found: " + parent.children[i].className);
      if(parent.children[i].className == classChain[k-1] && parent.children[i].tagName == tagChain[k-1]){
        console.log("going success!");
        followChain(parent.children[i], tagChain, classChain, k-1);
      }
    }
  }
}

function connectTargets(){
 if(first){return false;}
 console.log("connecting");
 //find first common parent
 var upsteps = 0;
 var classchain1 = [];
 var classchain2 = [];
 var tagchain1 = [];
 var tagchain2 = [];
 var cur1 = el1;
 var cur2 = el2;
 while(cur1 != cur2 && upsteps < 100 && cur1 != null && cur2 != null){
  classchain1.push(cur1.className);
  classchain2.push(cur2.className);
  tagchain1.push(cur1.tagName);
  tagchain2.push(cur2.tagName);
  upsteps++;
  cur1 = cur1.parentElement;
  cur2 = cur2.parentElement;
 }
console.log(cur1);
console.log(cur2);
console.log(classchain1); 
console.log(tagchain1);
 //retrace steps down to find all possible matches
followChain(cur1, tagchain1, classchain1, classchain1.length);
followChain(cur2, tagchain2, classchain2, classchain1.length);
}

function clickhandler(e){
if(first){
  first = false;
  el1 = e.target;
  highlighter(e.target.dataset.number, "red");
}
else { 
  if(e.target != el1 && e.target != el2){
    el2 = e.target;
    highlighter(e.target.dataset.number, "yellow");
    connectTargets();
  }
}
}

function addDataNums(){
  console.log("going");
  var list = document.getElementsByTagName("*");
  for(var i = 0; i < list.length; i++){
    list[i].dataset.number = i;
    list[i].addEventListener('click', clickhandler);
    //list[i].setAttribute("onclick", "clickHighlighter(" + i + ");" );
    //console.log(i + ": " + list[i].id);
  }
}