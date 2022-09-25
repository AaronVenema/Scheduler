var data=[];
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));
function Color() {
     var pageTime = moment().hours();

     $(".time-block").each(function() {
          var actualTime = parseInt($(this).attr("id"));

          // console.log(this); //each time-block

          if (actualTime > pageTime) {
          $(this).addClass("future");
          } else if (actualTime === pageTime) {
          $(this).addClass("current");
          } else {
          $(this).addClass("past");
          }
     })
};

function saveUserInput (button) {//saves
     let $timeBlock = $(button).closest(".time-block");
     let storage = $timeBlock.attr("id");
     if ($timeBlock.children('textarea').val() === "")
     {
          alert("please enter some text");
     }
     localStorage.setItem(storage, $timeBlock.children('textarea').val());
}

function userData (){//loads
     $('div[class="row time-block"]').each(function(){
          let storage = $(this).attr("id");
          $(this).children('textarea').val(localStorage.getItem(storage));
     });
}

userData();
Color();