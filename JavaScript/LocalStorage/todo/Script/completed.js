var complted=JSON.parse(localStorage.getItem("compltedList"));
console.log(complted);


complted.map(function(elem,index){

    var row = document.createElement("tr")
    var col1 = document.createElement("td");
    col1.innerText=elem.name;
    var col2 = document.createElement("td");
    col2.innerText=elem.qty;
    var col3 = document.createElement("td");
    col3.innerText=elem.priority;

    row.append(col1,col2,col3)
    document.querySelector("#body").append(row)


})