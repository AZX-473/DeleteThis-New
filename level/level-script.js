var url = window.location.pathname;
url = url.substring(url.lastIndexOf('/') + 1);
url = url.substring(0,url.lastIndexOf('.'));
url++;
const refreshicon="./v&m&i/refresh.png";
//refresh icon
let nowlevel=parseInt(url)-1;
let boxnumber=0;
function nextlevel() {
    var nextandnull=document.getElementsByTagName('body')[0];
    nextandnull.innerHTML='<h1>看啥看,下一关去!</h1>';
    window.location.href='./'+url+'.html';
}
function refresh() {
    window.location.href='./'+nowlevel.toString()+'.html';
}
function addf1(itarge){
    console.log(itarge+'OK');
    itarge.id--;
    if(itarge.id<=0){
        boxnumber--;
        if(boxnumber<=0) nextlevel();
        itarge.innerHTML='';
        itarge.remove();
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const allDivs = document.querySelectorAll('div');
    allDivs.forEach(div => {
        div.addEventListener('click', function(event) {
            addf1(event.target);
        });
    });
    boxnumber=allDivs.length;
    console.log(`为 ${allDivs.length} 个 div 设置了 click 事件监听器。`);
});
function setdeletebox() {
    /*var divlist=[];
    divlist=document.getElementsByTagName('div');
    boxnumber=divlist.length;
    for(let i=0;i<divlist.length;i++){
        divlist[i].onclick=addf1(i);
    }*/
}
setdeletebox();

function move(x,y,id) {
    var temp=document.getElementById(id);
    let newu=parseInt(temp.style.marginTop)||0;
    let newl=parseInt(temp.style.marginLeft)||0;
    let newd=parseInt(temp.style.marginBottom)||0;
    let newr=parseInt(temp.style.marginRight)||0;
    if(newu+y<0){
        newd=newd+y;
    }else{
        newu=newu+y;
    }
    if(newl+x<0){
        newr=newr+x;
    }else{
        newl=newl+x;
    }
    temp.style.marginTop=newu+'px';
    temp.style.marginLeft=newl+'px';
    temp.style.marginBottom=newd+'px';
    temp.style.marginRight=newr+'px';
}
var bodycode=document.getElementsByTagName('body')[0];
bodycode.innerHTML='<img src="'+refreshicon+'" style="width: 50px;height: 50px;" onclick="refresh()" alt="刷新" </img>'+bodycode.innerHTML;