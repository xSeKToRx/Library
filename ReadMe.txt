��� ������������� ���������� ���������� � head HTML ������ ��� 
<link rel="stylesheet" href="style.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">
</script>

� � body

<script type="text/javascript" src="js.js"></script>

��������� ����� ������� id 1,2,3

���� img ������ ����� ������:movie,cartoon,serial � ����������� �� ���������

���� ��� ����� ������ ��������� ������ �������� ��� ������ � ��������������� id � �������� � ���� js.js ������ ���
var check�=true;
$("#����� ������ id").click(function(){
	if(check�){
		$(this).css('border','1px solid rgba(163, 201, 178,0.2)');
		$(this).css('font-size','15px');
		check�=false;
	}else{
		$(this).css('border','5px solid rgba(163, 201, 178,0.2)');
		$(this).css('font-size','23px');
		check�=true;
	}
    $(".��� ����� ���������").fadeToggle();   
})
�-��� ��������������� id ����� ����� ������
