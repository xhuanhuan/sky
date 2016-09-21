var c=document.getElementById("myCanvas");  
var ctx=c.getContext("2d");  

function drawmoon(){
var radial = ctx.createRadialGradient(100,100,30,100,100,60); //重合的圆心坐标 
radial.addColorStop(0,'white'); 
radial.addColorStop(1,'rgba(0,0,0,0)'); 
ctx.fillStyle=radial;
ctx.fillRect(0,0,200,200);
}





