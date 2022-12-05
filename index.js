
class Cars{
    constructor(name, make, model, Hp, color, type, image){
        this.name = name;
        this.make = make;
        this.model = model;
        this.Hp = Hp;
        this.color = color;
        this.type = type;
        this.image = image;
    }
}

let c1 = new Cars("Camry", "Toyota", 2011, 200, "Golden", "Sedan", "./images/camry.png");
let c2 = new Cars("Enzo","Ferrai",2022, 766, "Black", "hyper", "./images/enzo.jpg");
let c3 = new Cars("A8","Audi",2020,300, "white","sedan", "./images/a8.jpeg");
let c4 = new Cars("911","Porsche", 2023, 500, "green", "coupe", "./images/911.jpeg");
let c5 = new Cars("Veyron", "Buggati", 2011, 1001, "black", "hyper", "./images/veyron.png");


var index=0; // keeps track of the index of the current car

const carsArray = new Array(c1,c2,c3,c4,c5);   
var string_json = JSON.stringify(carsArray); // string version of the JSON
console.log(string_json); 

console.log("================================");

var object_json = JSON.parse(string_json); // object version of the JSON
console.log(object_json);

function getPath(){

}

function getCar(){


    let carName = document.getElementById("carname").value;
    let foundCar = "Empty";
    let path = "";
    let carIndex;
    


   
    // SEARCH THE CAR IN JSON FILE
    for(let i=0;i<carsArray.length;i++){
        if(carsArray[i].name.toLowerCase() == carName.toLowerCase()){
            foundCar = carsArray[i];
            carIndex = i;
        }
    }

    if(foundCar != "Empty"){
        console.log(foundCar);
        path = foundCar.image;
        // displaying the image in the table cell;
        document.getElementById("td-img").setAttribute("src",path);
        document.getElementById("td-img").setAttribute("style","width:400px;height:250px;"); 
        
        // diaply the information in the table cell.

        document.getElementById("info").innerHTML = "Name: " + foundCar.name + "<br>" +
                                                    "Make: " + foundCar.make + "<br>" +
                                                    "Model: " + foundCar.model + "<br>" +
                                                    "Horse Power: " + foundCar.Hp + "<br>" +
                                                    "Color: " + foundCar.color + "<br>" +
                                                    "Type: " + foundCar.type + "<br>";
        doucment.getElementById("info").style.alignItems = "center";

    }
    
    else{
        alert("No car found");
        console.log("Car not found!");
    }
}

// TOGGLE TO THE NEXT CAR IN JSON
function nextCar(){
    console.log(carIndex);
    
}


function prevCar(){

}


function firstCar(){

}

function lastCar(){

}