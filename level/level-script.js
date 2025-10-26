var url = window.location.pathname;
url = url.substring(url.lastIndexOf('/') + 1);
url = url.substring(0,url.lastIndexOf('.'));
url++;
function nextlevel() {
    window.location.href='./'+url+'.html';
}
var divlist=new Array();
divlist=document.getElementsByTagName('div');
for(let i=0;i<divlist.length;i++){
    var now=divlist[i];
    now.onclick=function (){
        if(i===0) nextlevel();
        now.innerHTML='';
    }
}
function moveto(x,y,id) {
    var temp=document.getElementById(id);
    temp.style.top = y+'px';
    temp.style.left = x+'px';
}
if(url===3){
    let x=0,y=0,id='moved';
    let timer = setInterval(function() {
        y+=100;
        y%=1080;
        moveto(x,y,id);
    }, 1000);
}