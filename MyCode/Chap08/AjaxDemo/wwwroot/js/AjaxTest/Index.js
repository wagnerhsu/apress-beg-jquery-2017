$(function () {
    $("#ajaxLocalJson").on("click",
        function () {
            $.ajax({
                "url": "/sample.json",
                "type": "get",
                "dataType": "json"
            }).done(function (results) {
                console.log(results);
            }).fail(function(jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
            });
        });
    $("#ajaxLocalJson").on("click",
        function () {
            $.getJSON("/sample.json",
                function(data) {
                    console.log(data);
                });
        });
    $("#ajaxWithError").on("click",
        function() {
            $.ajax(
                {
                    "url": "sample.json",
                    "type": "get",
                    "dataType":"json"
                }).fail(function() {
                console.log("fail", arguments);
            });
        });
});