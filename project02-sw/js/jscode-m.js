$(function() {
    var x = 0;
    var tabx = 0;
    var xx = 0;
    var li_width=0;
    for(i=1; i<9; i++){
        li_width+=$(".header-bottom-list2 li:nth-child("+i+")").width();
    }
    
    var limit = li_width - $(".header-bottom-frame").width();
    $(".header-bottom-list2").bind('touchstart', function(e) {
        var event = e.originalEvent;
        x = event.touches[0].screenX;
        tabx = $(".header-bottom-list2").css("transform").replace(/[^0-9\-.,]/g, '').split(',')[4];
    });
    $(".header-bottom-list2").bind('touchmove', function(e) {
        var event = e.originalEvent;
        xx = parseInt(tabx) + parseInt(event.touches[0].screenX - x);
        $(".header-bottom-list2").css("transform", "translate(" + xx + "px, 0px)");
        event.preventDefault();
    });
    $(".header-bottom-list2").bind('touchend', function(e) {
        if ((xx > 0) && (tabx <= 0)) {
        $(".header-bottom-list2").css("transform", "translate(0px, 0px)");
        }
        if (Math.abs(xx) > limit) {
        $(".header-bottom-list2").css("transform", "translate(" + -limit + "px, 0px)");
        }
    });

    });

    $(function() {
    var x = 0;
    var tabx = 0;
    var xx = 0;
    var limit = (($("#recommend-inner .layout-frame ul li").outerWidth(true)*7)+$("#recommend-inner .layout-frame ul li").outerWidth()) - $("#recommend").width();
    
    $("#recommend-inner .layout-frame").bind('touchstart', function(e) {
        var event = e.originalEvent;
        x = event.touches[0].screenX;
        tabx = $("#recommend-inner .layout-frame").css("transform").replace(/[^0-9\-.,]/g, '').split(',')[4];
    });
    $("#recommend-inner .layout-frame").bind('touchmove', function(e) {
        var event = e.originalEvent;
        xx = parseInt(tabx) + parseInt(event.touches[0].screenX - x);
        $("#recommend-inner .layout-frame").css("transform", "translate(" + xx + "px, 0px)");
        event.preventDefault();
    });
    $("#recommend-inner .layout-frame").bind('touchend', function(e) {
        if ((xx > 0) && (tabx <= 0)) {
        $("#recommend-inner .layout-frame").css("transform", "translate(0px, 0px)");
        }
        if (Math.abs(xx) > limit) {
        $("#recommend-inner .layout-frame").css("transform", "translate(" + -limit + "px, 0px)");
        }
    });

    });

    $(function() {
    var x = 0;
    var tabx = 0;
    var xx = 0;
    var limit = (($("#sale-product-inner .layout-frame ul li").outerWidth(true)*7)+$("#sale-product-inner .layout-frame ul li").outerWidth()) - $("#sale-product").width();
    
    $("#sale-product-inner .layout-frame").bind('touchstart', function(e) {
        var event = e.originalEvent;
        x = event.touches[0].screenX;
        tabx = $("#sale-product-inner .layout-frame").css("transform").replace(/[^0-9\-.,]/g, '').split(',')[4];
    });
    $("#sale-product-inner .layout-frame").bind('touchmove', function(e) {
        var event = e.originalEvent;
        xx = parseInt(tabx) + parseInt(event.touches[0].screenX - x);
        $("#sale-product-inner .layout-frame").css("transform", "translate(" + xx + "px, 0px)");
        event.preventDefault();
    });
    $("#sale-product-inner .layout-frame").bind('touchend', function(e) {
        if ((xx > 0) && (tabx <= 0)) {
        $("#sale-product-inner .layout-frame").css("transform", "translate(0px, 0px)");
        }
        if (Math.abs(xx) > limit) {
        $("#sale-product-inner .layout-frame").css("transform", "translate(" + -limit + "px, 0px)");
        }
    });

    });

    $(function() {
    var x = 0;
    var tabx = 0;
    var xx = 0;
    var limit = (($("#review-inner .layout-frame ul li").outerWidth(true)*7)+$("#review-inner .layout-frame ul li").outerWidth()) - $("#review").width();
    
    $("#review-inner .layout-frame").bind('touchstart', function(e) {
        var event = e.originalEvent;
        x = event.touches[0].screenX;
        tabx = $("#review-inner .layout-frame").css("transform").replace(/[^0-9\-.,]/g, '').split(',')[4];
    });
    $("#review-inner .layout-frame").bind('touchmove', function(e) {
        var event = e.originalEvent;
        xx = parseInt(tabx) + parseInt(event.touches[0].screenX - x);
        $("#review-inner .layout-frame").css("transform", "translate(" + xx + "px, 0px)");
        event.preventDefault();
    });
    $("#review-inner .layout-frame").bind('touchend', function(e) {
        if ((xx > 0) && (tabx <= 0)) {
        $("#review-inner .layout-frame").css("transform", "translate(0px, 0px)");
        }
        if (Math.abs(xx) > limit) {
        $("#review-inner .layout-frame").css("transform", "translate(" + -limit + "px, 0px)");
        }
    });

    });

    $(function() {
    var x = 0;
    var tabx = 0;
    var xx = 0;
    var limit = (($("#present-inner .layout-frame ul li").outerWidth(true)*7)+$("#present-inner .layout-frame ul li").outerWidth()) - $("#present").width();
    
    $("#present-inner .layout-frame").bind('touchstart', function(e) {
        var event = e.originalEvent;
        x = event.touches[0].screenX;
        tabx = $("#present-inner .layout-frame").css("transform").replace(/[^0-9\-.,]/g, '').split(',')[4];
    });
    $("#present-inner .layout-frame").bind('touchmove', function(e) {
        var event = e.originalEvent;
        xx = parseInt(tabx) + parseInt(event.touches[0].screenX - x);
        $("#present-inner .layout-frame").css("transform", "translate(" + xx + "px, 0px)");
        event.preventDefault();
    });
    $("#present-inner .layout-frame").bind('touchend', function(e) {
        if ((xx > 0) && (tabx <= 0)) {
        $("#present-inner .layout-frame").css("transform", "translate(0px, 0px)");
        }
        if (Math.abs(xx) > limit) {
        $("#present-inner .layout-frame").css("transform", "translate(" + -limit + "px, 0px)");
        }
    });

    });

    

$(function() {
var x = 0;
var tabx = 0;
var xx = 0;
var li_width=0;
    for(i=1; i<6; i++){
        li_width+=$("#sale-product nav ul li:nth-child("+i+")").width();
    }
var limit = li_width - $("#sale-product nav").width();
$("#sale-product nav ul").bind('touchstart', function(e) {
    var event = e.originalEvent;
    x = event.touches[0].screenX;
    tabx = $("#sale-product nav ul").css("transform").replace(/[^0-9\-.,]/g, '').split(',')[4];
});
$("#sale-product nav ul").bind('touchmove', function(e) {
    var event = e.originalEvent;
    xx = parseInt(tabx) + parseInt(event.touches[0].screenX - x);
    $("#sale-product nav ul").css("transform", "translate(" + xx + "px, 0px)");
    event.preventDefault();
});
$("#sale-product nav ul").bind('touchend', function(e) {
    if ((xx > 0) && (tabx <= 0)) {
    $("#sale-product nav ul").css("transform", "translate(0px, 0px)");
    }
    if (Math.abs(xx) > limit) {
    $("#sale-product nav ul").css("transform", "translate(" + -limit + "px, 0px)");
    }
});

});

$(function() {
    var x = 0;
    var tabx = 0;
    var xx = 0;
    var limit = (($("#hot-brand-m .layout-frame ul li").outerWidth(true)*4)+$("#hot-brand-m .layout-frame ul li").outerWidth()) - $("#hot-brand-m").width();
    
    $("#hot-brand-m .layout-frame").bind('touchstart', function(e) {
        var event = e.originalEvent;
        x = event.touches[0].screenX;
        tabx = $("#hot-brand-m .layout-frame").css("transform").replace(/[^0-9\-.,]/g, '').split(',')[4];
    });
    $("#hot-brand-m .layout-frame").bind('touchmove', function(e) {
        var event = e.originalEvent;
        xx = parseInt(tabx) + parseInt(event.touches[0].screenX - x);
        $("#hot-brand-m .layout-frame").css("transform", "translate(" + xx + "px, 0px)");
        event.preventDefault();
    });
    $("#hot-brand-m .layout-frame").bind('touchend', function(e) {
        if ((xx > 0) && (tabx <= 0)) {
        $("#hot-brand-m .layout-frame").css("transform", "translate(0px, 0px)");
        }
        if (Math.abs(xx) > limit) {
        $("#hot-brand-m .layout-frame").css("transform", "translate(" + -limit + "px, 0px)");
        }
    });

    });
    //$("footer").after("<div>1644-7202</div>");
    // $(window).resize(function(){ 
    //     if (window.innerWidth <767) {  // 다바이스 크기가 480이상일때 
        
    //     /* 스크립트내용*/ 
    //     $("ul.footer-m-top").after("<div>1644-7202</div>");
    //     } else {
        
    //     /* 스크립트내용*/ 
        
    //     }
        
    //     }).resize(); 
    //     //출처: https://hongpage.kr/20 [홍페이지 HONGPAGE:티스토리]
    


