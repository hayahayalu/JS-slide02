// JavaScript Document

window.onload = function (){
var Container=document.getElementById("container");
var Ul=document.getElementsByTagName("ul");
var Img=Container.getElementsByTagName("img");
var Num=Ul[1].getElementsByTagName("li");
var index = i = 0;
var confine = true;
var timer = play = null;

turnPic();
for(i=0;i<Num.length;i++){
	Num[i].index=i;
	Num[i].onmouseover=function(){
		index=this.index;
		turnPic();
		}
}
function turnPic(){
	for(i=0;i<Num.length;i++)
	    Num[i].className="";
		Num[index].className="current";
		distanceMove(-(index*Img[0].offsetHeight));
}
function order(){
	confine?index++:index--;
	index<=0&&(index=0,confine=true);
	index>Num.length-1&&(index=Num.length-1,confine=false);
	turnPic();
}

play = setInterval(order, 2000);

Container.onmouseover=function(){
     clearInterval(play);
	};
Container.onmouseout=function(){
    play=setInterval(order,2000);
	};
function distanceMove(distance){
	clearInterval(timer);
	timer = setInterval(function(){
	      doMove(distance)
		  }, 30)	
}
function doMove(distance){
	var Speed=(distance - Ul[0].offsetTop)/10;
	Speed = Speed > 0 ? Math.ceil(Speed) : Math.floor(Speed);
	Ul[0].offsetTop == distance ? clearInterval(timer) : Ul[0].style.top = Ul[0].offsetTop + Speed + "px";
}
};
