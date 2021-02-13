const canvas= document.getElementById('canvas');
const ctx = canvas.getContext('2d');


//ground
ctx.fillStyle = 'brown';
ctx.fillRect(0, 500, 800, 100);

//grass
ctx.fillStyle = 'green';
ctx.fillRect(0, 500, 800, 25);

//sun
ctx.beginPath();
ctx.arc(700, 100, 75, 0, Math.PI*2);
ctx.fillStyle = 'yellow';
ctx.fill();

//clouds
ctx.beginPath();
ctx.arc(200, 100, 50, 0, Math.PI*2);
ctx.fillStyle = 'white';
ctx.fill();
ctx.beginPath();
ctx.arc(250, 95, 55, 0, Math.PI*2);
ctx.fillStyle = 'white';
ctx.fill();
ctx.beginPath();
ctx.arc(300, 100, 50, 0, Math.PI*2);
ctx.fillStyle = 'white';
ctx.fill();



//mountain
ctx.beginPath();
ctx.moveTo(600, 500);
ctx.lineTo(300,300);
ctx.lineTo(200,500);
ctx.fillStyle = 'gray';
ctx.fill();

//house
ctx.fillStyle = 'blue';
ctx.fillRect(350, 400, 100, 100);
//roof
ctx.beginPath();
ctx.moveTo(350,400);
ctx.lineTo(400,350);
ctx.lineTo(450,400);
ctx.fillStyle = 'red';
ctx.fill();

//windows
ctx.fillStyle = 'lightblue';
ctx.fillRect(360,435,20,20);
ctx.fillRect(420,435,20,20);

//door
ctx.fillStyle = 'black';
ctx.fillRect(388, 460, 25, 40);

//words
ctx.font = '25px Century Gothic'
ctx.fillStyle='black';
ctx.fillText('Pain is relative!', 325, 300);
