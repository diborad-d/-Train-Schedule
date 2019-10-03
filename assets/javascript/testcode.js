// const moment = require("moment");
// console.log(moment());
//current date + time
let m = moment();
console.log(m.format("dddd, MMMM Do YYYY, h:mm:ss a"));

// console.log("m: " + m.toDate());
// console.log(`toISOString() => ${m.toISOString()}`);

//  $(document).ready(function() {
//   let trainScheduleData = new Firebase("https://train-schedule-34437.firebaseio.com/");
//   $("addDataBtn").on("click", function(event) {
//     event.preventDefault();
//     let trainName = $('')
//     });


const firebaseConfig = {
  apiKey: "AIzaSyB6UPhytJViM7sRJ-l0o9oJVNwmw497pqo",
  authDomain: "train-schedule-34437.firebaseapp.com",
  databaseURL: "https://train-schedule-34437.firebaseio.com",
  projectId: "train-schedule-34437",
  storageBucket: "",
  messagingSenderId: "739886981960",
  appId: "1:739886981960:web:3ce4e63e293725b8b2c97d"
};
firebase.initializeApp(firebaseConfig);

let database = firebase.database();
var ref = firebase.database().ref();
ref.on("value", function(snapshot) {
  output.innerHTML = JSON.stringify(snapshot.val(), null, 2);
});
$(document).ready(function() {
  let trainSchedue = {
    arrival: 0,
    departure: 0,
    firstTrain: 0,
    lastTrain: 0,
    firstTrain: 0,
    arriving: 0,
    leaving: 0
  };

  $(document).on("click", function() {
// 
    //   let arrival = $("#arrival").val().trim();
      let departure = $("#departure").val().trim();  //takes user input
      trainSchedue.arrival = arrival;
      trainSchedue.departure = departure;
    database.ref().push({
      trainSchedue
    });
  });

});
