<?php
$mypic = $_FILES['mypic'];
if(!empty($mypic)){
	$picname = $_FILES['mypic']['name'];
	$picsize = $_FILES['mypic']['size'];
	if($picsize > 512000){
		echo '图片不能超过500k';
		exit;
	}
	$type = strstr($picname,'.');
	if($type != ".git" && $type !=".jpg"){
		echo '图片格式不对';
		exit;
	}
	//上传路径
	$pic_path = "./"."lf".$type;
	move_uploaded_file($mypic["tmp_name"],$pic_path);

}