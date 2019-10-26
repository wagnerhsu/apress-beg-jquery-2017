$(function() {
    $("div").on("click",
        "p",
        function() {
            console.log("Hello World");
        });
    $("<p />",
        {
            text: "Paragraph 6"
        }).appendTo("div");
});