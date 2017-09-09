Для использования библиотеки подключите в head HTML данный код 
<link rel="stylesheet" href="style.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">
</script>

а в body

<script type="text/javascript" src="js.js"></script>

Присвойте вашим кнопкам id 1,2,3

Ваши img должны иметь классы:movie,cartoon,serial в зависимости от категории

Если вам нужно больше категории просто добавьте еще кнопку с соответствующим id и добавьте в файл js.js данный код
var check№=true;
$("#Номер вашего id").click(function(){
	if(check№){
		$(this).css('border','1px solid rgba(163, 201, 178,0.2)');
		$(this).css('font-size','15px');
		check№=false;
	}else{
		$(this).css('border','5px solid rgba(163, 201, 178,0.2)');
		$(this).css('font-size','23px');
		check№=true;
	}
    $(".имя новой категории").fadeToggle();   
})
№-это соответствующии id номер новой кнопки
