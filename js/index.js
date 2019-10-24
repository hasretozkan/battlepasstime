var week1 = false;
var week2 = false;
var week3 = false;
var week4 = false;
var week5 = false;
var week6 = false;
var week7 = false;
var week8 = false;
var week9 = false;
var week10 = false;
var papelStandart = true;
var papelBundle = false;
var levelStar = [2,2,2,5,2,2,2,2,10,2,2,2,2,5,2,2,2,2,10,2,2,2,2,5,2,2,2,2,10,2,2,2,2,5,2,2,2,2,10,2,2,2,2,5,2,2,2,2,10,2,2,2,2,5,2,2,2,2,10,2,2,2,2,5,2,2,2,2,10,2,2,2,2,5,2,2,2,2,10,2,2,2,2,5,2,2,2,2,10,2,2,2,2,5,2,2,2,2,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function setTrueStandard() {
    document.getElementById('papelBundle').className = "home-question-button-week";
    document.getElementById('papelStandart').className = "home-question-button-week active";
    papelStandart = true;
    papelBundle = false;
}

function setTrueBundle() {
    document.getElementById('papelStandart').className = "home-question-button-week";
    document.getElementById('papelBundle').className = "home-question-button-week active";
    papelStandart = false;
    papelBundle = true;
}

function setTrueWeek1() {
  if (week1 == true) {
    document.getElementById('week1').className = "home-question-button-week";
    week1 = false;
  } else {
    document.getElementById('week1').className = "home-question-button-week active";
    week1 = true;
  }
}

function setTrueWeek2() {
  if (week2 == true) {
    document.getElementById('week2').className = "home-question-button-week";
    week2 = false;
  } else {
    document.getElementById('week2').className = "home-question-button-week active";
    week2 = true;
  }
}

function setTrueWeek3() {
  if (week3 == true) {
    document.getElementById('week3').className = "home-question-button-week";
    week3 = false;
  } else {
    document.getElementById('week3').className = "home-question-button-week active";
    week3 = true;
  }
}

function setTrueWeek4() {
  if (week4 == true) {
    document.getElementById('week4').className = "home-question-button-week";
    week4 = false;
  } else {
    document.getElementById('week4').className = "home-question-button-week active";
    week4 = true;
  }
}

function setTrueWeek5() {
  if (week5 == true) {
    document.getElementById('week5').className = "home-question-button-week";
    week5 = false;
  } else {
    document.getElementById('week5').className = "home-question-button-week active";
    week5 = true;
  }
}

function setTrueWeek6() {
  if (week6 == true) {
    document.getElementById('week6').className = "home-question-button-week";
    week6 = false;
  } else {
    document.getElementById('week6').className = "home-question-button-week active";
    week6 = true;
  }
}

function setTrueWeek7() {
  if (week7 == true) {
    document.getElementById('week7').className = "home-question-button-week";
    week7 = false;
  } else {
    document.getElementById('week7').className = "home-question-button-week active";
    week7= true;
  }
}

function setTrueWeek8() {
  if (week8 == true) {
    document.getElementById('week8').className = "home-question-button-week";
    week8 = false;
  } else {
    document.getElementById('week8').className = "home-question-button-week active";
    week8 = true;
  }
}

function setTrueWeek9() {
  if (week9 == true) {
    document.getElementById('week9').className = "home-question-button-week";
    week9 = false;
  } else {
    document.getElementById('week9').className = "home-question-button-week active";
    week9 = true;
  }
}

function setTrueWeek10() {
  if (week10 == true) {
    document.getElementById('week10').className = "home-question-button-week";
    week10 = false;
  } else {
    document.getElementById('week10').className = "home-question-button-week active";
    week10 = true;
  }
}

function maxLengthCheck(object) {
  if (object.value.length > object.maxLength)
    object.value = object.value.slice(0, object.maxLength)
}

function isNumeric (evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode (key);
  var regex = /[0-9]|\./;
  if ( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

function calculate() {
  if (document.getElementById("pass-level").value == '' || document.getElementById("day-count").value == '') {
    window.alert('Tüm Boşlukları Doldurunuz!')
  } else {
    var level = 0

    level = level + parseInt(document.getElementById("pass-level").value);

    if (papelBundle == true) {
      level = level + 25;
    }

    if (week1 === false) {
      level = level +6;
    }

    if (week2 === false) {
      level = level + 6;
    }

    if (week3 === false) {
      level = level + 6;
    }

    if (week4 === false) {
      level = level + 6;
    }

    if (week5 === false) {
      level = level + 6;
    }

    if (week6 === false) {
      level = level + 6;
    }

    if (week7 === false) {
      level = level + 6;
    }

    if (week8 === false) {
      level = level + 5;
    }

    if (week9 === false) {
      level = level + 5;
    }

    if (week10 === false) {
      level = level + 5;
    }

    var battlepassEndDay = parseInt(document.getElementById("day-count").value);

    var levelStars = 0;
    for(let i=0; i<battlepassEndDay; i++)
    {
      levelStars = levelStar[i] + levelStar[i+1] + levelStars;
      i++;
    }
    levelStars = levelStars/10;
    level = level + levelStars;
    level = parseInt(level);
    window.location.href='after.html?level=' + level;
  }
}
