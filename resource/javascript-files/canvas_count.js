const canvas_count = document.getElementById('canvas_count');
const ctx_count = canvas_count.getContext('2d');

//sprite sheet array
var spritesheet = 
{
	"frames": [
		{
			"filename": "0.png",
			"frame": {
				"x": 1,
				"y": 1,
				"w": 83,
				"h": 144
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 83,
				"h": 144
			},
			"sourceSize": {
				"w": 83,
				"h": 144
			}
		},
		{
			"filename": "1.png",
			"frame": {
				"x": 86,
				"y": 1,
				"w": 55,
				"h": 141
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 55,
				"h": 141
			},
			"sourceSize": {
				"w": 55,
				"h": 141
			}
		},
		{
			"filename": "2.png",
			"frame": {
				"x": 143,
				"y": 1,
				"w": 81,
				"h": 142
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 81,
				"h": 142
			},
			"sourceSize": {
				"w": 81,
				"h": 142
			}
		},
		{
			"filename": "3.png",
			"frame": {
				"x": 226,
				"y": 1,
				"w": 77,
				"h": 143
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 77,
				"h": 143
			},
			"sourceSize": {
				"w": 77,
				"h": 143
			}
		},
		{
			"filename": "4.png",
			"frame": {
				"x": 305,
				"y": 1,
				"w": 82,
				"h": 141
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 82,
				"h": 141
			},
			"sourceSize": {
				"w": 82,
				"h": 141
			}
		},
		{
			"filename": "5.png",
			"frame": {
				"x": 389,
				"y": 1,
				"w": 79,
				"h": 143
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 79,
				"h": 143
			},
			"sourceSize": {
				"w": 79,
				"h": 143
			}
		},
		{
			"filename": "6.png",
			"frame": {
				"x": 470,
				"y": 1,
				"w": 80,
				"h": 141
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 80,
				"h": 141
			},
			"sourceSize": {
				"w": 80,
				"h": 141
			}
		},
		{
			"filename": "7.png",
			"frame": {
				"x": 552,
				"y": 1,
				"w": 80,
				"h": 140
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 80,
				"h": 140
			},
			"sourceSize": {
				"w": 80,
				"h": 140
			}
		},
		{
			"filename": "8.png",
			"frame": {
				"x": 634,
				"y": 1,
				"w": 80,
				"h": 142
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 80,
				"h": 142
			},
			"sourceSize": {
				"w": 80,
				"h": 142
			}
		},
		{
			"filename": "9.png",
			"frame": {
				"x": 716,
				"y": 1,
				"w": 80,
				"h": 144
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 80,
				"h": 144
			},
			"sourceSize": {
				"w": 80,
				"h": 144
			}
		},
		{
			"filename": "blank.png",
			"frame": {
				"x": 798,
				"y": 1,
				"w": 83,
				"h": 144
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 83,
				"h": 144
			},
			"sourceSize": {
				"w": 83,
				"h": 144
			}
		}
	],
	"meta": {
		"app": "http://www.codeandweb.com/texturepacker",
		"version": "1.0",
		"image": "spritesheet.png",
		"format": "RGBA8888",
		"size": {
			"w": 882,
			"h": 146
		},
		"scale": "1"
	}
}
let img = new Image();
img.src = './resource/spritesheet.png';



/*Function drawFrame
	Reads from a JSON array and finds specific x and y coordinates on a sprite sheet.
	Arguments:
	i = index of animination loop*/
function drawFrame(i){
  ctx_count.drawImage(img, spritesheet.frames[i].frame.x,
      spritesheet.frames[i].frame.y,
      spritesheet.frames[i].frame.w,
      spritesheet.frames[i].frame.h, 55, 0,
      spritesheet.frames[i].sourceSize.w,
      spritesheet.frames[i].sourceSize.h);
}

/*Special Function drawFrameDouble
	Reads from a JSON array and finds the specific x and y coordinates on a sprite sheet. This particular function displays the Tens place of the number then displays the Ones

		Arguments:
		tens = tens place of a number
		num = ones place of a number


	*/
function drawFrameDouble(ten, num){
  ctx_count.drawImage(img, spritesheet.frames[ten].frame.x,
		spritesheet.frames[ten].frame.y,
		spritesheet.frames[ten].frame.w,
		spritesheet.frames[ten].frame.h, 30, 0,
		spritesheet.frames[ten].sourceSize.w,
		spritesheet.frames[ten].sourceSize.h);

	ctx_count.drawImage(img, spritesheet.frames[num].frame.x,
			spritesheet.frames[num].frame.y,
			spritesheet.frames[num].frame.w,
			spritesheet.frames[num].frame.h, 80, 0,
			spritesheet.frames[num].sourceSize.w,
			spritesheet.frames[num].sourceSize.h);
}
//Gets button ID and sets an onClick event.
const button = document.getElementById('startButton');
button.onclick = function() {
	step();
	button.disabled = "disabled";
};

const cycleLoop = [0,1,2,3,4,5,6,7,8,9,10];
let currentLoopIndex = 0;
let delay = 500;//delay determines the time between calling the next frame

/*Special Function step()
This function contains the animation loop.
*Recursive function 
*/
function step() {

	if (currentLoopIndex > cycleLoop.length - 1) {
		return;//Stops the loop
	}
	else if(currentLoopIndex >= 10)
	{
		ctx_count.clearRect(0, 0, canvas_count.width, canvas_count.height);
		drawFrameDouble(1,0);
	}
	else
	{
		ctx_count.clearRect(0, 0, canvas_count.width, canvas_count.height);
		drawFrame(cycleLoop[currentLoopIndex]);
	}
	currentLoopIndex++;
	setTimeout(step, delay);
}

