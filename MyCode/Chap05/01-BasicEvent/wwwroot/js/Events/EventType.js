$(function () {
    $("div").on("mouseenter mouseleave",
        function (e) {
            if (e.type === "mouseenter") {
                $(this).css("background", "blue");
            } else {
                $(this).css("background", "red");
            }
        });
});