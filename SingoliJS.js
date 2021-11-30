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

y.href="#candele";
x.style.display='block';
   }

  else {
    x.style.display="none";
  }
}

function Speciali() {
var y = document.getElementById('menus');
var x = document.getElementById('speciali');
if (x.style.display.match('none')) {

    y.href="#speciali";
    x.style.display='block';
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
    y.style.padding='0';
  }

  else {
    x.style.display='none';
    z.style.display="block";
    h.style.display='block';
  }
}





function compleannoA() {
  document.getElementById('fotoProdotto').src="img/speciali/compleanno/np/birthday-974456_1280.jpg";
}

function compleannoL() {
  document.getElementById('fotoProdotto').src="img/speciali/compleanno/np/birthday-975203_1280.jpg";
}

function compleannoV() {
  document.getElementById('fotoProdotto').src="img/speciali/compleanno/np/birthday-975209_1280.jpg";
}



function buy() {
  var x = document.getElementById('buyForm');
  if (x.style.display.match('none')) {
    x.style.display="block";
  }
  else {
    x.style.display="none";
  }
}






function consegnaSiBaroque() {
  document.getElementById('prezzoConsegna').style.display="inline";
  document.getElementById('prezzoFinaleBaroque').innerHTML='17,99';
  document.getElementById('prezzoFinaleMiniatura').innerHTML='10,00';
}

function consegnaNoBaroque() {
  document.getElementById('prezzoConsegna').style.display="none";
  document.getElementById('prezzoFinaleBaroque').innerHTML='15,99';
  document.getElementById('prezzoFinaleMiniatura').innerHTML='8,00';
}

function consegnaSiMiniatura() {
  document.getElementById('prezzoConsegna').style.display="inline";
  document.getElementById('prezzoFinaleMiniatura').innerHTML='10,00';
}

function consegnaNoMiniatura() {
  document.getElementById('prezzoConsegna').style.display="none";
  document.getElementById('prezzoFinaleMiniatura').innerHTML='8,00';
}

function consegnaSiGotica() {
  document.getElementById('prezzoConsegna').style.display="inline";
  document.getElementById('prezzoFinaleGotica').innerHTML='7,99';
}

function consegnaNoGotica() {
  document.getElementById('prezzoConsegna').style.display="none";
  document.getElementById('prezzoFinaleGotica').innerHTML='5,99';
}


function consegnaSiLRose() {
  document.getElementById('prezzoConsegna').style.display="inline";
  document.getElementById('prezzoFinaleLRose').innerHTML='10,99';
}

function consegnaNoLRose() {
  document.getElementById('prezzoConsegna').style.display="none";
  document.getElementById('prezzoFinaleLRose').innerHTML='8,99';
}


function consegnaSiVinoArgento() {
  document.getElementById('prezzoConsegna').style.display="inline";
  document.getElementById('prezzoFinaleVinoArgento').innerHTML='5,99';
}

function consegnaNoVinoArgento() {
  document.getElementById('prezzoConsegna').style.display="none";
  document.getElementById('prezzoFinaleVinoArgento').innerHTML='3,99';
}


function consegnaSiAmanita() {
  document.getElementById('prezzoConsegna').style.display="inline";
  document.getElementById('prezzoFinaleAmanita').innerHTML='10,99';
}

function consegnaNoAmanita() {
  document.getElementById('prezzoConsegna').style.display="none";
  document.getElementById('prezzoFinaleAmanita').innerHTML='8,99';
}


function consegnaSiSemplice() {
  document.getElementById('prezzoConsegna').style.display="inline";
  document.getElementById('prezzoFinaleSemplice').innerHTML='2,50';
}

function consegnaNoSemplice() {
  document.getElementById('prezzoConsegna').style.display="none";
  document.getElementById('prezzoFinaleSemplice').innerHTML='0,50';
}


function consegnaSiGatto() {
  document.getElementById('prezzoConsegna').style.display="inline";
  document.getElementById('prezzoFinaleGatto').innerHTML='11,99';
}

function consegnaNoGatto() {
  document.getElementById('prezzoConsegna').style.display="none";
  document.getElementById('prezzoFinaleGatto').innerHTML='9,99';
}


function consegnaSiDopopioggia() {
  document.getElementById('prezzoConsegna').style.display="inline";
  document.getElementById('prezzoFinaleDopopioggia').innerHTML='8,99';
}

function consegnaNoDopopioggia() {
  document.getElementById('prezzoConsegna').style.display="none";
  document.getElementById('prezzoFinaleDopopioggia').innerHTML='6,99';
}


function consegnaSiCocktail() {
  document.getElementById('prezzoConsegna').style.display="inline";
  document.getElementById('prezzoFinaleCocktail').innerHTML='11,99';
}

function consegnaNoCocktail() {
  document.getElementById('prezzoConsegna').style.display="none";
  document.getElementById('prezzoFinaleCocktail').innerHTML='9,99';
}


function consegnaSiDLimone() {
  document.getElementById('prezzoConsegna').style.display="inline";
  document.getElementById('prezzoFinaleDLimone').innerHTML='6,50';
}

function consegnaNoDLimone() {
  document.getElementById('prezzoConsegna').style.display="none";
  document.getElementById('prezzoFinaleDLimone').innerHTML='4,50';
}


function consegnaSiPrugnolo() {
  document.getElementById('prezzoConsegna').style.display="inline";
  document.getElementById('prezzoFinalePrugnolo').innerHTML='7,99';
}

function consegnaNoPrugnolo() {
  document.getElementById('prezzoConsegna').style.display="none";
  document.getElementById('prezzoFinalePrugnolo').innerHTML='5,99';
}


function consegnaSiFragole() {
  document.getElementById('prezzoConsegna').style.display="inline";
  document.getElementById('prezzoFinaleFragole').innerHTML='6,99';
}

function consegnaNoFragole() {
  document.getElementById('prezzoConsegna').style.display="none";
  document.getElementById('prezzoFinaleFragole').innerHTML='4,99';
}


function consegnaSiCherry() {
  document.getElementById('prezzoConsegna').style.display="inline";
  document.getElementById('prezzoFinaleCherry').innerHTML='7,99';
}

function consegnaNoCherry() {
  document.getElementById('prezzoConsegna').style.display="none";
  document.getElementById('prezzoFinaleCherry').innerHTML='5,99';
}


function consegnaSiForno() {
  document.getElementById('prezzoConsegna').style.display="inline";
  document.getElementById('prezzoFinaleForno').innerHTML='7,50';
}

function consegnaNoForno() {
  document.getElementById('prezzoConsegna').style.display="none";
  document.getElementById('prezzoFinaleForno').innerHTML='5,50';
}


function consegnaSiMughetto() {
  document.getElementById('prezzoConsegna').style.display="inline";
  document.getElementById('prezzoFinaleMughetto').innerHTML='7,99';
}

function consegnaNoMughetto() {
  document.getElementById('prezzoConsegna').style.display="none";
  document.getElementById('prezzoFinaleMughetto').innerHTML='5,99';
}


function consegnaSiLampone() {
  document.getElementById('prezzoConsegna').style.display="inline";
  document.getElementById('prezzoFinaleLampone').innerHTML='6,50';
}

function consegnaNoLampone() {
  document.getElementById('prezzoConsegna').style.display="none";
  document.getElementById('prezzoFinaleLampone').innerHTML='4,50';
}


function consegnaSiCompleanno() {
  document.getElementById('prezzoConsegna').style.display="inline";
  document.getElementById('prezzoFinaleCompleanno').innerHTML='5,00';
}

function consegnaNoCompleanno() {
  document.getElementById('prezzoConsegna').style.display="none";
  document.getElementById('prezzoFinaleCompleanno').innerHTML='3,00';
}


function consegnaSiPolka() {
  document.getElementById('prezzoConsegna').style.display="inline";
  document.getElementById('prezzoFinalePolka').innerHTML='5,00';
}

function consegnaNoPolka() {
  document.getElementById('prezzoConsegna').style.display="none";
  document.getElementById('prezzoFinalePolka').innerHTML='3,00';
}


function consegnaSiLetizia() {
  document.getElementById('prezzoConsegna').style.display="inline";
  document.getElementById('prezzoFinaleLetizia').innerHTML='15,99';
}

function consegnaNoLetizia() {
  document.getElementById('prezzoConsegna').style.display="none";
  document.getElementById('prezzoFinaleLetizia').innerHTML='13,99';
}


function consegnaSiCase() {
  document.getElementById('prezzoConsegna').style.display="inline";
  document.getElementById('prezzoFinaleCase').innerHTML='19,99';
}

function consegnaNoCase() {
  document.getElementById('prezzoConsegna').style.display="none";
  document.getElementById('prezzoFinaleCase').innerHTML='17,99';
}


function consegnaSiPanna() {
  document.getElementById('prezzoConsegna').style.display="inline";
  document.getElementById('prezzoFinalePanna').innerHTML='7,99';
}

function consegnaNoPanna() {
  document.getElementById('prezzoConsegna').style.display="none";
  document.getElementById('prezzoFinalePanna').innerHTML='5,99';
}


function consegnaSiTriplo() {
  document.getElementById('prezzoConsegna').style.display="inline";
  document.getElementById('prezzoFinaleTriplo').innerHTML='9,99';
}

function consegnaNoTriplo() {
  document.getElementById('prezzoConsegna').style.display="none";
  document.getElementById('prezzoFinaleTriplo').innerHTML='7,99';
}




function acquistato() {
  alert('Acquisto andato a buon fine.')
}



function sSubmit() {
  alert('Grazie mille, il messaggio è stato inviato!');
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
