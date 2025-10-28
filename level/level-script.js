var url = window.location.pathname;
url = url.substring(url.lastIndexOf('/') + 1);
url = url.substring(0,url.lastIndexOf('.'));
url++;
let nowlevel=parseInt(url)-1;
let boxnumber;
function nextlevel() {
    var nextandnull=document.getElementsByTagName('body')[0];
    nextandnull.innerHTML='<h1>看啥看,下一关去!</h1>';
    window.location.href='./'+url+'.html';
}
function setdeletebox() {
    var divlist=new Array();
    divlist=document.getElementsByTagName('div');
    boxnumber=divlist.length;
    for(let i=0;i<divlist.length;i++){
        var now=divlist[i];
        now.onclick=function (){
            if(now.id>0){
                now.id--;
                if(now.id<=0){
                    console.log(i);
                    now.innerHTML='';
                    document.getElementById('0').remove();
                    boxnumber--;
                    if(boxnumber===0) nextlevel();
                }
            }
        }
    }
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
if(nowlevel===2){
    let id='1';
    let timer = setInterval(function() {
        move(1,1,id);
    }, 10);
}