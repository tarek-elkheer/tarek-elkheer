$(function(){
    $("body *:not('#loader, #loader img')").css("visibility",'hidden')
    setTimeout(() => {
        $("body *:not('#loader, #loader img')").css("visibility",'visible')
        $("body #loader").css("visibility",'hidden')
    }, 5000);


    $("#more").on("click",function(){
        $(this).css('display','block')
        $("#options ").slideToggle(100)
        $("#options").css("flex-direction","column")
 

    })


    // ScROLLER
    let el = document.querySelector(".scroller");
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    el.style.width = `${(scrollTop / height) * 100}%`;
    });
})