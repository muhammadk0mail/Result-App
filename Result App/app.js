var printName = document.getElementById('name');
var printInstitude = document.getElementById('institude');
var printAge = document.getElementById('age');
var printResult = document.getElementById('result');

// function komail(){

// }

function insertResult(){
    var a = {
        name:printName.value,
        age:printAge.value,
        institute:printInstitude.value,
        result:printResult.value
    }

    console.log(a.name);
}


insertResult();

// var b = insertResult();


// console.log(a.name);

// var arr = [a]
// for(var i=0; i<arr.length;i++){
// }