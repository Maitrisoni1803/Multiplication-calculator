document.getElementById('multiplicationForm').addEventListener('submit', function(event) 
{
    event.preventDefault();
    const number = document.getElementById('number').value;
    generateTable(number);
});

function generateTable(number) {
    let tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = ''; 
    
    let table = document.createElement('table');
     let header = table.createTHead();
    let headerRow = header.insertRow();
    
    let th1 = document.createElement('th');
      th1.innerText = 'Multiplier';
    headerRow.appendChild(th1);
    
    let th2 = document.createElement('th');
    th2.innerText = 'Result';
      headerRow.appendChild(th2);
    
    let tbody = document.createElement('tbody');
    
    for (let i = 1; i <= 10; i++) 
        {
        let row = tbody.insertRow();
        
        let cell1 = row.insertCell();
        cell1.innerText = `${number} x ${i}`;
        
        let cell2 = row.insertCell();
        cell2.innerText = number * i;
    }
    
  table.appendChild(tbody);
  tableContainer.appendChild(table);
}