var check1=true;
var check2=true;
var check3=true;
$("#1").click(function(){
	if(check1){
		$(this).css('border','1px solid rgba(163, 201, 178,0.2)');
		$(this).css('font-size','15px');
		check1=false;
	}else{
		$(this).css('border','5px solid rgba(163, 201, 178,0.2)');
		$(this).css('font-size','23px');
		check1=true;
	}
    $(".movie").fadeToggle();   
})
$("#2").click(function(){
	if(check2){
		$(this).css('border','1px solid rgba(163, 201, 178,0.2)');
		$(this).css('font-size','15px');
		check2=false;
	}else{
		$(this).css('border','5px solid rgba(163, 201, 178,0.2)');
		$(this).css('font-size','23px');
		check2=true;
	}
   $(".cartoon").fadeToggle();
})
$("#3").click(function(){
	if(check3){
		$(this).css('border','1px solid rgba(163, 201, 178,0.2)');
		$(this).css('font-size','15px');
		check3=false;
	}else{
		$(this).css('border','5px solid rgba(163, 201, 178,0.2)');
		$(this).css('font-size','23px');
		check3=true;
	}
    $(".serial").fadeToggle();
})