$(document).ready(
    function(){

        // sticky nav
        $('.about-section').waypoint(
            function(direction){
                if(direction == "down"){
                    $('nav').addClass('sticky');
                }else {
                    $('nav').removeClass('sticky');
                }
            },{
                offset: '600px'
            }
        )

        // Scroll
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 700);
            event.preventDefault();
        });

        // mobile navigation
        $('.mobile-nav-icon').click(
            function(){
                $('.main-nav').slideToggle(200);

                if($('.mobile-nav-icon').hasClass('bi-bar-chart-steps')){
                    $('.mobile-nav-icon').addClass('bi-x-square-fill');
                    $('.mobile-nav-icon').removeClass('bi-bar-chart-steps')
                }
                else{
                    $('.mobile-nav-icon').addClass('bi-bar-chart-steps');
                    $('.mobile-nav-icon').removeClass('bi-x-square-fill')
                }
            }
        )
    }
)