var c=document.getElementById("myCanvas");  
var ctx=c.getContext("2d");  
var radial = ctx.createRadialGradient(80,60,30,80,60,50); //重合的圆心坐标 
radial.addColorStop(0,'white'); 
radial.addColorStop(0.8,'black'); 
ctx.fillStyle=radial;
ctx.fillRect(0,0,160,120);