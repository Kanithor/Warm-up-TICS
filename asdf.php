<html>
<head>

  <link href="calc.css" rel="stylesheet" type="text/css">
  <script type="text/javascript" src="calculadora.js"></script>

</head>

<body>

  <div id="container">

    <h2>Get your CAE</h2>
    <div id="calc_src">
      <form name="calc_form"
        <table style="margin:10px;"
          <tr>
            <td>Monto solicitado:</td>
            <td><input type="text" name="calc_amount" size="10"/></td>
          </tr>

          <tr>
            <td>Número de meses:</td>
            <td><input type="text" name="calc_months" size="10"/></td>
          </tr>

          <tr>
            <td>Valor de cuota:</td>
            <td><input type="text" name="calc_amount_months" size="10"/></td>
          </tr>

          <tr>
            <td>Gastos adicionales:</td>
            <td><input type="text" name="calc_GA" size="10"/></td>
          </tr>

          <tr>
            <td><input type="button" onclick="validate()" value="Calcular"/></td>
            <td><input type="button" onclick="startOver()" value="Start Over"/></td>
          </tr>

        </table>
      </form>


    </div>

    <div id="calc_info">

    </div>

    <div id="table_header">

    </div>

    <div id="table">

    </div>

  </div>

</body>
</html>
