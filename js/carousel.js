$(function(){
    $("#carouselInner").css("width",470*$("#carouselInner ul.column").size()+"px");
        $("#carouselInner ul.column:last").prependTo("#carouselInner");
        $("#carouselInner").css("margin-left","-470px");
        $("#carouselPrev").click(function(){
            $("#carouselNext,#carouselPrev").hide();
            $("#carouselInner").animate({
            marginLeft : parseInt($("#carouselInner").css("margin-left"))+470+"px"
            },"normal","swing" , 
            function(){
            $("#carouselInner").css("margin-left","-470px");
            $("#carouselInner ul.column:last").prependTo("#carouselInner");
            $("#carouselNext,#carouselPrev").show();
            });
        });
        $("#carouselNext").click(function(){
        $("#carouselNext,#carouselPrev").hide();
        $("#carouselInner").animate({
            marginLeft : parseInt($("#carouselInner").css("margin-left"))-470+"px"
            },"normal","swing" , 
            function(){
            $("#carouselInner").css("margin-left","-470px");
            $("#carouselInner ul.column:first").appendTo("#carouselInner");
            $("#carouselNext,#carouselPrev").show();
        });
    });
});