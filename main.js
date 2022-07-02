canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
 
mouseevent="";

var last_position_of_x,last_position_of_y;
color="orange";
var width_of_line=1;

canvas.addEventListener("mousedown",my_d);

function my_d(e) {
   mouseevent="mousedown"; 
}

canvas.addEventListener("mouseup",my_u);

function my_u(e) {
   mouseevent="mouseup"; 
}

canvas.addEventListener("mouseleave",my_l);

function my_l(e) {
   mouseevent="mouseleave"; 
}

canvas.addEventListener("mousemove",my_m);

function my_m(e) {
    current_position_of_x=e.clientX-canvas.offsetLeft;
    current_position_of_y=e.clientY-canvas.offsetTop;
    if (mouseevent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;

        console.log("last position of mouse x,last position of y =");
       console.log("x="+last_position_of_x+"y="+last_position_of_y);
       ctx.moveTo(last_position_of_x,last_position_of_y);  
    
       console.log("current position of mouse x,current position of y =");
       console.log("x="+current_position_of_x+"y="+current_position_of_y);
       ctx.lineTo(current_position_of_x,current_position_of_y);
       ctx.stroke();   
    }
   mouseevent="mousemove"; 

   last_position_of_x=current_position_of_x;
   last_position_of_y=current_position_of_y;
}