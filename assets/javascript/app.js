$(document).ready(function() {
  $("<div>").button.moment().format("LLLL");

let database = firebase.database();
$("#submit").on("click", function() {
  event.preventDefault();
  let departure = $(".departure").val().trim();
  let arrival = $(".arrival").val().trim();
//   let startDate = $("#startDate").val();
//   let monthlyRate = $("#monthlyRate").val().trim();
//   //
  database.ref().push({
    name: departure,
    role: role,
    startDate: startDate,
    monthlyRate: monthlyRate
  });
});
});