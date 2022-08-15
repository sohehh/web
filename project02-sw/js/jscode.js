$(function(){
            
    //첫번째 항목
    var $bannNum=0;

    /*next btn를 클릭할때 이동*/
    $('#recommend .next').click(function(e){
        e.preventDefault();
        if($bannNum>=4){return false;}
        $bannNum++;
        console.log($bannNum);
        var $book_w = $('#recommend div>ul>li').outerWidth(true);
        $('#recommend-inner .layout-frame').animate({'left':-$book_w*$bannNum},400,function(){
            
            // .attr( attributeName, value )
        });
        console.log($book_w);
    });

    /*prev btn를 클릭할때: $bannNum--(1씩 감소하기) 1003px만큼 이동*/
    $('#recommend .prev').click(function(e){
        e.preventDefault();
        if($bannNum<=0)return false;
        $bannNum--;
        console.log($bannNum);
        var $book_w = $('#recommend div>ul>li').outerWidth(true);
        $('#recommend-inner .layout-frame').animate({'left':-$book_w*$bannNum},400,function(){
            
            // .attr( attributeName, value )
        });
    
    });
    

    /*prev btn를 클릭할때 옆으로 이동*/
    // $('.prev').click(function(e){
    //     e.preventDefault();
        
    //     if($bannNum<=0)return false;
    //     $bannNum--;
        
    //     $pare = $(this).parent();
        
    //     $sl = $pare.prev();
        
    //     $result ="#"+$sl.attr('id')+" div>ul>li"
        
    //     $left = $($result).outerWidth(true);
    //     $layoutframe ="#"+$sl.attr('id')+' .layout-frame';
        
    //     $($layoutframe).animate({'left':-($left*$bannNum)},400,function(){
            
    //     });
    
    // });
    /*스와이프*/
    // $('#recommend').bind('swipeleft',function(){
    //     $('#recommend .next').trigger('click');
    // });

    // $('#recommend').bind('swiperight',function(){
    //     $('#recommend .prev').trigger('click');
    // });

});

$(function(){
    //두번째 항목
    var $bannNum=0;

    /*next btn를 클릭할때: $bannNum++(1씩증가하기) 1003px만큼 이동*/
    $('#sale-product .next').click(function(e){
        e.preventDefault();
        if($bannNum>=4){return false;}
        $bannNum++;
        console.log($bannNum);
        var $book_w = $('#sale-product div>ul>li').outerWidth(true);
        $('#sale-product .layout-frame').animate({'left':-$book_w*$bannNum},400,function(){
            
            // .attr( attributeName, value )
        });
        console.log($book_w);
    });

    /*prev btn를 클릭할때: $bannNum--(1씩 감소하기) 1003px만큼 이동*/
    $('#sale-product .prev').click(function(e){
        e.preventDefault();
        if($bannNum<=0)return false;
        $bannNum--;
        console.log($bannNum);
        var $book_w = $('#sale-product div>ul>li').outerWidth(true);
        $('#sale-product .layout-frame').animate({'left':-$book_w*$bannNum},400,function(){
            
            // .attr( attributeName, value )
        });
    
    });
});

$(function(){
    //두번째 항목
    var $bannNum=0;

    /*next btn를 클릭할때: $bannNum++(1씩증가하기) 1003px만큼 이동*/
    $('#review .next').click(function(e){
        e.preventDefault();
        if($bannNum>=4){return false;}
        $bannNum++;
        console.log($bannNum);
        var $book_w = $('#review div>ul>li').outerWidth(true);
        $('#review .layout-frame').animate({'left':-$book_w*$bannNum},400,function(){
            
            // .attr( attributeName, value )
        });
        console.log($book_w);
    });

    /*prev btn를 클릭할때: $bannNum--(1씩 감소하기) 1003px만큼 이동*/
    $('#review .prev').click(function(e){
        e.preventDefault();
        if($bannNum<=0)return false;
        $bannNum--;
        console.log($bannNum);
        var $book_w = $('#review div>ul>li').outerWidth(true);
        $('#review .layout-frame').animate({'left':-$book_w*$bannNum},400,function(){
            
            // .attr( attributeName, value )
        });
    
    });
});

$(function(){
//두번째 항목
var $bannNum=0;

/*next btn를 클릭할때: $bannNum++(1씩증가하기) 1003px만큼 이동*/
$('#present .next').click(function(e){
    e.preventDefault();
    if($bannNum>=4){return false;}
    $bannNum++;
    console.log($bannNum);
    var $book_w = $('#present-inner div>ul>li').outerWidth(true);
    $('#present-inner .layout-frame').animate({'left':-$book_w*$bannNum},400,function(){
        
        // .attr( attributeName, value )
    });
    console.log($book_w);
});

/*prev btn를 클릭할때: $bannNum--(1씩 감소하기) 1003px만큼 이동*/
$('#present .prev').click(function(e){
    e.preventDefault();
    if($bannNum<=0)return false;
    $bannNum--;
    console.log($bannNum);
    var $book_w = $('#present-inner div>ul>li').outerWidth(true);
    $('#present-inner .layout-frame').animate({'left':-$book_w*$bannNum},400,function(){
        
        // .attr( attributeName, value )
    });

});
});

    