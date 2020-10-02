function addRow()
{
    var jogo = document.getElementById('jogo').value; //chama os valores marcados no html
    var placar = document.getElementById('placar').value;
    var minseason = document.getElementById('minseason').value;
    var maxseason = document.getElementById('maxseason').value;
    var breakmin = document.getElementById('breakmin').value;
    var breakmax = document.getElementById('breakmax').value;
      
    var table = document.getElementsByTagName('table')[0]; //consulta a tabela html e [0] para primeiro elemento do array
    var newRow = table.insertRow(table.rows.length); //adiciona novo elemento à tabela, table.rows.length = final da tabela
      
      var cel1 = newRow.insertCell(0); //adicionando espaços (células) a cada row necessário
      var cel2 = newRow.insertCell(1);
      var cel3 = newRow.insertCell(2);
      var cel4 = newRow.insertCell(3);
      var cel5 = newRow.insertCell(4);
      var cel6 = newRow.insertCell(5);
      
      cel1.innerHTML = jogo; //e adicionando valores para esses espaços (declarados anteriormente)
      cel2.innerHTML = placar;
      cel3.innerHTML = minseason;
      cel4.innerHTML = maxseason;
      cel5.innerHTML = breakmin;
      cel6.innerHTML = breakmax;
}