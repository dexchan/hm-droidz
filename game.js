$(document).ready(function(){
  // Game State
  var game_state;
  var click;
  var robots;

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
                  robots_total: 0,
                  budget: 100};

    robots = {robot1 : 0,
              robot2: 0,
              robot3: 0,
              robot4: 0};

    // There is very little reason for this to be a global variable.
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

    // Maybe generate new events based on game state.
    maybe_generate_events(game_state);

    // Reset canvas.
    redraw_canvas();

    // Run events.
    run_events(game_state);

    // Increment game state as needed.
    game_state.counter++;
    
  }

  // Intercept mouse clicks.
  $(document).click(function(e){
        click.x = e.clientX;
        click.y = e.clientY;
        check_event_clicks(click);
  })

})
