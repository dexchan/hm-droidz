$(document).ready(function(){
        var canvas = $("#canvas")[0];
        var ctx = canvas.getContext("2d");

        // Fun;
        var fun = 0;
        var coordX = -1;
        var coordY = -1; 

	function start_game()
	{

		// Main move loop.
		if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(score, 100);
	}

	start_game();
	function score()
	{

                var offset = 100;               

                // Count.               
                fun++;
                if (fun % 5 == 0) {
                  create_event(fun);
                } 
                redraw_canvas();
                run_events(fun, coordX, coordY);
                          
                // Display.
                /* var fun_text = "FUN: " + fun;
                ctx.fillStyle = "blue";
	        ctx.fillText(fun_text, 50, 50+offset);
                fun_text = "ClickX: " + coordX;
	        ctx.fillText(fun_text, 50, 50+offset+10);
                fun_text = "ClickY: " + coordY;
	        ctx.fillText(fun_text, 50, 50+offset+20); */

	}

	// Keyboard controls
	$(document).click(function(e){
              coordX = e.clientX;
              coordY = e.clientY;
              fun = 0;
	})

})
