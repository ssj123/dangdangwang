// 分类列表
var bookSort=new Array(……"科幻(513)","武侠(574)"……);
var html=[ ];
$.each(bookSort, function(i, n){
    html.push("<li> ·<a href='#' class='blue'>"+n+"</a></li>")
});
$(“#product_catList_class”).html(html.join(" "));


// 大图切换
