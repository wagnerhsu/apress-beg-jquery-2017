$(document).ready(function () {
  var rows = $("tr");
  rows.filter(":even").css("background", "red");
  rows.filter(":odd").css("background", "blue");
  setInterval(() => {
    $('#currentTime').text(getCurrentDateTime());
  }, 100);
});
