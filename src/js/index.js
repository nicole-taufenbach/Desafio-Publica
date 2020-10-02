function addRow()
{
    var jogo = document.getElementById('jogo').value;
    var placar = document.getElementById('placar').value;
    var minseason = document.getElementById('minseason').value;
    var maxseason = document.getElementById('maxseason').value;
    var breakmin = document.getElementById('breakmin').value;
    var breakmax = document.getElementById('breakmax').value;
      
      // get the html table
      // 0 = the first table
      var table = document.getElementsByTagName('table')[0];
      
      // add new empty row to the table
      // 0 = in the top 
      // table.rows.length = the end
      // table.rows.length/2+1 = the center
      var newRow = table.insertRow(table.rows.length);
      
      // add cells to the row
      var cel1 = newRow.insertCell(0);
      var cel2 = newRow.insertCell(1);
      var cel3 = newRow.insertCell(2);
      var cel4 = newRow.insertCell(3);
      var cel5 = newRow.insertCell(4);
      var cel6 = newRow.insertCell(5);
      
      // add values to the cells
      cel1.innerHTML = jogo;
      cel2.innerHTML = placar;
      cel3.innerHTML = minseason;
      cel4.innerHTML = maxseason;
      cel5.innerHTML = breakmin;
      cel6.innerHTML = breakmax;
}