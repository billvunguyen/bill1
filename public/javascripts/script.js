function Alert()
{
var a = document.getElementById("a").value;

switch(a) {
  case "1":
    alert("Cám ơn đánh giá của bạn")
    break;
  case "2":
    alert("Cám ơn đánh giá của bạn")
    break;
  case "3":
    alert("Cám ơn đánh gía của bạn")
    break;
  }
} 

//function schedule.html

function ChangeSchedule () {
  var selected = document.getElementById('league_selected');
  
  if(selected.value == "ll") {

    document.getElementById("ld1").style.display='none';
    document.getElementById("ld2").style.display='block';
    return;
  }

  if(selected.value == "pl") {

    document.getElementById("ld1").style.display='block';
    document.getElementById("ld2").style.display='none';
    return;
  }
}
//function ranking.html
function ChangeSTD () {
  var selected = document.getElementById("lc_bxh");
  
  if(selected.value == "epl") {

    document.getElementById("std_epl_show").style.display='block';
    document.getElementById("std_sll_hidden").style.display='none';
    return;
  }

  if(selected.value == "sll") {

    document.getElementById("std_epl_show").style.display='none';
    document.getElementById("std_sll_hidden").style.display='block';
    return;
  }
}

function HightLight (control, flag) {
  switch(flag) {
      case 1:
          control.className = "onMouseOut";
          break;
      case 2:
          control.className = "normal";
          break;
      case 3:
          control.className = "onMouseOver";
          break;
  }
}