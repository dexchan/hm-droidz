// TODO: We get nothing from storing events in an array. Use a hashmap or /something/.

// Keeps track of active events.
var event_array = [];

// Generates new events.
function maybe_generate_events(game_state) {
  maybe_generate_new_events(game_state, event_array) 
}

// Loops through the events to progress & end them.
// We might want this to be more efficient.
function run_events(game_state) {
  var done = [];
  for (var i = 0; i < event_array.length; i++) {
     var event = event_array[i];
     progress_event(event);
     if (event.duration > 0) {
       draw_event(event);
     } else {
       done.push(i);
     }
  }
  for (var i = 0; i< done.length; i++) {
     var d = done[i] - i;
     var event = event_array[d];
     end_event(event, game_state);
     event_array.splice(d, 1);
  }
}

// The ~radius to center of event that counts as clicking the event.
var event_dimensions = 25;

// On a mouse click, check if any of the events have been clicked.
function check_event_clicks(click) {
  for (var i = 0; i < event_array.length; i++) {
    var event = event_array[i];
    var yd = click.y - event.y;
    var xd = click.x - event.x;
    if ((yd < event_dimensions) && (xd < event_dimensions)) {
     if ((yd > (0-event_dimensions)) && (xd > (0-event_dimensions))) {
      click_event(event);
     }
    }
  }
}

// Something robot.
function maybe_buy_robot(name, game_state, robots) {
  var robot = get_robot_stats(name);
  if (robot.price < game_state.budget) {
     game_state.budget = game_state.budget - robot.price;
    // robots[name].num++;
  }
}
