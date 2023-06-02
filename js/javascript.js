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

//vip 更多
$(function(){
    $(".innerPage .center .midSide.vip .midBottom .content button.more, .innerPage .center .midSide.vip .midBottom .content i.backBtn").click(function(){
        
        $(this)
        .closest(".content")
        .removeClass("display");

        $(this)
        .closest(".content")
        .siblings()
        .addClass("display");
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

//搜尋列選擇按鈕
$(function(){
    $(".midSide form.searchBlock .selectBtn_Wrap button").click(function(){

        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    })
})

//deposit
$(function(){
    $(".innerPage .midSide.deposit .midBottom .content:eq(0) form .submitBtn").click(function(){
        $(this)
        .closest(".content")
        .removeClass("display");

        $(".innerPage .midSide.deposit .midBottom .deposit_finished")
        .addClass("display");
    })
})

//betRecord 表單展開收起
$(function(){
    $(document).on("click",".midSide.betRecord .midBottom .content .recordList li .detailWrap i", function(){
        $(this)
        .closest("li")
        .addClass("active");
    })
    $(document).on("click",".midSide.betRecord .midBottom .content .recordList li.active .detailWrap i", function(){
        $(this)
        .closest("li")
        .removeClass("active");

        $(this)
        .attr("class","fa-solid fa-chevron-up");
    })
})

//mail 站內信
$(function(){
    //通知&公告 切換類別
    $(".innerPage .center .midSide.mailWrap .midTop .objectList.mailType button").click(function(){
        var n = $(this).index();

        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");

        $(".midPageList.mailList ul:eq(" + n + ")")
        .addClass("active")
        .siblings()
        .removeClass("active");

        if( n == 1 ) {
            $(".innerPage .center .midSide.mailWrap .midBottom .content:eq(2)")
            .addClass("display")
            .siblings()
            .removeClass("display");
        }
    })

    //midList 切換類別
    $(".innerPage .center .midSide.mailWrap .midPageList.mailList ul li").click(function(){
        var n = $(this).index();
        var m = $(this).closest("ul").index();

        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");

        if( m == 1 && n == 0) {
            $(".innerPage .center .midSide.mailWrap .midBottom .content:eq(2)")
            .addClass("display")
            .siblings()
            .removeClass("display");
        } else if(m == 1 && n == 1) {
            $(".innerPage .center .midSide.mailWrap .midBottom .content:eq(3)")
            .addClass("display")
            .siblings()
            .removeClass("display");
        } else if(m == 1 && n == 2) {
            $(".innerPage .center .midSide.mailWrap .midBottom .content:eq(4)")
            .addClass("display")
            .siblings()
            .removeClass("display");
        } else {
            $(".innerPage .center .midSide.mailWrap .midBottom .content:eq(" + n + ")")
            .addClass("display")
            .siblings()
            .removeClass("display");
        }

    })

    //全部已讀
    $(".innerPage .center .midSide.mailWrap .content .outerMode .functionWrap .block button.readAll").click(function(){
        $(this)
        .closest(".outerMode")
        .find("ul.allMail li")
        .addClass("seen");
    })

    //編輯
    $(".innerPage .center .midSide.mailWrap .content .outerMode .functionWrap .block button.editBtn").click(function(){
        $(this)
        .closest(".outerMode")
        .addClass("editState");
    })

    //完成(結束編輯模式)
    $(".innerPage .center .midSide.mailWrap .content .outerMode .functionWrap button.finished").click(function(){
        $(this)
        .closest(".outerMode")
        .removeClass("editState");
    })

    //選取
    $(".innerPage .center .midSide.mailWrap .content .outerMode .allMail li .select .all").click(function(){
        $(this)
        .toggleClass("active")
        .closest("li")
        .toggleClass("chosen");
    })

    //選取已讀
    $(".innerPage .center .midSide.mailWrap .content .outerMode .functionWrap .block button.read").click(function(){
        $(this)
        .closest(".outerMode.editState").find(".chosen")
        .addClass("seen");
    })

    //選取刪除
    $(".innerPage .center .midSide.mailWrap .content .outerMode .functionWrap .block button.delete").click(function(){
        $(this)
        .closest(".outerMode.editState").find(".chosen")
        .remove();
    })

    //查看該訊息詳情 (點擊進入innerMode)
    $(".innerPage .center .midSide.mailWrap .content .outerMode .allMail li .text, .date ").click(function(){
        $(this).closest(".outerMode")
        .removeClass("display")
        .siblings()
        .addClass("display");

        $(this).closest(".midSide.mailWrap")
        .find(".midTop, .midPageList.mailList")
        .css("display", "none");
    })

    $(".innerPage .center .midSide.mailWrap .content .innerMode .titleM i").click(function(){
        $(this)
        .closest(".innerMode")
        .removeClass("display")
        .siblings()
        .addClass("display");

        $(this).closest(".midSide.mailWrap")
        .find(".midTop, .midPageList.mailList")
        .css("display", "block");
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

    //快速轉帳
    $(".gamePage_Wrap .containerWrap.sportPage ul.btnBox li, .gamePage_Wrap .containerWrap.livePage ul.btnBox li, .gamePage_Wrap .containerWrap.lotteryPage ul.btnBox li").click(function(){
        var n = $(this).find("p").text();
        
        $(".jumpWindow")
        .addClass("display");

        $(".filter, .jumpWindow.quickTransfer")
        .addClass("display")
        .siblings()
        .removeClass("display");

        $(".jumpWindow.quickTransfer .content form label:nth-of-type(1)")
        .find("p.platformName").text(n);
    })

    //更換聯電
    $(".midSide.memberCenter .midBottom button.callChangeNum").click(function(){

        $(".jumpWindow")
        .removeClass("display");

        $(".filter, .jumpWindow.changePhone")
        .addClass("display");
    })

    //更換聯電
    $(".midSide.memberCenter .midBottom button.callChangePW").click(function(){

        $(".jumpWindow")
        .removeClass("display");

        $(".filter, .jumpWindow.changePW")
        .addClass("display");
    })

    //注單明細
    $(".midSide.dealRecord .midBottom .content .callDealDetail").click(function(){

        $(".jumpWindow")
        .removeClass("display");

        $(".filter, .jumpWindow.dealDetail")
        .addClass("display");
    })

    //紅利 X代會員
    $(".midSide.pointRecord .midBottom .content .callPoint_Window").click(function(){
        var n = $(this).text();

        $(".jumpWindow")
        .removeClass("display");

        $(".filter, .jumpWindow.pointDetail")
        .addClass("display")
        .find(".title p span")
        .text(n);
    })

    //申請活動
    $(".midSide.eventApply .midBottom .content .callEventApply").click(function(){

        $(".jumpWindow")
        .removeClass("display");

        $(".filter, .jumpWindow.applied")
        .addClass("display");
    })

    //查看活動
    $(".midSide.eventApply .midBottom .content .callEventCheck").click(function(){

        $(".jumpWindow")
        .removeClass("display");

        $(".filter, .jumpWindow.eventWindow")
        .addClass("display");
    })

    //最新消息
    //忘記密碼
    $(".callNews_window").click(function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter, .jumpWindow.news")
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