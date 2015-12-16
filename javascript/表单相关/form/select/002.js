/**
 * @description 判断select中是否存在指定value的option
 * @author 刘放 brizer1992@outlook.com
 * @date 2015/12/16 15:45　
 */
function hasItem(select,value){
	var has = false;
	for(var i=0;i<select.options.length;i++){
		if(select.options[i].value == value){
			has = true;
			break;
		}
	}
	console.log(has);
	//return has;
}
/**
 * @description 得到select当前选中项的value
 * @author 刘放 brizer1992@outlook.com 
 * @date 2015/12/16 15:54
 */
function getItemValue(select){
	//var curSelectValue = select.options[select.selectedIndex].value;
	var curSelectValue = select.value;
	console.log(curSelectValue);
	//return curSelectValue;
}

/**
 * @description 得到select当前选中项的index
 * @author 刘放 brizer1992@outlook.com 
 * @date 2015/12/16 15:56
 */
function getItemIndex(select){
	var curSelectIndex = select.selectedIndex;
	console.log(curSelectIndex);
	//return curSelectIndex;
}

/**
 * @description 得到select当前选中项的text
 * @author 刘放 brizer1992@outlook.com 
 * @date 2015/12/16 15:57
 */
function getItemText(select){
	var curSelectText = select.options[select.selectedIndex].text;
	console.log(curSelectText);
	//return curSelectText;
}
/**
 * @description 设置select选中值为value的项
 * @author 刘放 brizer1992@outlook.com 
 * @date 2015/12/16 16:03
 */
function setItemByValue(select,value){
	select.value = value;
}
/**
 * @description 设置select选中文本为text的项
 * @author 刘放 brizer1992@outlook.com 
 * @date 2015/12/16 16:09
 */
function setItemByText(select,text){
	for(var i=0;i<select.options.length;i++){
		if(select.options[i].text == text){
			select.options[i].selected = true;
			break;
		}
	}
} 
/**
 * @description 删除select选中的项
 * @author 刘放 brizer1992@outlook.com 
 * @date 2015/12/16 16:13
 */
function removeSelectedItem(select){
	var length = select.options.length - 1;
	for(var i = length;i>=0;i--){
		if(select.options[i].selected == true){
			select.options[i] = null;
		}
	}
}
/**
 * @description 删除select所有的项
 * @author 刘放 brizer1992@outlook.com 
 * @date 2015/12/16 16:13
 */
function removeAllItems(select){
	select.options.length = 0;
}
