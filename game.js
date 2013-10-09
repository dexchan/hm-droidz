$(document).ready(function(){
  // Game State
  var game_state;
  var click;
  var robots;
  var selected_robot;

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
 
    // TODO{We are back to the question of hash maps}
    robots = {robot1: {level: 1, num: 0},
              robot2: {level: 2, num: 0},
              robot3: {level: 3, num: 0},
              robot4: {level: 4, num: 0}};

    selected_robot = "robot1";

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

    // Do not actually do this. Testing only.
    maybe_buy_robot("robot1", game_state, robots);
  }

  // Intercept mouse clicks.
  $(document).click(function(e){
        click.x = e.clientX;
        click.y = e.clientY;
        var robot = get_robot_stats(selected_robot);
        game_state.budget = game_state.budget - robot.cost;
        var send_robot = {level : robot.level, dead: false};
        check_event_clicks(click, send_robot);
        if (send_robot.dead) {
          // TODO:decrement robot number for this robot;
        }
  })

})
