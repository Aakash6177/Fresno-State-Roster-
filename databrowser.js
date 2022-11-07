
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
var myJSON = JSON.stringify(carsArray);
var myJsonParse = JSON.parse(myJSON);
console.log(myJsonParse);
console.log("hello");
console.log(myJSON);
console.log("=========================");

var arr = [];
for(let i=0;i<carsArray.length;i++){
    arr.push(carsArray[i]);
}


function getCar(){
    let carname = document.getElementById("name").value;
    var carobj;
    let flag = false;
    var arr = [];
        for(let i=0;i<carsArray.length;i++){
        arr.push(carsArray[i]);
    }
    // console.log(arr);
    // console.log(arr[0]);
    // console.log(arr[0].name);
    // console.log(carname);
    for(let i=0;i<arr.length;i++){
        if(carname == arr[i].name){
            flag = true;
            index = i;
            console.log("found");
            console.log(index);
            carobj = arr[i];

        }
        else{
            console.log('Not Found');
        }
    }

    console.log(carobj);
    document.getElementById('result').innerHTML = carobj.name + "<br>" + carobj.make + "<br>" + carobj.model + "<br>" + carobj.Hp + "Horse Power <br>" + 
    carobj.color + " Color <br>" + carobj.type;

    document.getElementById('result').innerHTML = 
    "Name: " + carobj.name + "<br>" +
    "Make: " + carobj.make + "<br>" +
    "Model: " + carobj.model + "<br>" +
    "Horse Power: " + carobj.Hp + "<br>" + 
    "Color: " + carobj.color + "<br>" + 
    "Type: " + carobj.type;

    var objIndex = getIndex();
    var imagePath = carsArray[objIndex].image;
    // insert code for iterating through the images
    const tag = document.getElementById('carimage');
    tag.setAttribute('src', imagePath);
}

function getIndex(){
    return index;
}
var clicks = 0;
var currindex = getIndex();

function nextCar(){

    clicks += 1;
    currindex +=1;
    console.log(currindex);
    console.log(clicks);

    var nextimage= carsArray[currindex].image;
    console.log(nextimage);
    var path = document.getElementById('carimage');
    path.setAttribute('src',nextimage);
    // currindex += 1;  
    
}

function prevCar(){

    clicks -=1;
    currindex -= 1;


    var nextimage= carsArray[currindex].image;
    console.log(nextimage);
    var path = document.getElementById('carimage');
    path.setAttribute('src',nextimage);

}
var c = 0
function counter(){
    c+=1;
    console.log(c);
}



// myJSON[clicks].image;
// console.log(myJSON[currindex].image);
// var nextimage = carsArray[currindex].image;
// var path = document.getElementById('carimage');
// path.setAttribute('src',nextimage);
// console.log(currindex);
// console.log(currindex);


console.log(carsArray);
// const a = JSON.stringify(car1);
// console.log(a);
// for(let i=0;i<cars.length;i++){
//     var myJSON = JSON.stringify(cars[i]);

// }




