// define variable for table body 
var tbody = d3.select("tbody");

// Create loop for ufo sighting details
data.forEach((ufoDetails) => {
    console.log(ufoDetails);
    // Append table row for each UFO sighting
    var row = tbody.append("tr");
    Object.entries(ufoDetails).forEach(([key, value]) => {
        console.log(key, value);

        // Append a cell to the row for each value in ufo details
        var cell = row.append("td");
        cell.text(value);
    });
});

// Define variable for data in js file
var ufo = data;

// Select button on form for date filtering
var button = d3.select("#filter-btn");

// Select form used for entering date to filter
var form = d3.select("#form");

// Create event handlers for clicking the button to filter by date
// or by pressing enter
button.on("click", runEnter);
form.on("submit", runEnter);

// Create funcion to run for both clicking the button and pressing enter
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Define variable for input date and select id that stores the date
    var inputDate = d3.select("#datetime");
    // Define variable for value property of input date
    var inputValue = inputDate.property("value");
    console.log(inputValue)
    
    var filteredData = ufo.filter(info => info.datetime === inputValue);
    console.log(filteredData);

    d3.select("td").text(inputValue);
};