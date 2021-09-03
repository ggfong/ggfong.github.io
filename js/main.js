    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    var nowTime = year + "-" + month + "-" + day + " " + hour + ":" + minutes;
    parseInt(Math.random()*(4-0+1)+0,10);
    var ID = Math.floor(Math.random()*(4-0+1)+0);
    var studentName=new Array("陈禹","夏宇杰","方桂宝","丁展维","陈佳龙");
    var studentID=new Array("20032052203","20032052219","20032052224","20032052231","20032052241");
    var phone=new Array("18969828292","18557984406","15067341102","17857375860","13958352931");
    var idCard=new Array("632323190605264560","632323190605260703","632323190605263701","632323190605260367","632323190605262186");

    document.getElementById("sqsj").innerHTML = nowTime;
    document.getElementById("wcsj").value = nowTime;
    document.getElementById("spsj").innerHTML = nowTime;
    document.getElementById("date1").innerHTML = nowTime;
    document.getElementById("date2").innerHTML = nowTime;
    document.getElementById("fxsj").value = year + "-" + month + "-" + day + " " + "22" + ":" + "00";


    document.getElementById("uuid").innerHTML = 'RE'+createUUID(12, 10);
    document.getElementById("studentName").innerHTML = studentName[ID];
    document.getElementById("name2").innerHTML = studentName[ID];
    document.getElementById("phone").innerHTML = phone[ID];
    document.getElementById("idCard").innerHTML = idCard[ID];
    document.getElementById("disc").innerHTML = studentName[ID]+" 提交了该工单!";
    document.getElementById("studentID").innerHTML = studentID[ID];
    var srcc="./img/"+String(ID)+".png";
    document.getElementById("img").src=srcc;
    function createUUID(len, radix) {
        var chars = '0123456789'.split('');
        var uuid = [], i;
        radix = radix || chars.length;
         if(len){
          for (i = 0; i < len; i++){
               uuid[i] = chars[0 | Math.random()*radix];
           } 
         }
         return uuid.join('');
    }
    function btn1(){ 
    document.getElementById('tab1').style.display='';
    document.getElementById('tab2').style.display='none';
    document.getElementById('tab3').style.display='none';
    document.getElementById('tab4').style.display='none';
    document.getElementById('btn1').className='weui-navbar__item weui-bar__item_on';
    document.getElementById('btn2').className='weui-navbar__item';
    document.getElementById('btn3').className='weui-navbar__item';
    document.getElementById('btn4').className='weui-navbar__item';
    } 
    function btn2(){ 
    document.getElementById('tab2').style.display='';
    document.getElementById('tab1').style.display='none';
    document.getElementById('tab3').style.display='none';
    document.getElementById('tab4').style.display='none';
    document.getElementById('btn2').className='weui-navbar__item weui-bar__item_on';
    document.getElementById('btn1').className='weui-navbar__item';
    document.getElementById('btn3').className='weui-navbar__item';
    document.getElementById('btn4').className='weui-navbar__item';
    } 
    function btn3(){ 
    document.getElementById('tab3').style.display='';
    document.getElementById('tab2').style.display='none';
    document.getElementById('tab1').style.display='none';
    document.getElementById('tab4').style.display='none';
    document.getElementById('btn3').className='weui-navbar__item weui-bar__item_on';
    document.getElementById('btn2').className='weui-navbar__item';
    document.getElementById('btn1').className='weui-navbar__item';
    document.getElementById('btn4').className='weui-navbar__item';
    } 
    function btn4(){ 
    document.getElementById('tab4').style.display='';
    document.getElementById('tab2').style.display='none';
    document.getElementById('tab3').style.display='none';
    document.getElementById('tab1').style.display='none';
    document.getElementById('btn4').className='weui-navbar__item weui-bar__item_on';
    document.getElementById('btn2').className='weui-navbar__item';
    document.getElementById('btn3').className='weui-navbar__item';
    document.getElementById('btn1').className='weui-navbar__item';
    }
