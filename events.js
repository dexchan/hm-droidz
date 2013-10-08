/* This is the event library.
 * Going to simulate some OOP up in here. */

// Coordinate boundaries of acceptable events.
var min_x = 30;
var max_x = 800;
var min_y = 30;
var max_y = 400;

/** BASE EVENT **/
// Returns a new and most generic event.
function create_base_event(counter) {
   var x_bonus = Math.round(Math.random()*(max_x - min_x));
   var y_bonus = Math.round(Math.random()*(max_y - min_y));

   return {x: min_x + x_bonus,
           y: min_y + y_bonus,
           duration: 50,
           difficulty: 1,
           reward: 5,
           type: "base",
           diffuse: false};
}

// Base event:
//   If the robot is more than the event, it is over.
//   If the robot is less than the event, no more robot.
function click_base_event(event, robot) {
  if (robot.level > event.difficulty) {
    event.diffuse = true;
    event.duration = 10; // Duration of a diffused event is how long it takes to fix.
  } else {
    robot.dead = true; // Might be too harsh!
  }   
}

// Progress base event by whittling down timer.
function progress_base_event(event) {
  event.duration--;
}

// Ends the event.
function end_base_event(event, game_state) {
  if (event.diffuse) {
    game_state.budget = game_state.budget + event.reward;
  } else {
    game_state.budget = game_state.budget - event.reward;
  }    
}

/***********************************/

/* Incremental Event: Gets worse. */

// Returns an 'incremental' event.
function create_incremental_event(counter) {
  var event = create_base_event(counter);
  event.type = "inc";
  return event;
}

// Every time you fail, it gets worse.
function click_incremental_event(event, robot) {
  var old_diff = event.difficulty;
  event.difficulty = Math.round(event.difficulty);
  click_base_event(event, robot);
  if (robot.dead) {
    event.difficulty = old_diff + 0.2;
  }   
}

// When you do nothing, it gets worse.
function progress_incremental_event(event) {
  event.difficulty = event.difficulty + 0.1;
  progress_base_event(event);
}

/***********************************/
