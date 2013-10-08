/**** Event Control Functions ****/

// Maybe generates events based on game state.
// Increments relevant counters.
// Add creation functions to here.
function maybe_generate_new_events(game_state, event_array) {
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
