$(function () {
    $("form").on("submit",
        function () {
            alert("you just submitted the form:" + $("#first_name").val());
        });
    $("#first_name").on("focus",
        function() {
            console.log("You're focused on the input'");
        }).on("blur",
        function() {
            console.log("This input just lost focus");
            });
    $('#trigger').on("click",
        function() {
            $("form").trigger("submit");
        });
});