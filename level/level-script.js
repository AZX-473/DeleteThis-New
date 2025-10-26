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
if(url===3){
    let id='moved';
    let timer = setInterval(function() {
        move(1,1,id);
    }, 10);
}