function reset() {
  var form = document.getElementById("myform");
  form.reset();
  var totaltipfix = 0.00;
  var totalpayfix = 0.00;

  document.getElementById("tip").textContent = "$" + totaltipfix.toFixed(2);
  document.getElementById("total").textContent = "$" + totalpayfix.toFixed(2);
}



function removechecked() {
  var radioButtons = document.querySelectorAll('input[type="radio"][name="options-base"]');

  for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
  }
}

function radiocheck() {
  var radioButtons = document.querySelectorAll('.btn-check');
  var selectedValue = null;

  radioButtons.forEach(function(radioButton) {
    if (radioButton.checked) {
      selectedValue = radioButton.value;
    }
  });

	var billElement = document.getElementById("bill");
  	var billValue = parseFloat(billElement.value);
	var customtip = document.getElementById("customNumber");
    var customtipValue = parseFloat(customtip.value);
    var personElement = document.getElementById("person");
  	var personValue = parseFloat(personElement.value);

  	if (personValue === 0 || isNaN(personValue)) {
  		document.querySelector('.invalid').style.display = 'block';
  		document.getElementById("person").style.boxShadow ="0 0 0 2px red";
		}else{
		document.querySelector('.invalid').style.display = 'none';
  		document.getElementById("person").style.boxShadow ="none";
		}

  if (selectedValue !== null) {
    var totaltip = ((billValue * selectedValue) / 100)/personValue;
    var totalpay = (billValue / personValue) + totaltip;

    var totaltipfix = totaltip.toFixed(2);
    var totalpayfix = totalpay.toFixed(2);

    document.getElementById("tip").textContent = "$" + totaltipfix;
  	document.getElementById("total").textContent = "$" + totalpayfix;
  } else {
    
    var totaltip = ((billValue * customtipValue) / 100)/personValue;
    var totalpay = (billValue / personValue) + totaltip;

    var totaltipfix = totaltip.toFixed(2);
    var totalpayfix = totalpay.toFixed(2);

    document.getElementById("tip").textContent = "$" + totaltipfix;
  	document.getElementById("total").textContent = "$" + totalpayfix;
  }
}