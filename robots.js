
// Maybe Robot.
function get_robot_stats(robot) {
  if (robot == "robot1") {
    return {level: 1,
           price: 50,
           cost: 1}; 
  } else if (robot == "robot2") {
    return {level: 2,
           price: 100,
           cost: 10}; 
  } else if (robot == "robot3") {
    return {level: 3,
           price: 150,
           cost: 20}; 
  } else {
    console.log("UNKNOWN ROBOT");
    return {level: 0,
           price: 0,
           cost: 0}; 
  }
}
