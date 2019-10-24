var level = parseInt(GetParameterByName("level"));

let levelText;
let levelText1;
if (level >= 100) {
  level = '+100';
  levelText = 'Well done ;)';
  levelText1 = 'Good luck in Season 9!'
} else {
  level = level;
  levelText = 'You have more ways to go ;)';
  levelText1 = 'You need more effort!'
}

document.getElementById("levelText").innerHTML = levelText;
document.getElementById("levelText1").innerHTML = levelText1;
document.getElementById("level").innerHTML = level;

function GetParameterByName(name, url){
  if (!url)
  url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
  results = regex.exec(url);
  if (!results)
  return null;
  if (!results[2])
  return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function goBack() {
  window.location.href='index.html';
}
