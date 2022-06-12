$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass('show');
        }else{
            $('.scroll-up-btn').removeClass('show');
        }
    });
    //side-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    //typing animation script
    var typed = new Typed(".typing",{
        strings: ["Web Developer" , "Java developer" , "SQL" , "Software Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2",{
        strings: ["Web Developer" , "Java developer" , "SQL" , "Software Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    $(".read").click(function(){
        $(this).toggleClass("active");
        $(this).parent().toggleClass("active");
    })
});
function promptbox()
{
    var a=prompt("Send Request :- Enter Your Email")
    alert(a);
}
function alretbox()
{
    alert('Please Fill Out This Field Properly !')
}
