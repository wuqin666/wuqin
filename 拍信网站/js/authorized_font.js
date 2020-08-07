window.onload = function(){
    $('#category>div').each(function(index) {
            $(this).click(function(){
                $("#category>div").css({'background':'#F2f2f2','color':'#333333'});
                $("#category>div").eq(index).css({'background':'#000000','color':'#FFFFFF'});
            });
        });
};


