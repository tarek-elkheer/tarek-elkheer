$(function(){
    $("#hide-donation-cont").on("click",function() {
        $("#container-hide-all").hide()
        $(this).parent().hide()
    })
    $("#join_btJOIN,#donate-footer-option,.sharenow").on("click",function(){
        $("#container-hide-all,#donate-option-container").show()
    })

    function disableScroll() {
  // Save the current scroll position
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  // Lock the scroll position
  window.onscroll = function() {
    window.scrollTo(scrollLeft, scrollTop);
  };
}

// Function to enable scrolling
function enableScroll() {
  window.onscroll = null;
}

// Call disableScroll to lock the scroll position
// disableScroll();

// Set a timeout to re-enable scrolling after one minute
// setTimeout(enableScroll, 5000);

    $("body *:not('#loader, #loader #LOADER')").css("visibility",'hidden')
    setTimeout(() => {
        $("body *:not('#loader, #loader #LOADER')").css("visibility",'visible')
        $("body #loader").css("visibility",'hidden')
        $("#GMAIL-CONTACT a").css("visibility",'hidden')
    }, 5000);
 
    $("#more").on("click",function(){
        $(this).css('display','block')
        $("#options ").slideToggle(100)
        $("#options").css("flex-direction","column")
 

    })

 


    //Curosel
    let mainPosts = document.querySelectorAll(".main-post");
let posts = document.querySelectorAll(".post");

let i = 0;
let postIndex = 0;
let currentPost = posts[postIndex];
let currentMainPost = mainPosts[postIndex];

let progressInterval = setInterval(progress, 100); // 180

function progress() {
  if (i === 100) {
    i = -5;
    // reset progress bar
    currentPost.querySelector(".progress-bar__fill").style.width = 0;
    document.querySelector(
      ".progress-bar--primary .progress-bar__fill"
    ).style.width = 0;
    currentPost.classList.remove("post--active");

    postIndex++;

    currentMainPost.classList.add("main-post--not-active");
    currentMainPost.classList.remove("main-post--active");

    // reset postIndex to loop over the slides again
    if (postIndex === posts.length) {
      postIndex = 0;
    }

    currentPost = posts[postIndex];
    currentMainPost = mainPosts[postIndex];
  } else {
    i++;
    currentPost.querySelector(".progress-bar__fill").style.width = `${i}%`;
    document.querySelector(
      ".progress-bar--primary .progress-bar__fill"
    ).style.width = `${i}%`;
    currentPost.classList.add("post--active");

    currentMainPost.classList.add("main-post--active");
    currentMainPost.classList.remove("main-post--not-active");
  }
}

$(".posts-wrapper * ").css("display","none")
$(".progress-bar__fill").css("background-color","white")
    //Curosel -END



    $(window).on("scroll",function() {
        if ($(this).scrollTop() > 152 && $(this).width() < 1272) {
            $(".LOGO").hide( )
            $("nav").css({"position":"sticky","z-index":"999999","top" : "0", 
                        "backdrop-filter":"blur(2px)"
                        ,
                        "background-color":"rgb(17 3 64 / 22%)"
                        })
        }
        if ($(this).scrollTop() === 0) {
            $("nav").css({"position":"relative", "background-color" :' #110340'})
            $(".LOGO").show()
        }
        if ($(this).width() > 1272) {
            $("nav").css({"position":"sticky","z-index":"999999","top" : "0" })
        }

        if ($(this).scrollTop() > 53 && !$(this).width() < 759 ) {
            $("#contact-now").css("display",'flex')
        }
        if ($(this).scrollTop() < 53  &&  !$(this).width() < 759 ) {
            $("#contact-now").css("display",'none')
        }
        if ($(this).scrollTop() > 152 && !$(this).width() < 1272) {
            $(".LOGO").hide( )
            $("nav").css({"position":"sticky","z-index":"999999","top" : "0", 
                        "backdrop-filter":"blur(2px)"
                        ,
                        "background-color":"rgb(17 3 64 / 22%)"
                        })
 
        }
    })
    $("#contactNW").on("click",function() {
        if ($(this).attr('data-triggerd') === 'false') {
            if ($(window).width() < 759) {
                $(this).parent().css("flex-direction",'column')
                $(this).attr("data-triggerd",'true')
                $(this).parent().animate({
                    left : 0
                },200)
                $("#GMAIL-CONTACT a").css("visibility",'visible')
            }
            else {
                $(this).attr("data-triggerd",'true')
                $(this).parent().animate({
                    left : 0
                },200)
                $("#GMAIL-CONTACT a").css("visibility",'visible')
            }
        }
        else {
 
            if ($(window).width() < 759) {
                $(this).attr("data-triggerd",'false')
                $(this).parent().animate({
                    left: -644
                },200, function(){
                    
                    $(this).css("flex-direction",'row')
                })
                $("#GMAIL-CONTACT a").css("visibility",'hidden')
            }
            else {
                $(this).attr("data-triggerd",'false')
                $(this).parent().animate({
                    left: -644 
                },200)
                $("#GMAIL-CONTACT a").css("visibility",'hidden')
            }
        }
    })

    //Li navigation to links
    $("#join_btJOIN a").on("click",function(e) {
        e.preventDefault()
    })
    $( ' body').on("click",".nav-ul li:first-child",function(){
 
        $('html, body').animate({scrollTop: $(".about_section").offset().top -100},100)
    })
    $( ' body').on("click",".nav-ul li:nth-child(2)",function(){
 
        $('html, body').animate({scrollTop: $(".banner_section").offset().top -100},100)
    })
    

    // Sponsers Banner
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    const marqueeContent = document.querySelector("ul.marquee-content");

    root.style.setProperty("--marquee-elements", marqueeContent.children.length);

    for(let i=0; i<marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

// Nav click handle 
    $(".nav-ul li,.sharenow").on("click",function() {

        if ($(window).width() < 1258) {
            setTimeout(() => {
                
                $("#options").css("display",'none')
            }, 200);
        }
    })

// FOOTER
  var date = new Date()
 
          $(function(){
            $(".copyright_text").html(date.getFullYear()+' All Rights Reserved. Copyrights @ <a href="https://tarek-elkheer.github.io/tarek-elkheer/">Tarek ELKheer</a>')
          })
})