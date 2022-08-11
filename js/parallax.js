$(function(){
    var $section = $('#parallax>div');
    var $sectionInfo=[];

    $section.each(function(){
        var $this=$(this);
        $sectionInfo.push($this.offset().top);

        // //3.object에 시간차를 두고 섹션과 반대로 움직임 주기
		// objectInfo.push([]);
		// var child=$('#aboutMe h2')
		// child.each(function(j){
		// 	var t=$(this);
		// 	objectInfo[i][j]=t.position().top;
		// 	//console.log(objectInfo[i][j]);//object top
		// });

    });
    
    $section.css({position:'fixed'});
    $(window).scroll(function(){
        var sct = $(this).scrollTop();
        $section.each(function(idx){
            var $this=$(this);
            var $newtop =-1*sct+$sectionInfo[idx];

            if(sct>$sectionInfo[idx]){
                $newtop = $newtop * 0.5;
            }
            $this.css({top:$newtop});
          
            
        });
        //console.log($('.right-content').offset().top);
        
    });


});