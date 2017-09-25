 $(function(){

 	// 显示隐藏
	var n = 1;
		$('#shopping_commend_arrow').click(function () {
		
		if (n==1) {
		$('#shopping_commend_arrow').attr('src','images/shopping_arrow_down.gif')
		n = 2;
		}else{
			$('#shopping_commend_arrow').attr('src','images/shopping_arrow_up.gif')
			n = 1;
		}
		$('#shopping_commend_sort').toggle();
	})


	// 商品的删除
	$('#myTableProduct .blue').click(function () {

		index=$(this).index();
		$('#myTableProduct tr').eq(index).remove();
	})

	// 商品的数量和价格计算
	
	// 单价
	
	$('.shopping_product_list_5').click(function () {
		console.log($(this).index())
		var index=$(this).index();
		// console.log(typeof($('.shopping_product_list_5'))
		// $('.shopping_product_list_5:eq(index) input').val('hahaha')
	})
		

/*	$('.shopping_list_end_1 input').click(function () {
		// 积分
		// index = $(this).index();
		var zj = 0;
		var oli = $('.shopping_product_list')
		for (var i = 0; i < oli.length; i++) {
			
		jifen = $('.shopping_product_list:eq(i) .shopping_product_list_2 label').text();
		shu = $('.shopping_product_list:eq(i) .shopping_product_list_5 input').val();
		zj = jifen*shu;
		// s = zj+num;
		num = zj;		};
		
		console.log(zj)
		
	})
*/
})	