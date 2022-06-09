$(document).ready({
    $("#load-more").click(function () {
        $.ajax({
            url: "/dynamic-content",
            success: function (result) {
                //Result objesi json olarak geliyorsa json olarak kullan
                resultOne = result[0];
                resultTwo = result[1];
                $('#text-1').html(resultOne);
                $('#text-2').html(resultTwo);
            }
        });
    });
});