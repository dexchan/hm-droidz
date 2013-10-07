// TODO: I wonder if if is more efficient to store it as a dictionary by end date. Probably!
// TODO: Actually, maybe the most efficient thing to do is learn how to intercept events and cause events.
// TODO: Uhm. Hacking together a prototype for now. 

var event_array = [];

function create_event(fun) {
  event_array.push({x: 50,
                   y: 50,
                   duration: 10,
                   start: fun}); 
  console.log("Something happens");
}

function run_events(fun) {
  for (var i = 0; i < event_array.length; i++) {
     event_array[i].duration--;
     if (event_array[i].duration == 0) {
       console.log("Something ends");
       event_array.splice(i, 1);
     }
  }
}
