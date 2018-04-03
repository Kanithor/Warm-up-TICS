function startOver(){

  document.calc_form.calc_amount.value="";
  document.calc_form.calc_months.value="";
  document.calc_form.calc_amount_months.value="";
  document.calc_form.calc_GA.value="";

  /*document.getElementById('calc_info').innerHTML="";
  document.getElementById('table').innerHTML="";*/


}

function validate(){

  var monto_credito = document.calc_form.calc_amount.value;
  var meses = document.calc_form.calc_months.value;
  var valor_cuota = document.calc_form.calc_amount_months.value;
  var gastos_adicionales = document.calc_form.calc_GA.value;

  if(monto_credito <= 0 || isNaN(Number(monto_credito))){
    alert("Por favor ingresa un monto solicitado válido.");
    document.calc_form.calc_amount.value = "";
  }
  else if (meses < 2 || meses > 48 || parseInt(meses) != meses){
    alert("Por favor ingresa una cantidad de meses válida.");
    document.calc_form.calc_months.value = "";
  }
  else if (valor_cuota <= 0 || isNaN(Number(valor_cuota))){
    alert("Por favor ingresa un monto de cuota válido.");
    document.calc_form.calc_amount_months.value = "";
  }
  else if (gastos_adicionales <= 0 || isNaN(Number(gastos_adicionales))){
    alert("Por favor ingresa un monto de gastos adicionales válido.");
    document.calc_form.calc_GA.value ="";
  }
  else if (meses*valor_cuota < monto_credito){
    alert("Valor total del credito no es valido")
    document.calc_form.calc_amount_months.value = "";
    document.calc_form.calc_months.value = "";
  }

  else{
    alert("Validación completa");
    calculate(parseInt(monto_credito),parseInt(meses),parseInt(valor_cuota),parseInt(gastos_adicionales));
  }

}

/*function calculate(){
  var total = 234;
  return document.getElementById('resultDiv').innerHTML = total.toString();
;
*/
function calculate(monto,meses,cuota,gastos) {

  var montoReal = monto + gastos ;


  var i1 = 0.02;
  var i2 = 0.05;


  var van1 = (1-Math.pow(1+i1,-meses))/(i1) - (monto/cuota);
  var van2 = (1-Math.pow(1+i2,-meses))/(i2) - (monto/cuota);




  var i = i1 + (i2-i1)*(van1/(van1-van2));

  var cuotaReal = (montoReal*i)/(1-Math.pow(1+i,-meses));

  var cme1 = -monto;
  var cme2 = -monto;



  for (var x = 0; x <= meses; x++) {
    cme1 = cme1 + (cuotaReal*Math.pow(1+i1,-x));
    cme2 = cme2 + (cuotaReal*Math.pow(1+i2,-x));
  }

  cme = i1 + (i2-i1)*(cme1/(cme1-cme2));

  var cae = cme*12;


var info = "";

info += "<table width='250'>";
info += "<tr><td>RESULTADOS :</td>";
info += "<tr><td>CAE:</td>";
info += "<td align = 'right'>"+Math.round(cae*100)+"%</td></tr>";

info += "<tr><td>Valor Credito Total:</td>";
info += "<td align = 'right'>$"+Math.round(cuotaReal*meses)+"</td></tr>";

info += "</table>";



  document.getElementById('results').innerHTML = info;

}
