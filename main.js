
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "blue"; 
ctx.beginPath();
ctx.strokeStyle ="red";
ctx.lineWidth = 1;
//ctx.rect("150", "143", "430", "200");
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="blue";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40 , 0, 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    //taking color from input box
    //additional activity start
    color = document.getElementById("color").value;
    console.log(color);
    //addition activity ends
    
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
       

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x , mouse_y);    

    
}

//function circle(mouse_x , mouse_y)
function circle(mouse_x , mouse_y)
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(mouse_x, mouse_y, 40 , 0, 2*Math.PI);
ctx.stroke();
}



//additional activity

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

	
