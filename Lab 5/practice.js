
function generateTable(){

    var row_input = document.getElementById("user_input").value;
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
    alert(row_input);

    for(let i=0;i<row_input;i++){
        const row = document.createElement("tr");

        for(let j=0;j<2;j++){
            const cell = document.createElement("td");  
            const cellText = document.createTextNode(`${i+1}`, `${j+5}`);

            cell.appendChild(cellText);
            row.appendChild(cell);

        }
        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    document.body.appendChild(table);
    table.setAttribute('border','2');


}