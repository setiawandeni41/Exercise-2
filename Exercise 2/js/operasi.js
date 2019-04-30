var Bilangan1;
var Bilangan2;
var Hasil;
var Operator;
var Operator_Seleksi = false;
function Button(angka) {
	var display = document.getElementById("output").value;
	if (display == "0") {
		display = angka; 
	} else {
		display += angka;
	}
	document.getElementById("output").value = display;
}
 
function Clear() {
	document.getElementById("output").value = "0";
	Bilangan1 = 0;
	Bilangan2 = 0;
	Operator_Seleksi = false;
}
 
function Koma() {
	var display = document.getElementById("output").value;
	if (display.includes(".") == false) {
		display += ".";
	}
	document.getElementById("output").value = display;	
}
 
function Button_Operator(o) {
	Operator_Seleksi = true;
	Bilangan1 = parseFloat(document.getElementById("output").value);
	Operator = o;
	document.getElementById("output").value = "0";
}
 
function Hitung() {
	if (Operator_Seleksi == true) {
		Bilangan2 = parseFloat(document.getElementById("output").value);
		switch(Operator){
			case 1 :
				Hasil = Bilangan1 * Bilangan2;
				document.getElementById("output").value = Hasil;			
				break;
			case 2 :
				Hasil = Bilangan1 / Bilangan2;
				document.getElementById("output").value = Hasil;
				break;
			case 3 :
				Hasil = Bilangan1 - Bilangan2;
				document.getElementById("output").value = Hasil;
				break;
			case 4 :
				Hasil = Bilangan1 + Bilangan2;
				document.getElementById("output").value = Hasil;
				break;
		}
		Operator_Seleksi = false
		Hasil = 0;
		Bilangan1 = 0;
		Bilangan2 = 0;
	}
}