var printName = document.getElementById('firstname1');
var printInstitude = document.getElementById('institude1');
var printAge = document.getElementById('age1');
var printResult = document.getElementById('result1');

var displayName = document.getElementById('firstname');
var displayInstitude = document.getElementById('institude');
var displayAge = document.getElementById('age');
var displayResult = document.getElementById('result');

var displayCard = document.getElementById('maincard');

// function InsertRest(namee,institude,age,result){
//         this.namee2=namee,
//         this.institute2=institude,
//         this.age2=age,
//         this.result2=result
// }

// function insertResult(){
//     var b = new InsertRest(printName,printInstitude,printAge,printResult);
    
//     displayName.innerHTML = printName.Value;
//     displayInstitude.innerHTML = printInstitude.value;
//     displayAge.innerHTML = printAge.value;
//     displayResult.innerHTML = printResult.value;

// console.log(b);

// console.log(b.age2)
// }


function stdresult(name,institude,age,result){
    var obj = {
        name : name,
        institude : institude,
        age : age,
        result : result
    }
    return obj;
}


var newVar = stdresult(printName,printInstitude,printAge,printResult);



function insertResult(){
    displayName.innerHTML = 'Name: '+ printName.value;
    displayInstitude.innerHTML ='Institute: '+ printInstitude.value;
    displayAge.innerHTML = 'Age: '+ printAge.value;
    displayResult.innerHTML ='Result: ' +printResult.value;
    
    console.log(newVar.age.value,newVar.name.value,newVar.result.value);
    console.log(newVar.institute.value)
}

// displayCard.innerHTML = 
//     `<div class="card border-success mb-3" style="max-width: 18rem;">
//     <!-- <div class="card-header bg-transparent border-success">Header</div> -->
//     <div class="card-body text-success">
//       <h5 class="card-title" id="firstname">Name: </h5>
//       <p class="card-text" id="institude">Institude: </p>
//       <p class="card-text" id="age">Age: </p>
//       <p class="card-text" id="result">Result: </p>
//       <!-- <p class="card-text">status: <p class="card-text"  id="status"></p></p> -->
//     </div>
//     <!-- <div class="card-footer bg-transparent border-success">Footer</div> -->
//   </div>`
    // console.log(newVar.value);