
// var size = document.getElementById("row_num").value;
// console.log(size);
// document.write("<p>"+size+"</p>");
// var button = document.getElementById("table-btn");
// button.addEventListener("click", () =>{
//   prime();
//   getSerialNo();
// })
// var size1 = prompt("Enter size here");
var size = document.getElementById("row_num").value;
console.log(typeof(size));
var dataElement = '';
var primeElement = '';
var a = document.getElementById("table-items");
var arr = [];

function prime(){

  for (var counter = 1; counter <= 100; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
        // console.log(counter);
        document.getElementById("prime-items").innerHTML = primeElement;
        arr.push(counter);
        // primeElement += "<tr><td></td><td>"+ counter+ "</td></tr>";
        // console.log(primeElement);
        // console.log("Array is: "+ arr);

    }
  }
}

function getSerialNo() {
  var x = document.getElementById('row_num').value;
  size = x;
  console.log(size);
  for(let i=0;i<size;i++){
    num = i+1;
    dataElement += "<tr><td>" +num + "</td><td>"+arr[i+1]+"</td></tr>";

    // console.log(i+1);
  }
  document.getElementById("table-items").innerHTML = dataElement;

}

function deleteRow(){
    location.reload();
    document.getElementById("table-items").deleteRow(0);
}

function deleteRow1(){
  for(let i=0;i<size;i++){
    if(i%2==0){
      document.getElementById("table-items").deleteRow(i);
    }
  }
}

prime();
getSerialNo();


console.log(primeElement);
function hello(){
  alert("hello");
}




// function generateTable() {
//   // creates a <table> element and a <tbody> element
//   const tbl = document.createElement("table");
//   const tblBody = document.createElement("tbody");
//   var row_num = document.getElementById("row_num").value;
//   // creating all cells
//   for (let i = 0; i < row_num; i++) {
//     // creates a table row
//     const row = document.createElement("tr");

//     for (let j = 0; j < 2; j++) {
//       // Create a <td> element and a text node, make the text
//       // node the contents of the <td>, and put the <td> at
//       // the end of the table row
//       const cell = document.createElement("td");
//       const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
//       // const cellText = document.createTextNode(`${i+1}` );
//       cell.appendChild(cellText);
//       row.appendChild(cell);
//     }

//     // add the row to the end of the table body
//     tblBody.appendChild(row);
//   }

//   // put the <tbody> in the <table>
//   tbl.appendChild(tblBody);
//   // appends <table> into <body>
//   document.body.appendChild(tbl);
//   // sets the border attribute of tbl to '2'
//   tbl.setAttribute("border", "2");
// }
