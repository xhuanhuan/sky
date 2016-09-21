var c=document.getElementById("myCanvas");  
var ctx=c.getContext("2d"); 

var x=[],y=[],r=[];
for (i=1;i<=200;i++){
	x[i]=Math.random()*500+5;
	y[i]=Math.random()*600+5;
	r[i]=Math.random();
	ctx.beginPath();
	ctx.arc(x[i], y[i], r[i], 0, 2 * Math.PI);
	ctx.closePath();
	ctx.fillStyle = 'white';
    ctx.fill();
	
}


setInterval('blink()',1000);

function blink(){
	ctx.clearRect(0,0,500,600);
	
	var radial = ctx.createRadialGradient(80,60,30,80,60,50); //重合的圆心坐标 
    radial.addColorStop(0,'white'); 
    radial.addColorStop(0.8,'black'); 
    ctx.fillStyle=radial;
    ctx.fillRect(0,0,200,200);
	
	var flag=[];
	for(i=1;i<=200;i++){
		flag[i]=Math.random();
	
	  if (flag[i]>0.5){
		r[i]=r[i]+0.2;
		if (r[i]>0.8)
			r[i]=0.8;
	   }
	  else{
		r[i]=r[i]-0.2;
		if(r[i]<0)
			r[i]=0.1;
	  }
    }
	for (i=1;i<=200;i++){
	ctx.beginPath();
	ctx.arc(x[i], y[i], r[i], 0, 2 * Math.PI);
	ctx.closePath();
	ctx.fillStyle = 'white';
    ctx.fill();
	}
	
}


/*export default class Stars {
    constructor(ctx, width, height, amount) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
		ctx.fillStyle = 'white';
		 ctx.beginPath();
        this.stars = this.getStars(amount)
    }

    getStars(amount) {
        let stars = []
        while (amount--) {
            stars.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                r: Math.random() + 0.2
            })
        }
        return stars
    }

    draw() {
        let ctx = this.ctx
        ctx.save()
        ctx.fillStyle = 'white'
        this.stars.forEach(star=> {
            ctx.beginPath()
            ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI)
            ctx.fill()
        })
        ctx.restore()
    }

    //闪烁，星星半径每隔10帧随机变大或变小
    blink() {
        this.stars = this.stars.map(star=> {
            let sign = Math.random() > 0.5 ? 1 : -1
            star.r += sign * 0.2
            if (star.r < 0) {
                star.r = -star.r
            } else if (star.r > 1) {
                star.r -= 0.2
            }
            return star
        })

    }
}*/