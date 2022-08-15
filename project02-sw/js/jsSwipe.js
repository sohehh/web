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