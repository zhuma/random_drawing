/**
 * Created by hanshaojie-pc on 2017/3/8.
 */
window.onload= function () {
    var oBox=document.getElementById("box");
    var oLi=oBox.getElementsByTagName("li");
    var num=0;
    var timer=null;
    var arr=[0,1,2,3,4,5,6,7];
    var targetTime=1500;
    oLi[oLi.length-1].onclick= function () {
        clearInterval(timer);
        var delayTime=50;
        num=arr[Math.floor(Math.random()*arr.length)];
        timer=setInterval(function () {
            var iSpeed=Math.ceil((targetTime-delayTime)/8);
            delayTime+=iSpeed;
            for(var i=0; i<oLi.length-1; i++){
                oLi[i].className="";
            }
            if(num>oLi.length-2){
                num=0;
            }
            oLi[num].className="ani";
            if(delayTime >= targetTime){
                for(var i=0; i<oLi.length-1; i++){
                    oLi[i].className="";
                }
                oLi[num].className="nowLi";
                clearInterval(timer);
            }
            num++;
        },delayTime)
    }
};