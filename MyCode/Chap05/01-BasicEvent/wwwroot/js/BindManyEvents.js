$(function () {
    window.count = 1;
    $("div").on("mouseenter mouseleave click dblclick",
        function () {
            console.log(window.count++);
            console.log("hovered on or out, clicked or double clicked");
        });
});