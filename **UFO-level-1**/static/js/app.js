// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData)

//Initially appending the data to the table for viewing
tableData.forEach(sighting => {
    var row = d3.select("tbody").append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value)
    });
});

//On click function for filter loop for sorting the data
let button = d3.select("#filter-btn")

button.on("click", function(){
    let  filterDate = d3.select("#datetime").property("value");
    console.log(filterDate)

    //Filtering data for rows that == filterDate
    filteredData = tableData.filter(tableData => tableData.datetime === filterDate);
    //Clearing tbody section for new set
    d3.select("tbody").html("")

    // For Each row, add it to tbody
    filteredData.forEach(sighting => {
        var row = d3.select("tbody").append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value)
        });
    });
})