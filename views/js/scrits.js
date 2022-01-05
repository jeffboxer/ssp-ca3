function draw_table(){
    $("#myDiv").empty();
    $.getHTMLuncached = function(url){
        return $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            success: function(html){
                $("#myDiv").append(html)
            }
        });

    };
        $.getHTMLuncached("/get/html")
};

$(document).ready(function(){

    draw_table;
})