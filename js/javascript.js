//header 平台點數
$(function(){
    $("header .top ul.loginBox li.total").click(function(){
        $(this)
        .children("ul.transferInfo")
        .toggleClass("display");
    })
})

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

//遊戲內頁
$(function(){
    $("main .gamePage_Wrap .center .gameInnerPage_Wrap .nav ul li").click(function(){
        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    })
})

//gameWrap小遊戲格hover切換左大圖
$(function(){
    $(".gamePage_Wrap ul.btnBox li").hover(function(){
        var n = $(this).index();

        $(".gamePage_Wrap .sportPage .mainImg")
        .attr("src","../img/partner/sport/sportBG_"+ (n + 1) +".png");
        $(".gamePage_Wrap .livePage .mainImg")
        .attr("src","../img/partner/live/liveBG_"+ (n + 1) +".png");
        $(".gamePage_Wrap .lotteryPage .mainImg")
        .attr("src","../img/partner/lottery/lotteryBG_"+ (n + 1) +".png");
        $(".gamePage_Wrap .slotPage .mainImg")
        .attr("src","../img/partner/slot/slotBG_"+ (n + 1) +".png");
        $(".gamePage_Wrap .fishPage .mainImg")
        .attr("src","../img/partner/fish/fishBG_"+ (n + 1) +".png");
        $(".gamePage_Wrap .boardPage .mainImg")
        .attr("src","../img/partner/board/boardBG_"+ (n + 1) +".png");
    })
})

//遊戲內頁+我的最愛
$(document).on("click",".gameInnerPage_Wrap .gameBox ul li ul li .textBox i", function(){
    $(this)
    .toggleClass("fa-regular fa-solid")
    .closest("li")
    .toggleClass("favoriteGame");
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

//卡片功能
$(function(){
    var clickTimes = 0;

    //銀行卡
    $(".innerPage .midSide.bankCard .objectList i").click(function(){
        var widthAmount = $(this).siblings("ul").find("li").length;
        var widthOuter = $(this).siblings("ul").find("ol").width() / widthAmount * -1;

        if($(this).hasClass("nextBtn"))
        {
            clickTimes++;

            $(".innerPage .midSide .objectList ul ol")
            .css("transform", "translateX(" + clickTimes * widthOuter + "px)");

            $(".innerPage .midSide .objectList i.prevBtn")
            .addClass("active");

            if(clickTimes == widthAmount -1) {
                $(".innerPage .midSide .objectList i.nextBtn")
                .removeClass("active");
            }
        }
        else if($(this).hasClass("prevBtn"))
        {
            clickTimes--;

            $(".innerPage .midSide .objectList ul ol")
            .css("transform", "translateX(" + clickTimes * widthOuter + "px)");

            $(".innerPage .midSide .objectList i.nextBtn")
            .addClass("active");

            if(clickTimes == 0) {
                $(".innerPage .midSide .objectList i.prevBtn")
                .removeClass("active");
            }
        }
    })

    //vip level
    $(".innerPage .midSide .vipCardList i").click(function(){
        var widthAmount = $(this).siblings("ul").find("li").length;
        var widthOuter = $(this).siblings("ul").find("ol").width() / widthAmount * -1;

        console.log(widthOuter);

        if($(this).hasClass("nextBtn"))
        {
            clickTimes++;

            $(".innerPage .midSide .vipCardList ul ol")
            .css("transform", "translateX(" + clickTimes * widthOuter + "px)");

            $(".innerPage .midSide .vipCardList i.prevBtn")
            .addClass("active");

            if(clickTimes == widthAmount -1) {
                $(".innerPage .midSide .vipCardList i.nextBtn")
                .removeClass("active");
            }
        }
        else if($(this).hasClass("prevBtn"))
        {
            clickTimes--;

            $(".innerPage .midSide .vipCardList ul ol")
            .css("transform", "translateX(" + clickTimes * widthOuter + "px)");

            $(".innerPage .midSide .vipCardList i.nextBtn")
            .addClass("active");

            if(clickTimes == 0) {
                $(".innerPage .midSide .vipCardList i.prevBtn")
                .removeClass("active");
            }
        }
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
    $(".innerPage .center .midSide.mailWrap .content .outerMode .allMail li .select input.all").change(function(){
        $(this)
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

//優惠 
$(function(){
    $("main .eventWrap .eventBody .sideNav ul li").click(function(){
        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    })
})

//幫助中心
$(function(){
    $("main .helpWrap .helpBody .sideNav ul li.theme .topic").click(function(){
        $(this)
        .closest("li")
        .addClass("active")
        .siblings()
        .removeClass("active");

        $(this)
        .next("ul") 
        .addClass("display");
    })

    $("main .helpWrap .helpBody .sideNav ul li.theme ul.page li").click(function(){
       var n = $(this).closest("li.theme").index();
       var m = $(this).index();
       
        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");

        if( n == 0 ){
            $("main .helpWrap .helpBody .container .newHelp:eq(" + m + ")")
            .addClass("display")
            .siblings()
            .removeClass("display");
        } else if( n == 1 ) {
            $("main .helpWrap .helpBody .container .question:eq(" + m + ")")
            .addClass("display")
            .siblings()
            .removeClass("display");
        } else if( n == 2 ) {
            $("main .helpWrap .helpBody .container .aboutUs:eq(" + m + ")")
            .addClass("display")
            .siblings()
            .removeClass("display");
        } else if( n == 3 ) {
            $("main .helpWrap .helpBody .container .app:eq(" + m + ")")
            .addClass("display")
            .siblings()
            .removeClass("display");
        }
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
            .addClass("display")
            .siblings().removeClass("display");
        }
    })
    
    //關閉視窗
    $(".jumpWindow i.closeWindow, .jumpWindow button.closeWindow").click(function(){
        $(".filter")
       .removeClass("display");
    })

    //快速轉帳
    $("header .downList ul ol.sport li a, header .downList ul ol.live li a, header .downList ul ol.lottery li a").click(function(){
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
    $(".gamePage_Wrap .center .gameInnerPage_Wrap .gameBox li ul li .btnBox button.enter").click(function(){
        var n = $(this).closest("li").find(".textBox p").text();
        
        $(".jumpWindow")
        .addClass("display");

        $(".filter, .jumpWindow.quickTransfer")
        .addClass("display")
        .siblings()
        .removeClass("display");

        $(".jumpWindow.quickTransfer .content form label:nth-of-type(1)")
        .find("p.platformName").text(n);
    })
    $(".mainWrap .typeList .gameBlock").click(function(){
        var n = $(this).find("p").text();

        if($(this).closest("body").find("header .top .center ul").hasClass("loginBox")) {
            
            $(".filter, .jumpWindow.quickTransfer")
            .addClass("display")
            .siblings()
            .removeClass("display");
    
            $(".jumpWindow.quickTransfer .content form label:nth-of-type(1)")
            .find("p.platformName").text(n);
        }
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
    $(".midSide.eventApply .midBottom .content .callEventCheck, .eventWrap .eventBody .eventList ul li .callEventCheck").click(function(){

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

//顏色選擇器
$(function(){
    $("aside.colorSelector .hint").click(function(){
        $(this)
        .parent()
        .toggleClass("active");
    })

    //主規則
    $("aside.colorSelector form .preset input").on("change",function(){
        var mainColor;
        var subColor_BG;
        var subColor_BG2;
        var accentColor_1;
        var accentColor_2;
        var font_Remind;

        $("aside.colorSelector form .preset input").each(function(){
            if($(this).hasClass("mainColor")){
                mainColor = $(this).val();
                $(this).closest(".colorBlock").find("p").text(mainColor);
            }
            else if($(this).hasClass("subColor_BG"))
            {
                subColor_BG = $(this).val();
                $(this).closest(".colorBlock").find("p").text(subColor_BG);
            }
            else if($(this).hasClass("subColor_BG2")) //大區塊背景色
            {
                subColor_BG2 = $(this).val();
                $(this).closest(".colorBlock").find("p").text(subColor_BG2);
            }
            else if($(this).hasClass("accentColor_1"))
            {
                accentColor_1 = $(this).val();
                $(this).closest(".colorBlock").find("p").text(accentColor_1);
            }
            else if($(this).hasClass("accentColor_2"))
            {
                accentColor_2 = $(this).val();
                $(this).closest(".colorBlock").find("p").text(accentColor_2);
            }
            else if($(this).hasClass("remindColor"))
            {
                font_Remind = $(this).val();
                $(this).closest(".colorBlock").find("p").text(font_Remind);
            }
        });

        $(':root').css('--mainColor', mainColor);
        $(':root').css('--subColor_BG', subColor_BG);
        $(':root').css('--subColor_BG-2', subColor_BG2);
        $(':root').css('--accentColor_1', accentColor_1);
        $(':root').css('--accentColor_2', accentColor_2);
        $(':root').css('--remindColor', font_Remind);
    })

     //個別客製區塊
    $("aside.colorSelector form .custom input").on("change",function(){
        var newHeaderTOP_BG;
        var vip_P;
        var user_P;
        var total_P;
        var platformUl_BG;
        var platformUl_Border;
        var platform_P;
        var platformMoney_P;
        var newHeaderTOP_liP;
        var newHeaderTOP_liP_HOV;
        var newHeaderTOP_li_HOV;
        var newHeaderTDown_BG;
        var newHeaderTDown_P;
        var newHeaderTDownHOV_P;
        var newHeaderTDown_Before;
        var downList_BG;
        var downList_Border;
        var downList_P;
        var downList_iBtn;
        var innerPageLeftSide_userAccountP;
        var innerPageLeftSide_userLevelBG;
        var innerPageLeftSide_userLevelP;
        var innerPageLeftSide_joinedDays;
        var innerPageLeftSide_quickBtnP;
        var innerPageLeftSide_innerNavBG_HOV;
        var innerPageLeftSide_innerNavP;
        var innerPageLeftSide_innerNavI;
        var innerPageLeftSide_innerNavI_HOV;
        var innerPageLeftSide_innerNavBG_HOVbefore;

        $("aside.colorSelector form .custom input").each(function(){
            if($(this).hasClass("headerTopColorBG")){
                newHeaderTOP_BG = $(this).val();
                $("header .top").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(newHeaderTOP_BG);
            }  else if($(this).hasClass("vip_P")){
                vip_P= $(this).val();
                $("header .loginBox .userName").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(vip_P);
            }  else if($(this).hasClass("userName")){
                user_P= $(this).val();
                $("header .loginBox .userName").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(user_P);
            }  else if($(this).hasClass("total_P")){
                total_P= $(this).val();
                $("header .loginBox li.total p.moneyTotal, header .loginBox li.total i").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(total_P);
            }   else if($(this).hasClass("platformUl_BG")){
                platformUl_BG= $(this).val();
                $("header .loginBox .transferInfo").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(platformUl_BG);
            }   else if($(this).hasClass("platformUl_Border")){
                platformUl_Border= $(this).val();
                $("header .loginBox .transferInfo, header .loginBox .transferInfo li").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(platformUl_Border);
            }   else if($(this).hasClass("platform_P")){
                platform_P= $(this).val();
                $("header .loginBox .transferInfo li p").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(platform_P);
            }   else if($(this).hasClass("newHeaderTOP_liP")){
                newHeaderTOP_liP= $(this).val();
                $("header .loginBox li").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(newHeaderTOP_liP);
            }   else if($(this).hasClass("newHeaderTOP_liP_HOV")){
                newHeaderTOP_liP_HOV= $(this).val();
                $("header .loginBox li").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(newHeaderTOP_liP_HOV);
            }   else if($(this).hasClass("newHeaderTOP_li_HOV")){
                newHeaderTOP_li_HOV= $(this).val();
                $("header .loginBox li").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(newHeaderTOP_li_HOV);
            }   else if($(this).hasClass("newHeaderTDown_BG")){
                newHeaderTDown_BG= $(this).val();
                $("header .bottom").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(newHeaderTDown_BG);
            }   else if($(this).hasClass("newHeaderTDown_P")){
                newHeaderTDown_P= $(this).val();
                $("header .bottom nav li a p").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(newHeaderTDown_P);
            }   else if($(this).hasClass("newHeaderTDownHOV_P")){
                newHeaderTDownHOV_P= $(this).val();
                $("header .bottom nav li a p").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(newHeaderTDownHOV_P);
            }   else if($(this).hasClass("newHeaderTDown_Before")){
                newHeaderTDown_Before= $(this).val();
                $("header .bottom nav li").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(newHeaderTDown_Before);
            }   else if($(this).hasClass("downList_BG")){
                downList_BG= $(this).val();
                $("header .downList").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(downList_BG);
            }   else if($(this).hasClass("downList_Border")){
                downList_Border= $(this).val();
                $("header .downList").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(downList_Border);
            }   else if($(this).hasClass("downList_P")){
                downList_P= $(this).val();
                $("header .downList").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(downList_P);
            }   else if($(this).hasClass("downList_iBtn")){
                downList_iBtn= $(this).val();
                $("header .downList i").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(downList_iBtn);
            }   else if($(this).hasClass("innerPageLeftSide_userAccountP")){
                innerPageLeftSide_userAccountP= $(this).val();
                $("main.innerPage .center .leftSide p.userAccount").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(innerPageLeftSide_userAccountP);
            }   else if($(this).hasClass("innerPageLeftSide_userLevelBG")){
                innerPageLeftSide_userLevelBG= $(this).val();
                $("main.innerPage .center .leftSide p.userAccount .level").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(innerPageLeftSide_userLevelBG);
            }   else if($(this).hasClass("innerPageLeftSide_userLevelP")){
                innerPageLeftSide_userLevelP= $(this).val();
                $("main.innerPage .center .leftSide p.userAccount .level").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(innerPageLeftSide_userLevelP);
            }   else if($(this).hasClass("innerPageLeftSide_joinedDays")){
                innerPageLeftSide_joinedDays= $(this).val();
                $("main.innerPage .center .leftSide p.joinDay").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(innerPageLeftSide_userLevelP);
            }   else if($(this).hasClass("innerPageLeftSide_quickBtnP")){
                innerPageLeftSide_quickBtnP= $(this).val();
                $("main.innerPage .center .leftSide .quickSelect li .quickBtn").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(innerPageLeftSide_quickBtnP);
            }   else if($(this).hasClass("innerPageLeftSide_innerNavBG_HOV")){
                innerPageLeftSide_innerNavBG_HOV= $(this).val();
                $("main.innerPage .center .leftSide .content .innerNav li").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(innerPageLeftSide_innerNavBG_HOV);
            }   else if($(this).hasClass("innerPageLeftSide_innerNavP")){
                innerPageLeftSide_innerNavP= $(this).val();
                $("main.innerPage .center .leftSide .content .innerNav li").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(innerPageLeftSide_innerNavP);
            }   else if($(this).hasClass("innerPageLeftSide_innerNavP")){
                innerPageLeftSide_innerNavP= $(this).val();
                $("main.innerPage .center .leftSide .content .innerNav li").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(innerPageLeftSide_innerNavP);
            }   else if($(this).hasClass("innerPageLeftSide_innerNavI")){
                innerPageLeftSide_innerNavI= $(this).val();
                $("main.innerPage .center .leftSide .content .innerNav li").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(innerPageLeftSide_innerNavI);
            }   else if($(this).hasClass("innerPageLeftSide_innerNavI_HOV")){
                innerPageLeftSide_innerNavI_HOV= $(this).val();
                $("main.innerPage .center .leftSide .content .innerNav li").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(innerPageLeftSide_innerNavI_HOV);
            }   else if($(this).hasClass("innerPageLeftSide_innerNavBG_HOVbefore")){
                innerPageLeftSide_innerNavBG_HOVbefore= $(this).val();
                $("main.innerPage .center .leftSide .content .innerNav li").addClass("edited");
                $(this).closest(".colorBlock").find("p").text(innerPageLeftSide_innerNavBG_HOVbefore);
            }
        })

        $(':root').css('--newHeaderTOP_BG', newHeaderTOP_BG);
        $(':root').css('--vip_P', vip_P);
        $(':root').css('--user_P', user_P);
        $(':root').css('--total_P', total_P);
        $(':root').css('--platformUl_BG', platformUl_BG);
        $(':root').css('--platformUl_Border', platformUl_Border);
        $(':root').css('--platform_P', platform_P);
        $(':root').css('--platformMoney_P', platformMoney_P);
        $(':root').css('--newHeaderTOP_liP', newHeaderTOP_liP);
        $(':root').css('--newHeaderTOP_liP_HOV', newHeaderTOP_liP_HOV);
        $(':root').css('--newHeaderTOP_li_HOV', newHeaderTOP_li_HOV);
        $(':root').css('--newHeaderTDown_BG', newHeaderTDown_BG);
        $(':root').css('--newHeaderTDown_P', newHeaderTDown_P);
        $(':root').css('--newHeaderTDownHOV_P', newHeaderTDownHOV_P);
        $(':root').css('--newHeaderTDown_Before', newHeaderTDown_Before);
        $(':root').css('--downList_BG', downList_BG);
        $(':root').css('--downList_Border', downList_Border);
        $(':root').css('--downList_P', downList_P);
        $(':root').css('--innerPageLeftSide_userAccountP', innerPageLeftSide_userAccountP);
        $(':root').css('--innerPageLeftSide_userLevelBG', innerPageLeftSide_userLevelBG);
        $(':root').css('--innerPageLeftSide_userLevelP', innerPageLeftSide_userLevelP);
        $(':root').css('--innerPageLeftSide_joinedDays', innerPageLeftSide_joinedDays);
        $(':root').css('--innerPageLeftSide_quickBtnP', innerPageLeftSide_quickBtnP);
        $(':root').css('--innerPageLeftSide_innerNavBG_HOV', innerPageLeftSide_innerNavBG_HOV);
        $(':root').css('--innerPageLeftSide_innerNavP', innerPageLeftSide_innerNavP);
        $(':root').css('--innerPageLeftSide_innerNavI', innerPageLeftSide_innerNavI);
        $(':root').css('--innerPageLeftSide_innerNavI_HOV', innerPageLeftSide_innerNavI_HOV);
        $(':root').css('--innerPageLeftSide_innerNavBG_HOVbefore', innerPageLeftSide_innerNavBG_HOVbefore);
    })

    $("aside.colorSelector form .custom li .quickBtn").click(function(){
        $(".filter, .jumpWindow.quickBtnEdit")
        .addClass("display")
        .siblings().removeClass("display");
    })

    //按鈕客製
    $("aside.colorSelector form .custom .editbtn button").click(function(){
        var titleName = $(this).text();
        var n = $(this).closest("label").index();
      
        $(".filter, .jumpWindow.buttonEdit, .jumpWindow.buttonEdit .content .changeBlock:nth-of-type("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
      
        //抓取彈窗標題
        $(".filter .jumpWindow.buttonEdit .title p").text("編輯"+ titleName +"");
        $(".filter .jumpWindow.buttonEdit .content button")
        .text(titleName)
        .attr("class","btnStyle_"+ n +"");
         
        //關閉彈窗送出修改資訊
        $(".jumpWindow.buttonEdit button.closeCheck").click(function() {
            $(".filter")
            .removeClass("display");

            $("button").each(function(){
                
                if($(this).hasClass("btnStyle_"+ n +"")) {
                    $(this).addClass("edited");
                }
            });
        })
    })

     //顏色客製
    $(".filter .jumpWindow.buttonEdit .content input").on("change",function(){
    var btnStyle_1_BG1;
    var btnStyle_1_BG2;
    var btnStyle_1_BG3;
    var btnStyle_1_BG1_HOV;
    var btnStyle_1_BG2_HOV;
    var btnStyle_1_BG3_HOV;
    var btnStyle_1_Border;
    var btnStyle_1_Border_HOV;
    var btnStyle_1_P;
    var btnStyle_1_P_HOV;
    var btnStyle_2_BG1;
    var btnStyle_2_BG2;
    var btnStyle_2_BG3;
    var btnStyle_2_BG1_HOV;
    var btnStyle_2_BG2_HOV;
    var btnStyle_2_BG3_HOV;
    var btnStyle_2_Border;
    var btnStyle_2_Border_HOV;
    var btnStyle_2_P;
    var btnStyle_2_P_HOV;
    var btnStyle_3_BG1;
    var btnStyle_3_BG2;
    var btnStyle_3_BG3;
    var btnStyle_3_BG1_HOV;
    var btnStyle_3_BG2_HOV;
    var btnStyle_3_BG3_HOV;
    var btnStyle_3_Border;
    var btnStyle_3_Border_HOV;
    var btnStyle_3_P;
    var btnStyle_3_P_HOV;
    var btnStyle_4_BG1;
    var btnStyle_4_BG2;
    var btnStyle_4_BG3;
    var btnStyle_4_BG1_HOV;
    var btnStyle_4_BG2_HOV;
    var btnStyle_4_BG3_HOV;
    var btnStyle_4_Border;
    var btnStyle_4_Border_HOV;
    var btnStyle_4_P;
    var btnStyle_4_P_HOV;
    
        $(".filter .jumpWindow.buttonEdit .content input").each(function(){
        if($(this).hasClass("btnStyle_1_BG1")){
            btnStyle_1_BG1 = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_1_BG1);
        } else if($(this).hasClass("btnStyle_1_BG2")){
            btnStyle_1_BG2 = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_1_BG2);
        } else if($(this).hasClass("btnStyle_1_BG3")){
            btnStyle_1_BG3 = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_1_BG3);
        } else if($(this).hasClass("btnStyle_1_BG1_HOV")){
            btnStyle_1_BG1_HOV = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_1_BG1_HOV);
        } else if($(this).hasClass("btnStyle_1_BG2_HOV")){
            btnStyle_1_BG2_HOV = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_1_BG2_HOV);
        } else if($(this).hasClass("btnStyle_1_BG3_HOV")){
            btnStyle_1_BG3_HOV = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_1_BG3_HOV);
        } else if($(this).hasClass("btnStyle_1_Border")){
            btnStyle_1_Border = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_1_Border);
        } else if($(this).hasClass("btnStyle_1_Border_HOV")){
            btnStyle_1_Border_HOV = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_1_Border_HOV);
        } else if($(this).hasClass("btnStyle_1_P")){
            btnStyle_1_P = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_1_P);
        } else if($(this).hasClass("btnStyle_1_P_HOV")){
            btnStyle_1_P_HOV = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_1_P_HOV);
        } else if($(this).hasClass("btnStyle_2_BG1")){
            btnStyle_2_BG1 = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_2_BG1);
        } else if($(this).hasClass("btnStyle_2_BG2")){
            btnStyle_2_BG2 = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_2_BG2);
        } else if($(this).hasClass("btnStyle_2_BG3")){
            btnStyle_2_BG3 = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_2_BG3);
        } else if($(this).hasClass("btnStyle_2_BG1_HOV")){
            btnStyle_2_BG1_HOV = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_2_BG1_HOV);
        } else if($(this).hasClass("btnStyle_2_BG2_HOV")){
            btnStyle_2_BG2_HOV = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_2_BG2_HOV);
        } else if($(this).hasClass("btnStyle_2_BG3_HOV")){
            btnStyle_2_BG3_HOV = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_2_BG3_HOV);
        } else if($(this).hasClass("btnStyle_2_Border")){
            btnStyle_2_Border = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_2_Border);
        } else if($(this).hasClass("btnStyle_2_Border_HOV")){
            btnStyle_2_Border_HOV = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_2_Border_HOV);
        } else if($(this).hasClass("btnStyle_2_P")){
            btnStyle_2_P = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_2_P);
        } else if($(this).hasClass("btnStyle_2_P_HOV")){
            btnStyle_2_P_HOV = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_2_P_HOV);
        } else if($(this).hasClass("btnStyle_3_BG1")){
            btnStyle_3_BG1 = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_3_BG1);
        } else if($(this).hasClass("btnStyle_3_BG2")){
            btnStyle_3_BG2 = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_3_BG2);
        } else if($(this).hasClass("btnStyle_3_BG3")){
            btnStyle_3_BG3 = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_3_BG3);
        } else if($(this).hasClass("btnStyle_3_BG1_HOV")){
            btnStyle_3_BG1_HOV = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_3_BG1_HOV);
        } else if($(this).hasClass("btnStyle_3_BG2_HOV")){
            btnStyle_3_BG2_HOV = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_3_BG2_HOV);
        } else if($(this).hasClass("btnStyle_3_BG3_HOV")){
            btnStyle_3_BG3_HOV = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_3_BG3_HOV);
        } else if($(this).hasClass("btnStyle_3_Border")){
            btnStyle_3_Border = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_3_Border);
        } else if($(this).hasClass("btnStyle_3_Border_HOV")){
            btnStyle_3_Border_HOV = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_3_Border_HOV);
        } else if($(this).hasClass("btnStyle_3_P")){
            btnStyle_3_P = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_3_P);
        } else if($(this).hasClass("btnStyle_3_P_HOV")){
            btnStyle_3_P_HOV = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_3_P_HOV);
        } else if($(this).hasClass("btnStyle_4_BG1")){
            btnStyle_4_BG1 = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_4_BG1);
        } else if($(this).hasClass("btnStyle_4_BG2")){
            btnStyle_4_BG2 = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_4_BG2);
        } else if($(this).hasClass("btnStyle_4_BG3")){
            btnStyle_4_BG3 = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_4_BG3);
        } else if($(this).hasClass("btnStyle_4_BG1_HOV")){
            btnStyle_4_BG1_HOV = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_4_BG1_HOV);
        } else if($(this).hasClass("btnStyle_4_BG2_HOV")){
            btnStyle_4_BG2_HOV = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_4_BG2_HOV);
        } else if($(this).hasClass("btnStyle_4_BG3_HOV")){
            btnStyle_4_BG3_HOV = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_4_BG3_HOV);
        } else if($(this).hasClass("btnStyle_4_Border")){
            btnStyle_4_Border = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_4_Border);
        } else if($(this).hasClass("btnStyle_4_Border_HOV")){
            btnStyle_4_Border_HOV = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_4_Border_HOV);
        } else if($(this).hasClass("btnStyle_4_P")){
            btnStyle_4_P = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_4_P);
        } else if($(this).hasClass("btnStyle_4_P_HOV")){
            btnStyle_4_P_HOV = $(this).val();
            $(".jumpWindow.buttonEdit .content button").addClass("edited");
            $(this).closest(".colorBlock").find("p").text(btnStyle_4_P_HOV);
        }

        $(':root').css('--btnStyle_1_BG1', btnStyle_1_BG1);
        $(':root').css('--btnStyle_1_BG2', btnStyle_1_BG2);
        $(':root').css('--btnStyle_1_BG3', btnStyle_1_BG3);
        $(':root').css('--btnStyle_1_BG1_HOV', btnStyle_1_BG1_HOV);
        $(':root').css('--btnStyle_1_BG2_HOV', btnStyle_1_BG2_HOV);
        $(':root').css('--btnStyle_1_BG3_HOV', btnStyle_1_BG3_HOV);
        $(':root').css('--btnStyle_1_Border', btnStyle_1_Border);
        $(':root').css('--btnStyle_1_Border_HOV', btnStyle_1_Border_HOV);
        $(':root').css('--btnStyle_1_P', btnStyle_1_P);
        $(':root').css('--btnStyle_1_P_HOV', btnStyle_1_P_HOV);
        $(':root').css('--btnStyle_2_BG1', btnStyle_2_BG1);
        $(':root').css('--btnStyle_2_BG2', btnStyle_2_BG2);
        $(':root').css('--btnStyle_2_BG3', btnStyle_2_BG3);
        $(':root').css('--btnStyle_2_BG1_HOV', btnStyle_2_BG1_HOV);
        $(':root').css('--btnStyle_2_BG2_HOV', btnStyle_2_BG2_HOV);
        $(':root').css('--btnStyle_2_BG3_HOV', btnStyle_2_BG3_HOV);
        $(':root').css('--btnStyle_2_Border', btnStyle_2_Border);
        $(':root').css('--btnStyle_2_Border_HOV', btnStyle_2_Border_HOV);
        $(':root').css('--btnStyle_2_P', btnStyle_2_P);
        $(':root').css('--btnStyle_2_P_HOV', btnStyle_2_P_HOV);
        $(':root').css('--btnStyle_3_BG1', btnStyle_3_BG1);
        $(':root').css('--btnStyle_3_BG2', btnStyle_3_BG2);
        $(':root').css('--btnStyle_3_BG3', btnStyle_3_BG3);
        $(':root').css('--btnStyle_3_BG1_HOV', btnStyle_3_BG1_HOV);
        $(':root').css('--btnStyle_3_BG2_HOV', btnStyle_3_BG2_HOV);
        $(':root').css('--btnStyle_3_BG3_HOV', btnStyle_3_BG3_HOV);
        $(':root').css('--btnStyle_3_Border', btnStyle_3_Border);
        $(':root').css('--btnStyle_3_Border_HOV', btnStyle_3_Border_HOV);
        $(':root').css('--btnStyle_3_P', btnStyle_3_P);
        $(':root').css('--btnStyle_3_P_HOV', btnStyle_3_P_HOV);
        $(':root').css('--btnStyle_4_BG1', btnStyle_4_BG1);
        $(':root').css('--btnStyle_4_BG2', btnStyle_4_BG2);
        $(':root').css('--btnStyle_4_BG3', btnStyle_4_BG3);
        $(':root').css('--btnStyle_4_BG1_HOV', btnStyle_4_BG1_HOV);
        $(':root').css('--btnStyle_4_BG2_HOV', btnStyle_4_BG2_HOV);
        $(':root').css('--btnStyle_4_BG3_HOV', btnStyle_4_BG3_HOV);
        $(':root').css('--btnStyle_4_Border', btnStyle_4_Border);
        $(':root').css('--btnStyle_4_Border_HOV', btnStyle_4_Border_HOV);
        $(':root').css('--btnStyle_4_P', btnStyle_4_P);
        $(':root').css('--btnStyle_4_P_HOV', btnStyle_4_P_HOV);
        })
    })

    //修改部位展開切換
    $("aside.colorSelector form div.custom p.bigTitle").click(function(){
        $(this)
        .closest("div")
        .toggleClass("active");

        $("aside.colorSelector form div.preset")
        .toggleClass("active");
    })
    $("aside.colorSelector form div.custom p.type").click(function(){
        $(this)
        .closest("div")
        .addClass("active")
        .siblings().removeClass("active");
    })
})