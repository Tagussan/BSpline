var canv,ctx;
var degree;
var pts = [[10,10],[100,100],[50,80],[200,150],[100,200],[300,100],[500,150]];
window.addEventListener("load",function(){
    canv = document.getElementById("canvas1");
    ctx = canv.getContext("2d");
    canv.addEventListener("mousedown",putpoint,false);
    redraw();
},true);

function drawSpline(){
    ctx.clearRect(0,0,canv.width,canv.height);
    if(pts.length == 0) {
        return;
    }
    for(var i = 0;i<pts.length;i++){
        ctx.fillStyle = "rgba(0,255,0,1)";
        ctx.beginPath();
        ctx.arc(pts[i][0],pts[i][1],5,0,Math.PI*2,false);
        ctx.fill();
        ctx.closePath();   
    }
    var spline = new BSpline(pts,degree,true);
    ctx.beginPath();
    var oldx,oldy,x,y;
    oldx = spline.calcAt(0)[0];
    oldy = spline.calcAt(0)[1];
    for(var t = 0;t <= 1;t+=0.001){
        ctx.moveTo(oldx,oldy);
        var interpol = spline.calcAt(t);
        x = interpol[0];
        y = interpol[1];
        ctx.lineTo(x,y);
        oldx = x;
        oldy = y;
    }
    ctx.stroke();
    ctx.closePath();
}

function putpoint(e){
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    pts.push([x,y]);
    drawSpline();
}

function redraw(){
    var degMenu = document.fm.degree;
    degree = Number(degMenu.options[degMenu.selectedIndex].value);
    drawSpline();
}

function ptsClear(){
    pts = [];
    drawSpline();
}