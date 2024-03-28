$(function(){
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

    // $("body *:not('#loader, #loader img')").css("visibility",'hidden')
    // setTimeout(() => {
    //     $("body *:not('#loader, #loader img')").css("visibility",'visible')
    //     $("body #loader").css("visibility",'hidden')
    // }, 5000);
 
    // $("#more").on("click",function(){
    //     $(this).css('display','block')
    //     $("#options ").slideToggle(100)
    //     $("#options").css("flex-direction","column")
 

    // })


    // ScROLLER
    let el = document.querySelector(".scroller");
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    el.style.width = `${(scrollTop / height) * 100}%`;
    });



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

})