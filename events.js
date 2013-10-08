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
           type: "base",
           diffuse: false};
}

// Base event:
//   If the robot is more than the event, it is over.
//   If the robot is less than the event, no more robot.
function click_base_event(event, robot) {
  if (robot.level > event.difficulty) {
    event.diffuse = true;
  } else {
    robot.dead = true;
  }   
}

// Progress base event by whittling down timer.
function progress_base_event(event) {
  event.duration--;
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
