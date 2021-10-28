$(document).ready(function(){

    function pageLoad () {
        $("#head").fadeIn(600);
        setTimeout(function(){ 
            $("#content").fadeIn(300); 
        }, 500);
    }

    pageLoad();

    //************
    // NAVBAR
    //************ 
    $(".aboutLink").click(function () {
        $(".aboutLink").addClass("active");
        $(".portfolioLink, .contactLink").removeClass("active");
        $("#portfolio, #contact, .projectDisplay").fadeOut(100);
        setTimeout(function(){ 
            $("#about").fadeIn(100); 
        }, 500);
    });
    $(".portfolioLink").click(function () {
        $(".portfolioLink").addClass("active");
        $(".aboutLink, .contactLink").removeClass("active");
        $("#about, #contact").fadeOut(100);
        setTimeout(function(){ 
            $("#portfolio").fadeIn(100); 
        }, 500);
    });
    $(".contactLink").click(function () {
        $(".contactLink").addClass("active");
        $(".aboutLink, .portfolioLink").removeClass("active");
        $("#about, #portfolio, .projectDisplay").fadeOut(100);
        setTimeout(function(){ 
            $("#contact, #resume").fadeIn(100);
        }, 500);
    });

    //************
    // PROJECT NAV
    //************ 
    $(".project1link").click(function () {
        $(".project1link").addClass("active");
        $(".project2link, .project3link, .project4link, .project5link, .project6link").removeClass("active");
        $("#project2, #project3, #project4, #project5, #project6").fadeOut(100);
        setTimeout(function(){ 
            $("#project1").fadeIn(100); 
        }, 500);
    });    
    $(".project2link").click(function () {
        $(".project2link").addClass("active");
        $(".project1link, .project3link, .project4link, .project5link, .project6link").removeClass("active");
        $("#project1, #project3, #project4, #project5, #project6").fadeOut(100);
        setTimeout(function(){ 
            $("#project2").fadeIn(100); 
        }, 500);
    });    
    $(".project3link").click(function () {
        $(".project3link").addClass("active");
        $(".project1link, .project2link, .project4link, .project5link, .project6link").removeClass("active");
        $("#project1, #project2, #project4, #project5, #project6").fadeOut(100);
        setTimeout(function(){ 
            $("#project3").fadeIn(100); 
        }, 500);
    });    
    $(".project4link").click(function () {
        $(".project4link").addClass("active");
        $(".project1link, .project2link, .project3link, .project5link, .project6link").removeClass("active");
        $("#project1, #project2, #project3, #project5, #project6").fadeOut(100);
        setTimeout(function(){ 
            $("#project4").fadeIn(100); 
        }, 500);
    });    
    $(".project5link").click(function () {
        $(".project5link").addClass("active");
        $(".project1link, .project2link, .project3link, .project4link, .project6link").removeClass("active");
        $("#project1, #project2, #project3, #project4, #project6").fadeOut(100);
        setTimeout(function(){ 
            $("#project5").fadeIn(100); 
        }, 500);
    });    
    $(".project6link").click(function () {
        $(".project6link").addClass("active");
        $(".project1link, .project2link, .project3link, .project4link, .project5link").removeClass("active");
        $("#project1, #project2, #project3, #project4, #project5").fadeOut(100);
        setTimeout(function(){ 
            $("#project6").fadeIn(100); 
        }, 500);
    });        

});