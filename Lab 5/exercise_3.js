var size = 12
var x = new Array(size);

function assign(){
  for(let i=0;i<x.length;i++){
    x[i] = i+1;
  }
  return x;
}

function avg(arr){
  let sum = 0;
  for(let i=0;i<=arr.length;i++){
    sum += i;
  }
  return sum/arr.length;
}

function standard_deviation(arr){
  let mean = avg(arr);
  let sum = 0;
  for(let i=0;i<arr.length;i++){
    sum = sum + Math.pow((arr[i]-mean),2);
  }
  let sd = Math.sqrt((sum)/arr.length-1);
  return sd;
}
let arr = assign();
let avg_sum = avg(arr);
let sd = standard_deviation(arr);
document.write("<p>This is how the array looks like: "+arr + "</p>");
document.write("<p>The avereage of the elements is: "+ avg_sum + "</p>")
console.log("The avereage of the elements is: "+ avg_sum );
document.write("<p>This is the standard deviation: "+ sd +"</p>");
