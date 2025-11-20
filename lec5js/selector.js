$(document).ready(function () {
$("#p1").css("color", "green");
$(".inputBox").css({
"border": "2px solid blue",
"padding": "5px"
});
$("input[type='button']").click(function () {
alert("Form Submitted!");
});
});