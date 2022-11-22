function pageload(){
  document.getElementById('load').style.display="none";
  document.getElementById('container').style.visibility="visible";
}

var piano = document.getElementById('piano');
var scary = document.getElementById('scary');

function btnclick(){
  if (confirm("Make sure your phone volume is full") == true)
  {}
  else{
    location.refresh();
  }
  document.getElementById('btn').style.display="none";
  document.getElementById('img-box').style.display="block";
  piano.play();
  setTimeout(()=>{
    piano.pause();
    scary.play();
  },5000);
  setTimeout(()=>{
    document.getElementById('ghost').style.display="block";
  },5500);
}