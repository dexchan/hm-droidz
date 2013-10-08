// Coordinate boundaries of acceptable events.
var min_x = 30;
var max_x = 800;
var min_y = 30;
var max_y = 400;

// Returns a new and most generic event.
function create_base_event(counter) {
   var x_bonus = Math.round(Math.random()*(max_x - min_x));
   var y_bonus = Math.round(Math.random()*(max_y - min_y));

   return {x: min_x + x_bonus,
           y: min_y + y_bonus,
           duration: 50,
           start: counter,
           click: false};
}

