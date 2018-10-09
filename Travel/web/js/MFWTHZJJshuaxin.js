var namearr=["小丽","小朱","小张","小雪"];
var wenxinNum=["18974412662","18974465662","17680515800","18797501900"];
var phone=["18974412662","18974465662","17680515800","18797501900"];
var phoneCallArr=["tel:18974412662","tel:18974465662","tel:17680515800","tel:18797501900"];
var imgarr=["img/xiaoli.jpg","img/xiaozhu.jpg","img/xiaozhang.jpg","img/xiaoxue.jpg"];
var date = new Date();  //创建对象 
var ranNum =  date.getSeconds()%namearr.length;
//var countNum = 0;

$(document).ready(function (){

// countNum = parseInt($("#countNum").val());
// console.log(countNum);
// ranNum =  countNum%namearr.length;
   console.log(ranNum);
   cookief();
   changef();
});

function cookief(){
//	    if(getWork != null){
//	    	$.cookie('phoneT', getWork,{ expires: 365 }); 
//	    }
//	    alert(document.cookie);
			if($.cookie('phoneT')==""||$.cookie('phoneT')=="null"){
				console.log("phoneT:NULL");
				$.cookie('phoneT', phone[ranNum],{ expires: 365 }); 
			}
			//console.log(document.cookie);
			var temp;
			var phone0;
			
      phone0 = $.cookie('phoneT');
      console.log("phoneT:"+phone0);
//			alert(phone0);
			for(temp=0;temp<phone.length;temp++){
				if(phone0==phone[temp]){
					ranNum = temp;
					console.log(ranNum);
					break;
				}
			}
			
			if(temp==phone.length){
				$.cookie('phoneT', phone[ranNum],{ expires: 365 }); 
			}
   }

function changef(){
	 console.log(ranNum);
	 $(".nameChange").text(namearr[ranNum]);
	 $(".weixinNumChange").text(wenxinNum[ranNum]);
	 $(".phoneChange").text(phone[ranNum]);
	 $(".phoneCall").attr("href",phoneCallArr[ranNum]);
	  $(".imgChange").attr("src",imgarr[ranNum]);

  }
