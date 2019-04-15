var tableData = data;

tbody = d3.select("tbody")


function createTable(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    var row = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        row.append("td").text(value)	
    })
})}

createTable(tableData);

var submit = d3.select("#filter-btn")

submit.on("click", function() {
  d3.event.preventDefault();
  var userInputDate = d3.select("#datetime");
  console.log("The date the user input is")
  console.log(userInputDate.property("value"));
  var filteredData = tableData.filter(sighting => sighting.datetime === userInputDate.property("value"));

createTable(filteredData)
userInputDate.on("change", filterDate)
});