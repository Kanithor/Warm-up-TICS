function startOver(){

  document.calc_form.calc_amount.value="0";
  document.calc_form.calc_months.value="0";
  document.calc_form.calc_amount_months.value="0";
  document.calc_form.calc_GA.value="0";

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
    document.calc_form.calc_amount.value = "0";
  }
  else if (meses <= 0 || parseInt(meses) != meses){
    alert("Por favor ingresa una cantidad de meses válida.");
    document.calc_form.calc_months.value = "0";
  }
  else if (valor_cuota <= 0 || isNaN(Number(valor_cuota))){
    alert("Por favor ingresa un monto de cuota válido.");
    document.calc_form.calc_amount_months.value = "0";
  }
  else if (gastos_adicionales <= 0 || isNaN(Number(gastos_adicionales))){
    alert("Por favor ingresa un monto de gastos adicionales válido.");
    document.calc_form.calc_GA.value ="0";
  }
  else{
    alert("Validación completa");
    calculate();
  }

}

function calculate(){
  var total = 234;
  return document.getElementById('resultDiv').innerHTML = total.toString();
;
}
