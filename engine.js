// TODO: I wonder if if is more efficient to store it as a dictionary by end date. Probably!
// TODO: Actually, maybe the most efficient thing to do is learn how to intercept events and cause events.
// TODO: Uhm. Hacking together a prototype for now. 

var event_array = [];

var canvas = $("#canvas")[0];
var ctx = canvas.getContext("2d");
var width = 800;

function redraw_canvas() {
  var img = document.getElementById("canvas1");
  ctx.drawImage(img, 0, 0);
}

function create_event(fun) {
  event_array.push({x: Math.round(Math.random()*width),
                   y: Math.round(Math.random()*width),
                   duration: 10+ Math.round(Math.random()*20),
                   start: fun,
                   click: false});
  console.log("Something happens");
}

function draw_event(event) {
  ctx.strokeStyle = "red";
  ctx.lineWidth = 4;
  ctx.strokeRect(event.x-25, event.y-25, 50, 50);
  ctx.strokeRect(event.x-10, event.y-10, 20, 20);
  if (event.click) {
    ctx.fillStyle = "black";
    ctx.fillRect(event.x-25, event.y-25, 50, 50);
  }
}

function click_event(event, x, y) {
  var yd = y - event.y;
  var xd = x - event.x;
  if ((yd < 25) && (xd < 25)) {
    if ((yd > -25) && (xd > -25)) {
      event.click = true;
    }
  }
}

function run_events(fun, x, y) {
  for (var i = 0; i < event_array.length; i++) {
     var event = event_array[i];
     event.duration--;
     if (event.duration == 0) {
       console.log("Something ends");
       event_array.splice(i, 1);
     } else {
       click_event(event, x, y);
       draw_event(event);
     }
  }
}
