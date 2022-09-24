var data=[];

function getDateTime() {
     var currentDate = new Date();
     var year    = currentDate.getFullYear();
     var month   = currentDate.getMonth()+1; 
     var day     = currentDate.getDate();
     var hour    = currentDate.getHours();
     var minute  = currentDate.getMinutes();
     var second  = currentDate.getSeconds(); 

     if(month.toString().length == 1) {
          month = '0'+month;
     }
     if(day.toString().length == 1) {
          day = '0'+day;
     }   
     if(hour.toString().length == 1) {
          hour = '0'+hour;
     }
     if(minute.toString().length == 1) {
          minute = '0'+minute;
     }
     if(second.toString().length == 1) {
          second = '0'+second;
     }   
     var dateTime = month+'/'+day+'/'+year+' '+hour+':'+minute+':'+second;   
      return dateTime;
 }

 setInterval(function(){
     dateTime = getDateTime();
     document.getElementById("currentDay").innerHTML = dateTime;
 }, 1000);


 function saveUserInput () {//saves
     $('div[class="row time-block"]').each(function(){
           let id = $(this).attr("id");
           localStorage.setItem(id,$(this).children('textarea').val());
      });
 }
 function userData (){//loads
     $('div[class="row time-block"]').each(function(){
           let id = $(this).attr("id");
           $(this).children('textarea').val(localStorage.getItem(id));
     });
 }
 window.onload = function() {
     userData();
 };