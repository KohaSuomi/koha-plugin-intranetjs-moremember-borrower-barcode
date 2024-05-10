

$(document).ready(function () {
  if (window.location.pathname == '/cgi-bin/koha/members/moremember.pl') {
    cardnumber = document.getElementById('patron-cardnumber').childNodes[2].nodeValue.trim();
    barcodeurl = "/cgi-bin/koha/svc/barcode?barcode=" + cardnumber.toUpperCase() + "&notext=1";
    $('li#patron-cardnumber').append('<br><img src="' + barcodeurl + '">');
  }
});
