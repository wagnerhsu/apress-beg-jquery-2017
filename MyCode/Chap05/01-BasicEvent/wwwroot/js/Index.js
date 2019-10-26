$(function () {
    $("div").on("mouseenter",
        function () {
            console.log("hovered enter");
        })
        .on("mouseleave", function () {
            console.log("hovered over");
        });
    $("div").on("click",
        function() {
            console.log("click event");
        });
});