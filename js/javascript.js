//header downList
$(function(){
    var count;
    var max;
    var click;

    $("header .top .total").click(function(){
        $(this)
        .toggleClass("display");
    })

    $("header nav li").mouseenter(function(){
        var n = $(this).index() - 1;

        if(n == 0 || n == 1 || n == 2 || n == 3 || n == 4 || n == 5)
        {
            $("header .downList")
            .addClass("active");

            $("header .downList ol:eq("+ n +")")
            .addClass("display")
            .siblings().removeClass("display");

            count = $("header .downList ol.display li").length;
            
            if(count > 5)
            {
                $("header .downList ol.display")
                .siblings(".fa-chevron-right").addClass("active");

                max = count - 5;
                click = 0;

                $("header .downList ol.display li").each(function(){
                    $("header .downList ol.display li")
                    .css("transform","translateX("+ 0 +"px)");
                })
            }
            else 
            {
                $("header .downList ol.display")
                .siblings("i").removeClass("active");
            }
        }
        else
        {
            $("header .downList")
            .removeClass("active");
        }
    })
    
    $("header .downList .fa-chevron-right").click(function(){
        click ++;

        $("header .downList .fa-chevron-left")
        .addClass("active");

        if(click >= max)
        {
            $("header .downList .fa-chevron-right")
            .removeClass("active");
        }

        $("header .downList ol.display li").each(function(){
            $("header .downList ol.display li")
            .css("transform","translateX("+ (-240 * click) +"px)");
        })
    })
    $("header .downList .fa-chevron-left").click(function(){
        click --;

        $("header .downList .fa-chevron-right")
        .addClass("active");

        if(click <= 0)
        {
            $("header .downList .fa-chevron-left")
            .removeClass("active");
        }

        $("header .downList ol.display li").each(function(){
            $("header .downList ol.display li")
            .css("transform","translateX("+ (-240 * click) +"px)");
        })
    })

    $("header .downList").mouseleave(function(){
        $("header .downList")
        .removeClass("active");
    })
})

//Sweiper
$(function(){
    //Swiper
    var swiper = new Swiper('.swiper', {
        autoHeight: true,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        slidesPerView: 1,
        breakpoints: {
            1000: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });
})

//innerPage 

//提款
$(function(){
    $(".innerPage .midSide.deposit .midTop .objectList .payType li").click(function(){
        var n = $(this).index();

        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        $(".midSide.deposit .midBottom .content:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//midPageList 換頁
$(function(){
    $(".innerPage .center .midSide ul.midPageList li").click(function(){
        var n = $(this).index();

        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        $(".midSide .midBottom .content:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//遊戲平台展開收起
$(function(){
    $(document).on("click",".midSide .midTop .platformWallet .stateWrap", function(){
        $(this)
        .addClass("active")
        .closest(".platformWallet")
        .find(".platformOuter")
        .addClass("active");

        $(this)
        .find("p")
        .text("收起");

        $(this)
        .find("i")
        .attr("class","fa-solid fa-angles-up");
    })
    $(document).on("click",".midSide .midTop .platformWallet .stateWrap.active", function(){
        $(this)
        .removeClass("active")
        .closest(".platformWallet")
        .find(".platformOuter")
        .removeClass("active");

        $(this)
        .find("p")
        .text("展開");

        $(this)
        .find("i")
        .attr("class","fa-solid fa-angles-down");
    })
})

//彈窗
$(function(){

    //忘記密碼
    $(".forgetBtn").click(function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter, .jumpWindow.fgPW")
        .addClass("display");
    })
    
    //請先登入
    $("header .bottom, .home, footer").click(function(){
        if($(this).closest("body").hasClass("unlogin"))
        {
            $(".filter, .jumpWindow.plsLogin")
            .addClass("display");
        }
    })
    
    //關閉視窗
    $(".jumpWindow i.closeWindow, .jumpWindow button.closeWindow").click(function(){
        $(".filter")
       .removeClass("display");
    })

    //更換聯電
    $(".midSide.memberCenter .midBottom button.callChangeNum").click(function(event){

        $(".jumpWindow")
        .removeClass("display");

        $(".filter, .jumpWindow.changePhone")
        .addClass("display");
    })

    //更換聯電
    $(".midSide.memberCenter .midBottom button.callChangePW").click(function(event){

        $(".jumpWindow")
        .removeClass("display");

        $(".filter, .jumpWindow.changePW")
        .addClass("display");
    })
})

//news
$(function(){
    $(".jumpWindow.news .typeList button").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".jumpWindow.news ol:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})