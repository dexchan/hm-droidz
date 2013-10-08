$(document).ready(function(){
  // Game State
  var game_state;
  var click;

  // Initializes game:
  //   - Renders all initial renderings
  //   - Sets all initial scores to start values.
  //   - Relaunches the game loop.
  function Init()
  {
    // Graphics.
    draw_everything();
    
    // Initialize.
    game_state = {counter: 0,
                  events: 0,
                  difficulty: 0,
                  robots: 0,
                  budget: 100};

    // TODO: We actually want to react on-click rather than storing it.
    click = {x:-1, y:-1};
  

    // Main loop.
    if(typeof game_loop != "undefined") clearInterval(game_loop);
    game_loop = setInterval(play, 100);
  }

  Init();

  // Runs the rest of the game, runs on loop.
  //    - Changes Game State.
  //    - Creates events.
  //    - Deals with event consequences.
  //    - Restarts game if needed.
  function play()
  {
    // Increment game counter.
    game_state.counter++;

    // Maybe generate new events based on game state.
    maybe_generate_events(game_state);

    // Reset canvas.
    redraw_canvas();

    // Run events.
    run_events(game_state, click);
  }

  // Intercept mouse clicks.
  $(document).click(function(e){
        coordX = e.clientX;
        coordY = e.clientY;
        fun = 0;
  })

})
