function Over1() {
  document.getElementById("candle1").src="img/icone/noun_Candle_675838 - Copia.png";
}

function Out1() {
  document.getElementById('candle1').src='img/icone/noun_Candle_675838.png';
}

function Over2() {
  document.getElementById("candle2").src="img/icone/noun_Candle_675838 - Copia.png";
}

function Out2() {
  document.getElementById('candle2').src='img/icone/noun_Candle_675838.png';
}

function Over3() {
  document.getElementById("candle3").src="img/icone/noun_Candle_675838 - Copia.png";
}

function Out3() {
  document.getElementById('candle3').src='img/icone/noun_Candle_675838.png';
}

function Over4() {
  document.getElementById("candle4").src="img/icone/noun_Candle_675838 - Copia.png";
}

function Out4() {
  document.getElementById('candle4').src='img/icone/noun_Candle_675838.png';
}

function casettaHover() {
  document.getElementById('casaHover').src='img/icone/noun_House_454374 (1).png';
}

function casettaOut() {
  document.getElementById('casaHover').src='img/icone/noun_House_454374.png';
}

function bowC1Hover() {
  document.getElementById('bowC1').src='img/icone/noun_bow_970960.png';
  document.getElementById('bowC1_1').src='img/icone/noun_bow_970960.png';
}

function bowC1Out() {
  document.getElementById('bowC1').src='img/icone/noun_bow_970960 - Copia.png';
  document.getElementById('bowC1_1').src='img/icone/noun_bow_970960 - Copia.png';
}

function bowC2Hover() {
  document.getElementById('bowC2').src="img/icone/noun_bow_970960.png"
  document.getElementById('bowC2_1').src="img/icone/noun_bow_970960.png"
}

function bowC2Out() {
  document.getElementById('bowC2').src='img/icone/noun_bow_970960 - Copia.png';
  document.getElementById('bowC2_1').src='img/icone/noun_bow_970960 - Copia.png';
}

function bowS1Hover(){
  document.getElementById('bowS1').src='img/icone/noun_bow_970960.png'
  document.getElementById('bowS1_1').src='img/icone/noun_bow_970960.png';
}

function bowS1Out(){
  document.getElementById('bowS1').src='img/icone/noun_bow_970960 - Copia.png'
  document.getElementById('bowS1_1').src='img/icone/noun_bow_970960 - Copia.png';
}

function bowS2Hover(){
  document.getElementById('bowS2').src='img/icone/noun_bow_970960.png'
  document.getElementById('bowS2_1').src='img/icone/noun_bow_970960.png';
}

function bowS2Out(){
  document.getElementById('bowS2').src='img/icone/noun_bow_970960 - Copia.png'
  document.getElementById('bowS2_1').src='img/icone/noun_bow_970960 - Copia.png';
}

function bowN1Hover() {
  document.getElementById('bowN1').src="img/icone/noun_bow_970960.png";
  document.getElementById('bowN1_1').src='img/icone/noun_bow_970960.png';
}

function bowN1Out() {
  document.getElementById('bowN1').src='img/icone/noun_bow_970960 - Copia.png';
  document.getElementById('bowN1_1').src='img/icone/noun_bow_970960 - Copia.png';
}

function bowN2Hover() {
  document.getElementById('bowN2').src="img/icone/noun_bow_970960.png";
  document.getElementById('bowN2_1').src='img/icone/noun_bow_970960.png';
}

function bowN2Out() {
  document.getElementById('bowN2').src='img/icone/noun_bow_970960 - Copia.png';
  document.getElementById('bowN2_1').src='img/icone/noun_bow_970960 - Copia.png';
}

function bowN3Hover() {
  document.getElementById('bowN3').src="img/icone/noun_bow_970960.png";
  document.getElementById('bowN3_1').src='img/icone/noun_bow_970960.png';
}

function bowN3Out() {
  document.getElementById('bowN3').src='img/icone/noun_bow_970960 - Copia.png';
  document.getElementById('bowN3_1').src='img/icone/noun_bow_970960 - Copia.png';
}

function bowCoHover() {
  document.getElementById('bowCo').src="img/icone/noun_bow_970960.png";
  document.getElementById('bowCo1').src='img/icone/noun_bow_970960.png';
}

function bowCoOut() {
  document.getElementById('bowCo').src='img/icone/noun_bow_970960 - Copia.png';
  document.getElementById('bowCo1').src='img/icone/noun_bow_970960 - Copia.png';
}


function Candele() {
  var y = document.getElementById('menuc');
  var x = document.getElementById('candele');
  if (x.style.display.match('none'))  {

x.style.display='block';
y.href="#candele"
   }

  else {
    x.style.display="none";
  }
}

function Speciali() {
var y = document.getElementById('menus');
var x = document.getElementById('speciali');
if (x.style.display.match('none')) {

    x.style.display='block';
    y.href="#speciali"
  }

  else {
    x.style.display="none";
  }
}




function nataleIndietro() {
var y = document.getElementById('natale');
var x = document.getElementById('speciali');
var z = document.getElementById('freccia1');
var h = document.getElementById('bottoneNatale');
var g = document.getElementById('bottoneCompleanno');
if (y.style.display.match('block')) {

  z.href="#speciali";
  x.style.display='block';
  y.style.display='none';
  h.style.display='block';
  g.style.display='block';
  x.style.padding='24px 0 26px 0';
  x.style.border='2px solid transparent';
  x.style.borderImageSource='url("img/icone/noun_Frame_1197744.png")';
  x.style.borderImageSlice='55';
  x.style.borderImageRepeat='stretch';
  x.style.borderImageWidth='2vw';
  x.style.transition="all 0.6s";

  }

}

function compleannoIndietro() {
var y = document.getElementById('compleanno');
var x = document.getElementById('speciali');
var z = document.getElementById('freccia2');
var h = document.getElementById('bottoneNatale');
var g = document.getElementById('bottoneCompleanno');
if (y.style.display.match('block')) {

    z.href="#speciali";
    x.style.display='block';
    y.style.display='none';
    h.style.display='block';
    g.style.display='block';
    x.style.padding='24px 0 26px 0';
    x.style.border='2px solid transparent';
    x.style.borderImageSource='url("img/icone/noun_Frame_1197744.png")';
    x.style.borderImageSlice='55';
    x.style.borderImageRepeat='stretch';
    x.style.borderImageWidth='2vw';
    x.style.transition="all 0.6s";

    }
  }





function Natale() {
  var y = document.getElementById('speciali');
  var x = document.getElementById('natale');
  var z = document.getElementById('bottoneNatale');
  var h = document.getElementById('bottoneCompleanno');
  if (x.style.display.match('none')) {


    y.href="#natale";
    x.style.display='block';
    z.style.display='none';
    h.style.display='none';
    y.style.border='none';
    y.style.padding='0';
  }

  else {

    x.style.display='none';
    z.style.display="block";
    h.style.display='block';
  }
}



function Compleanno() {
  var y = document.getElementById('speciali');
  var x = document.getElementById('compleanno');
  var z = document.getElementById('bottoneNatale');
  var h = document.getElementById('bottoneCompleanno');
  if (x.style.display.match('none')) {


    y.href="#compleanno";
    x.style.display="block";
    z.style.display='none';
    h.style.display='none';
    y.style.border='none';
  }

  else {

    x.style.display='none';
    z.style.display="block";
    h.style.display='block';
  }
}




function VintageA() {
  document.getElementById('imgVintage').src="img/acc/candlestick-3253822_1280.png";
}

function VintageS() {
  document.getElementById('imgVintage').src="img/acc/candlestick-3253823_1280.png";
}

function cCompleannoA() {
  document.getElementById('imgCompleanno').src="img/speciali/compleanno/np/birthday-974456_1280.jpg";
}

function cCompleannoL() {
  document.getElementById('imgCompleanno').src="img/speciali/compleanno/np/birthday-975203_1280.jpg";
}

function cCompleannoV() {
  document.getElementById('imgCompleanno').src="img/speciali/compleanno/np/birthday-975209_1280.jpg";
}



function openMailForm() {
  var x = document.getElementById('mailForm');
  if (x.style.display.match('none')) {
    x.style.display="block";
  }
  else {
    x.style.display="none";
  }
}

function annulla() {
  document.getElementById('mailForm').style.display="none";
}

/*document.getElementById('search-form').onsubmit = function() {
    window.location = 'Candele - acc.html' + document.getElementById('txtSearch').value;
    return false;
}*/
