canvas=document.getElementById("canvas1");
ctx=canvas.getContext("2d");
colour_of_canvas_pen="black";
ctx.beginPath();
 ctx.styleStroke=colour_of_canvas_pen;
ctx.lineWidth=5
ctx.arc(250,250,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    
    mousedown_x=e.clientX - canvas.offsetLeft;
    mousedown_y=e.clientY - canvas.offsetTop;
    circle(mousedown_x,mousedown_y);
    rectangle();
} 
function circle(mousedown_x,mousedown_y){
    ctx.beginPath();
    ctx.lineWidth=5
    ctx.styleStroke=colour_of_canvas_pen;
    ctx.arc(mousedown_x,mousedown_y,40,0,2*Math.PI);
    ctx.stroke();
}

function rectangle(){
    ctx.beginPath();
    ctx.lineWidth=5
    ctx.styleStroke=colour_of_canvas_pen;
    ctx.arc(150,143,430,200);
    ctx.stroke();
}

