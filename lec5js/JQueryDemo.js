$(document).ready(function() {
$("#showBox").click(function() {
$("#box").fadeIn();
});
$("#toggleText").click(function() {
$("#text").slideToggle();
});

$("#highlightText").click(function() {
$("#text").addClass("highlight");
});
});