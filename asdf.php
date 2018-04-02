<html>
<head>
  <link href="calc.css" rel="stylesheet" type="text/css">
  <script type="text/javascript" src="calc.js"></script>

</head>

<body style="background-color:powderblue;">

  <h1 style="font-family:arial;">
  <center>Get your CAE</center>
  </h1>

  <div id="container">
    <img class="middle">

      <div id="calc_src" >
        <form name="calc_form"
          <table style="margin:9px;">

            <center>
              <tr>
                <td>Monto solicitado: <br>$</td>
                <td><input type="text" name="calc_amount" size="auto" value="0"/></td></br>
              </tr>


              <tr>
                <td>Número de meses: <br></td>
                <td><input type="text" name="calc_months" size="auto" value="0"/></td></br>
              </tr>


              <tr>
                <td>Valor de cuota: <br>$</td>
                <td><input type="text" name="calc_amount_months" size="auto" value="0"/></td></br>
              </tr>


              <tr>
                <td>Gastos adicionales: <br>$</td>
                <td><input type="text" name="calc_GA" size="auto" value="0"/></td></br>
              </tr>

              <tr>
                <br></br>
                <!--<td><input type="button" onclick="validate()" value="Calcular"/></td>-->
                <td><input type="button" onclick="startOver()" value="Reestablecer"/></td>
              </tr>
            </center>
          </table>
        </form>
    </div>

    <div id="calc_info">
      <p><i>Monto solicitado</i>: Refiere a cantidad de dinero recibida por el servicio.</p>
      <p><i>Número de meses</i>: Cantidad en meses a pagar el préstamo.</p>
      <p><i>Valor de cuota</i>: Cantidad de dinero a cancelar por cada mes plazo.</p>
      <p><i>Gastos Adicionales</i>: Monto de gastos externos al crédito en si (seguros, notarios, etc).</p>
    </div>
    <!--
    <div id="table_header">
      table header
    </div>

    <div id="table">
      table
    </div>
    -->
  </div>

  <a href="results.html" onclick="validate(); return false;">
  <center><img src="arrow.png" alt="Continuar" >
  </a>

</body>
</html>
