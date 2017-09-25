$(function () {
	// 弹出广告
	window.open('open.html','width=300,height=400');
	// 固定广告
     $('.right').css({'position':'fixed',
                        'top':'100px'})

// 轮播图
     $('#scroll_number>li').eq(0).css('background','#999999');
      $('#scroll_number>li').mouseenter(function (){
            // $(this).addClass('current').siblings().removeClass('current');
            
             clearInterval(t);

            var index=$(this).index();
            $('#scroll_img>li').eq(index).stop().slideDown().siblings().stop().slideUp()
             $('#scroll_number>li').eq(index).css('background','#999999');
             $('#scroll_number>li').eq(index).siblings().css('background','#f2f2f3')
        })
       $('#scroll_number>li').mouseleave(function () {
         t = setInterval(play,3000);
       })
      //自动播放

  var n = 0;
  var t;

  t = setInterval(play,3000)
function play() {
    n++;
    if (n > $('#scroll_number>li').length-1) {
        n = 0;;
    }

   $('#scroll_img>li').eq(n).stop().slideDown().siblings().stop().slideUp()
   $('#scroll_number>li').eq(n).css('background','#999999');
   $('#scroll_number>li').eq(n).siblings().css('background','#f2f2f3')
};


      // 选项卡
      $('#bookTab>.book_new>.book_type').mouseenter(function(){
           var index=$(this).index()-1;
            $('.book_class').css('overflow','hidden');

            $(this).addClass('book_type_out')
            .siblings().removeClass('book_type_out');
        
            $('.book_class>dl').eq(index).toggleClass("book_show");
             $('.book_class>dl').eq(index).stop().fadeIn().siblings().stop().fadeOut();

             // $('#bookTab>.book_new>.book_type').eq(index).addClass("book_type_out");
             // $('#bookTab>.book_new>.book_type').eq(index).siblings().removeClass('book_type_out')

            // .siblings().addClass('book_none')
         	 // $('#bookTab .book_class dl').eq(index).removeClass('book_none')
         	 // .siblings().addClass('book_none')
            
         })

})



// 书签无缝向上滚动
var _this = $('#dome1').children();
var lineH = _this.find("li:first").height();
// var upHeight = 0 - line * lineH;
// var speed = opt.speed ? parseInt(opt.speed, 10) : 500;
/*     scrollUp = function() {
            _this.animate({
                marginTop: '-26px'
            }, 800, function() {
                for (i = 1; i <= 100; i++) {
                    _this.find("li:first").appendTo(_this);
                }
                _this.css({
                    marginTop: 0
                });
            });
        }
timerID = setInterval(scrollUp, 1000);*/

var n1 = 0;
var top = 0;
console.log(_this)
s = setInterval(animatea,2000);
function animatea() {
  // top = parseInt(-26*n1);
  // console.log(top)
  // index = $(this).index;
  // n1++;
  // if (n1 = 100) {
  //   n1 = 0;
  // }
 
  $('#dome1 #express').animate({marginTop:'-26px'},800,function () {
        for (i = 1; i <= 38; i++) {
            
           

        } 
        $('#express li:first').appendTo('#express');
        // $('#express>li:first').remove();
       
        $('#express').css({
            marginTop: 0
        });
  });

  // $('#dome1 #express').append(this.index.text)
}

// 鼠标移入清除定时器 移出添加定时器
$('#dome1').mouseenter = function () {
  clearInterval(s)
}
$('#dome1').mouseleave = function () {
  s = setInterval(animatea,2000);
}