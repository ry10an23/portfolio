$(function(){
    $(window).on('load scroll', function(){
        let winScroll = $(window).scrollTop();
        let winHeight = $(window).height();
        let scrollPos = winScroll + (winHeight * .8);

        $(".show").each(function(){
            if($(this).offset().top < scrollPos){
                $(this).css({opacity: 1, transform: 'translate(0, 0)'});
            }
        })
    })
})