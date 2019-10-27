$(function () {
    $("#ajaxLocalJson").on("click",
        function () {
            $.ajax({
                "url": "/sample.json",
                "type": "get",
                "dataType": "json"
            }).done(function (results) {
                console.log(results);
            });
        });
});