// TODO: We should make this more efficient through either callbacks or at least
// better use of data structures.

// Keeps track of active events.
var event_array = [];

// Maybe generates events based on game state.
function maybe_generate_events(game_state) {
  var counter = game_state.counter;
  if (game_state.counter % 5) {
     event_array.push(create_base_event(game_state.counter));
  }
}

// Loops through the events to either click them or end them.
// TODO: We should consider separating on-click actions from the
// overall event loop and then simplifying the event loop. 
// TODO: Remove events from this loop. 
function run_events(game_state, coords) {
  for (var i = 0; i < event_array.length; i++) {
     var event = event_array[i];
     event.duration--; // TODO: This should be replaced by Progress Event.
     if (event.duration > 0) {
       click_event(event, coords.x, coords.y);
       draw_event(event);
     }
  }
}

// The ~radius to center of event that counts as clicking the event.
var event_dimensions = 25;

// Sets the event.click to true if the click coordinates are right.
// TODO: Have actual event effects.
// (Luckily, clicking the event has ~similar effects);
function click_event(event, x, y) {
  var yd = y - event.y;
  var xd = x - event.x;
  if ((yd < 25) && (xd < 25)) {
    if ((yd > -25) && (xd > -25)) {
      event.click = true;
    }
  }
}
