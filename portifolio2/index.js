$(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
    $('.tabs').tabs();
    $('.slider').slider();
    $(document).ready(function(){
    $('.sidenav').sidenav();
  });
    $(function(){
    $(".button-collapse").sideNav();
 });
    $('.materialboxed').materialbox();
    $('.nav-link').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;
        $('html, body').animate({ 
            scrollTop: targetOffset
        }, 500);
    });
});
$(document).ready(function(){
    var fonte = 13;
        $('aumenta_fonte').click(function(){
            if (fonte<17){
                fonte = fonte+A;
                $('#content').css({'font-size' : fonte+'px'});
            }
            console.log(fonte+A);
        });
        $('reduz_fonte').click(function(){
            if (fonte>11){
                fonte = fonte-A;
                $('#content').css({'font-size' : fonte+'px'});
            }
            console.log(fonte-A);
        });
    });