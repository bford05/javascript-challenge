// define variable for table body 
var tbody = d3.select("tbody");

// Define variable for data in js file
var ufo = data;

// Create loop for ufo sighting details
ufo.forEach((ufoDetails) => {
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
    // Clear out table on html prior 
    tbody.html("")
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Define variable for input date and select id that stores the date
    var inputDate = d3.select("#datetime");
    // Define variable for value property of input date
    var inputValue = inputDate.property("value");
    console.log(inputValue)

    // Create empty list for search parameter date
    inputDateMatch = []

    // Use the form input to filter the data by date
    ufo.forEach(event => {
        Object.values(event).forEach(value =>{
            if (inputValue === value ){
                inputDateMatch.push(event);      
                    }
                }
            );
        }
    );
    console.log(inputDateMatch);

    //Append table to show data matching search
    inputDateMatch.forEach((dateMatch) => {
        var row = tbody.append("tr");
        Object.entries(dateMatch).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
      });

    //Message to display if there are no matching results
    if (inputDateMatch.length == 0) {
        console.log("There is no data matching your search.")
        d3.select("tbody")
        .append("tr")
        .append("td")
          .attr("colspan", 7)
          .html("<h4>There is no data matching your search.</h4>");
    }
}
