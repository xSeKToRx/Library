

$("button").click(function(){
	
	$("button").css('border','1px solid rgba(163, 201, 178,0.2)');
	$("button").css('font-size','15px');
	$(this).css('border','5px solid rgba(163, 201, 178,0.2)');
	$(this).css('font-size','23px');
	
	var imgWidth = '140px';
	var thisItem 	= $(this).attr('rel');
	if(thisItem != "all") {

		$('.item li[rel='+thisItem+']').stop()
		.animate({'width' : imgWidth, 
			'opacity' : 1, 
			'marginRight' : '20px', 
			'marginLeft' : '20px'
		});

		$('.item li[rel!='+thisItem+']').stop()
		.animate({'width' : 0, 
			'opacity' : 0,
			'marginRight' : 0, 
			'marginLeft' : 0
		});
	} else {

		$('.item li').stop()
		.animate({'opacity' : 1, 
			'width' : imgWidth, 
			'marginRight' : '20px', 
			'marginLeft' : '20px'
		});
	}
});

	