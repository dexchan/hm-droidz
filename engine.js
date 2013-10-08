// TODO: We get nothing from storing events in an array. Use a hashmap or /something/.

// Keeps track of active events.
var event_array = [];

/**** Event Control Functions ****/

// Maybe generates events based on game state.
// Increments relevant counters.
// Add creation functions to here.
function maybe_generate_events(game_state) {
  var counter = game_state.counter;
  if (counter % 5) {
     event_array.push(create_base_event(game_state.counter));
     game_state.events++;
  } else if ((counter % 7) && (counter > 30)) {
     event_array.push(create_incremental_event(game_state.counter));
     game_state.events++;
  }
}

// Clicks the event.
// Add on-click functions to here.
function click_event(event) {
  var robot = {level: 2, dead: false};
  if (event.type == "inc") {
    click_incremental_event(event, robot);
  } else {
    click_base_event(event, robot);
  }
}

// Progresses the event, by bringing down the timer.
// Add progression functions here.
function progress_event(event) {
  if (event.type == "inc") {
    progress_incremental_event(event);
  } else {
    progress_base_event(event);
  }
}

// Ends the event, either well or not.
function end_event(event, game_state) {
  end_base_event(event, game_state);
}

/** Event control functions ***/

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
    var yd = y - event.y;
    var xd = x - event.x;
    if ((yd < event_dimensions) && (xd < event_dimensions)) {
     if ((yd > (0-event_dimensions)) && (xd > (0-event_dimensions))) {
      click_event(event);
     }
    }
  }
}
