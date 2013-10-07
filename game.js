$(document).ready(function(){
        var canvas = $("#canvas")[0];
        var ctx = canvas.getContext("2d");

        // Fun;
        var fun = 0

	function start_game()
	{
		// Main move loop.
		if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(score, 100);
	}

	start_game();
	function score()
	{
                // Clear screen.
                ctx.fillStyle = "white";
	        ctx.fillRect(0,0, 100, 100); 
   
                // Count.               
                fun++;
          
                // Display.
                var fun_text = "FUN: " + fun;
                ctx.fillStyle = "blue";
	        ctx.fillText(fun_text, 50, 50);
	}

})
