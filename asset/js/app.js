(function(){

    var menu = $("#menu"),
        iconToggle = $("#iconToggle"),
        collapse = $(".collapse");

    var menuScroll = function(){
        if ($(window).scrollTop() >  0){
            menu.addClass('scroll');
        }else{
            menu.removeClass('scroll')
        }
    }

    var menuToggle = function(){
        collapse.slideToggle();
    }

    var linkAncla = function(e){
        collapse.css({ 'display': 'none' });
            var strAncla = $(this).attr('href');
            $('body,html').stop(true, true).animate({
                scrollTop: $(strAncla).offset().top - 50
            }, 1000);

        $(".collapse__item").each(function(){
            $(this).removeClass('active');
        });

        $(this).parent(".collapse__item").addClass('active');
        
    };


    $(window).scroll(menuScroll);

    iconToggle.on('click',menuToggle);

    $('.collapse__item > a').click(linkAncla);


})();
