// JavaScript Document
function fechi1(){
  document.getElementById("fechi").src = "images/001_23.png";
}
function fechi1sal(){
  document.getElementById("fechi").src = "images/001_23gris.png";
}
function fe2(){
  document.getElementById("feclihita2").src = "images/001_21.png";
}
function fec2sal(){
  document.getElementById("feclihita2").src = "images/001_21gris.png";
}
function sumarbuy(){
  var numbuytic = document.getElementById("ap_quantity").value;
  var buymas = ++numbuytic;
  document.getElementById("ap_quantity").value = buymas;
  var result = buymas * 2;
  document.getElementById("ticketbuy").innerHTML = result;
  document.getElementById("ticketbuypay").innerHTML = result;
  document.getElementById("amountpay").value = result;
}
function sumarbuybalance(){
	if(document.getElementById("dinerobalancetiene").value > document.getElementById("dinerobalance").value){
		var numbuytic = document.getElementById("dinerobalance").value;
  var buymas = ++numbuytic;
  document.getElementById("dinerobalance").value = buymas;
  var result = buymas * 1;
  document.getElementById("ticketbuybalance").innerHTML = result;
	}
}
function menosbuy(){
  var numbuytic = document.getElementById("ap_quantity").value;
  if(numbuytic>1){
    var buymas = --numbuytic;
  document.getElementById("ap_quantity").value = buymas;
  var result = buymas * 2;
  document.getElementById("ticketbuy").innerHTML = result;
  document.getElementById("ticketbuypay").innerHTML = result;
  document.getElementById("amountpay").value = result;
  }
}
function menosbuybalance(){
  var numbuytic = document.getElementById("dinerobalance").value;
  if(numbuytic>1){
    var buymas = --numbuytic;
  document.getElementById("dinerobalance").value = buymas;
  var result = buymas * 1;
  document.getElementById("ticketbuybalance").innerHTML = result;
  }
}

function alertypayadd(){
	document.getElementById("elegirpagar").style.display = "none";
  	document.getElementById("poralertpay").style.display = "block";
	document.getElementById("porpaypal").style.display = "none";
}

function returnele(){
	document.getElementById("elegirpagar").style.display = "block";
  	document.getElementById("poralertpay").style.display = "none";
	document.getElementById("porbalance").style.display = "none";
	document.getElementById("porpaypal").style.display = "none";
}

function balanadd(){
	document.getElementById("elegirpagar").style.display = "none";
  	document.getElementById("porbalance").style.display = "block";
	document.getElementById("porpaypal").style.display = "none";
	document.getElementById("poralertpay").style.display = "none";
}

function paypaladd(){
	document.getElementById("porpaypal").style.display = "block";
	document.getElementById("elegirpagar").style.display = "none";
	document.getElementById("poralertpay").style.display = "none";
	document.getElementById("porbalance").style.display = "none";
}