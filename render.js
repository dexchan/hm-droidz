
var canvas = $("#canvas")[0];
var ctx = canvas.getContext("2d");
var width = 800;
var ddepth = 25;
var bwidth = 25;

// This file is in charge of drawing the graphics, so the
// other ones don't have to.

// TODO: Can we load backgrounds separately from the rest?
// Initial call to draw canvas and all of the bars.
function draw_everything() {
       var ddepth = 25;
       var bwidth = 25;
       var display = document.getElementById("display");
       var bar = document.getElementById("robotbuy");

       ctx.drawImage(display, 0, 0);
       ctx.drawImage(bar, 0, ddepth);
       redraw_canvas();
}

// Refreshes the canvas. Called periodically to get rid of stale events.
// TODO: We could optimize this to only reload square tiles.
function redraw_canvas(x, y) {
  var img = document.getElementById("canvas1");
  ctx.drawImage(img, bwidth, ddepth);
}

// Draws the event bubble.
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

// Placeholder function. 
function print_text() {       
    // Display.
    /* var fun_text = "FUN: " + fun;
    ctx.fillStyle = "blue";
    ctx.fillText(fun_text, 50, 50+offset);
    fun_text = "ClickX: " + coordX;
    ctx.fillText(fun_text, 50, 50+offset+10);
    fun_text = "ClickY: " + coordY;
    ctx.fillText(fun_text, 50, 50+offset+20); */
}
